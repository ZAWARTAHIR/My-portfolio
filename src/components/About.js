import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import '../styles/about.css';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { id: 1, title: 'Milestone', image: '/images/1.jpg' },
    { id: 2, title: 'Milestone', image: '/images/2.jpg' },
    { id: 3, title: 'Milestone', image: '/images/3.png' },
    { id: 4, title: 'Milestone', image: '/images/4.png' },
    { id: 5, title: 'Milestone', image: '/images/5.jpg' },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  const getWrappingDiff = (index) => {
    const N = cards.length;
    if (N <= 1) return 0;
    let diff = index - activeIndex;
    const maxForward = (N - 1) / 2;
    if (diff > maxForward) diff -= N;
    else if (diff <= -N / 2) diff += N;
    return diff;
  };

  const getCardStyles = (index) => {
    const diff = getWrappingDiff(index);
    const absDiff = Math.abs(diff);
    if (absDiff > 2) {
      return {
        opacity: 0, visibility: 'hidden',
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
      opacity, zIndex, visibility: 'visible',
    };
  };

  return (
    <Element name="about">
      <section className="about">
        <motion.div
          className="about-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ── Left: Text (Updated to match provided design) ── */}
          <motion.div
            className="about-content"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-intro">
              <h4 className="section-title">{'// ABOUT ME'}</h4>
              <div className="title-underline"></div>

              <h1 className="big-heading">
                Crafting Digital
                <br />
                <span className="highlight">Experiences</span>
              </h1>

              <p className="about-text lead">
                Hey there! I'm Zawar, a passionate Full-Stack Web Developer. I love turning creative
                ideas into real, functional, and beautiful websites that make people go "wow!"
              </p>

              <p className="about-text">
                I specialize in the <span className="hero-mern">MERN Stack</span> and <span className="hero-mern">n8n automation</span>, with a strong eye for UI/UX.
                Whether it's a startup MVP or a full enterprise app, I bring technical expertise and
                creative thinking to every project.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                </div>
                <div className="feature-body">
                  <h5>Fast Delivery</h5>
                  <p>Clean, optimized code delivered on schedule, every time.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="feature-body">
                  <h5>Pixel Perfect</h5>
                  <p>Obsessive attention to detail in every component.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                    <polyline points="7 8 3 12 7 16" />
                    <path d="M11 8 L13 16" />
                    <polyline points="17 8 21 12 17 16" />
                  </svg>
                </div>
                <div className="feature-body">
                  <h5>Clean Code</h5>
                  <p>Readable, maintainable, and well-structured codebases.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bulb">
                    <path d="M9 18h6" />
                    <path d="M12 2a7 7 0 0 0-3 13.9V18a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 2z" />
                  </svg>
                </div>
                <div className="feature-body">
                  <h5>Creative Mind</h5>
                  <p>Fresh ideas and innovative solutions on every project.</p>
                </div>
              </div>
            </div>

            {/* stats boxes removed for this section as requested */}
          </motion.div>

          {/* ── Right: 3D Coverflow Slider ── */}
          <motion.div
            className="about-slider-col"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="coverflow-container">
              <button className="nav-arrow prev-arrow" onClick={handlePrev} aria-label="Previous">
                <span>&#8249;</span>
              </button>

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
                      <div className="card-img-area">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="card-photo"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=500';
                          }}
                        />
                      </div>
                      <div className="card-label"><span>{card.title}</span></div>
                    </div>
                  );
                })}
              </div>

              <button className="nav-arrow next-arrow" onClick={handleNext} aria-label="Next">
                <span>&#8250;</span>
              </button>

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
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;
