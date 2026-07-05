import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import '../styles/hero.css';

const Hero = () => {
  const particlesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { id: 1, title: 'Achievement 1', image: '/images/me-removebg-preview.png' },
    { id: 2, title: 'Achievement 2', image: '/images/me-removebg-preview.png' },
    { id: 3, title: 'Achievement 3', image: '/images/me-removebg-preview.png' },
    { id: 4, title: 'Achievement 4', image: '/images/me-removebg-preview.png' },
    { id: 5, title: 'Achievement 5', image: '/images/me-removebg-preview.png' },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // ── Exact same wrapping diff logic from BlogsSliderReusable ──
  const getWrappingDiff = (index) => {
    const N = cards.length;
    if (N <= 1) return 0;
    let diff = index - activeIndex;
    const maxForward = (N - 1) / 2;
    if (diff > maxForward) diff -= N;
    else if (diff <= -N / 2) diff += N;
    return diff;
  };

  // ── Exact same card style calc from BlogsSliderReusable ──
  const getCardStyles = (index) => {
    const diff = getWrappingDiff(index);
    const absDiff = Math.abs(diff);

    if (absDiff > 2) {
      return {
        opacity: 0,
        visibility: 'hidden',
        transform: `translate3d(${diff > 0 ? 300 : -300}px, 0, -300px) scale(0.6) rotateY(${diff > 0 ? -40 : 40}deg)`,
        zIndex: 0,
      };
    }

    const spacing = isMobile ? 85 : 170;
    const overlapOffset = isMobile ? 25 : 50;
    const zSpacing = isMobile ? 90 : 140;

    let translateX = diff * spacing;
    if (diff > 0) translateX -= overlapOffset;
    else if (diff < 0) translateX += overlapOffset;

    const translateZ = -absDiff * zSpacing;
    const rotateY = diff === 0 ? 0 : diff > 0 ? -40 : 40;
    const scale = diff === 0 ? 1.05 : 0.88 - (absDiff - 1) * 0.05;
    const opacity = diff === 0 ? 1 : 0.65 - (absDiff - 1) * 0.2;
    const zIndex = 20 - absDiff;

    return {
      transform: `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      visibility: 'visible',
    };
  };

  // Particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const particles = [];

    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 3;
      const colors = [
        'var(--primary-color)',
        'var(--secondary-color)',
        'var(--accent-color)',
        'rgba(0, 212, 255, 0.4)',
        'rgba(124, 58, 237, 0.4)',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        background: ${randomColor};
        box-shadow: 0 0 15px ${randomColor}, 0 0 30px ${randomColor};
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * -12}s;
        border-radius: 50%;
        position: absolute;
        opacity: 0.7;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Element name="hero">
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-particles" ref={particlesRef}></div>

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Left Column ── */}
          <div className="hero-left-column">
            <motion.div variants={itemVariants} className="hero-text-group">
              <h1 className="hero-title">
                <span className="creative">CREATIVE</span>
              </h1>
              <h1 className="hero-title subtitle">
                Web Developer &amp; Engineer
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-description">
              I craft beautiful, functional digital experiences through code and
              design. Specializing in Frontend &amp; Backend Development.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right Column – 3D Coverflow Slider ── */}
          <div className="hero-right-column">
            <div className="coverflow-container">
              {/* Prev arrow */}
              <button className="nav-arrow prev-arrow" onClick={handlePrev} aria-label="Previous">
                <span>&#8249;</span>
              </button>

              {/* Track */}
              <div className="coverflow-track">
                {cards.map((card, index) => {
                  const cardStyle = getCardStyles(index);
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={card.id}
                      className={`coverflow-card${isActive ? ' active' : ''}`}
                      style={cardStyle}
                      onClick={() => !isActive && setActiveIndex(index)}
                    >
                      {/* Image fills most of the card */}
                      <div className="card-img-area">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="card-photo"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=500';
                          }}
                        />
                      </div>

                      {/* Title at the very bottom */}
                      <div className="card-label">
                        <span>{card.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next arrow */}
              <button className="nav-arrow next-arrow" onClick={handleNext} aria-label="Next">
                <span>&#8250;</span>
              </button>

              {/* Dots */}
              <div className="coverflow-dots">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    className={`coverflow-dot${activeIndex === idx ? ' active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Hero;
