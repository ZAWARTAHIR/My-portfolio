import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Element, scroller } from 'react-scroll';
import '../styles/hero.css';

const Hero = () => {
  const particlesRef = useRef(null);
  const [typed, setTyped] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'Full-Stack Developer',
    'Node.js Developer',
    'n8n Automation Expert',
  ];

  const descriptions = [
    <>A passionate <span className="hero-mern">Full-Stack</span> Web Developer turning creative ideas into real, functional, and beautiful websites. Specializing in the <span className="hero-mern">MERN Stack</span> — building scalable apps that make people go "wow!"</>,
    <>Backend specialist crafting fast, scalable <span className="hero-mern">Node.js</span> APIs and microservices. From RESTful endpoints to real-time WebSocket apps — I build the engine that powers the web.</>,
    <>Workflow automation ninja using <span className="hero-mern">n8n</span> to connect apps, automate repetitive tasks, and build powerful no-code/low-code pipelines that save hours of manual work every day.</>,
  ];

  // Looping typewriter with backspace effect
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const tick = () => {
      const current = roles[roleIndex];

      if (!isDeleting) {
        // Typing forward
        charIndex++;
        setTyped(current.slice(0, charIndex));
        if (charIndex === current.length) {
          // Pause at end before deleting
          isDeleting = true;
          timeout = setTimeout(tick, 2200);
          return;
        }
        timeout = setTimeout(tick, 140);
      } else {
        // Deleting (backspace)
        charIndex--;
        setTyped(current.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setRoleIndex(roleIndex);
          timeout = setTimeout(tick, 800);
          return;
        }
        timeout = setTimeout(tick, 90);
      }
    };

    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
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
        box-shadow: 0 0 10px ${randomColor};
        animation-duration: ${Math.random() * 12 + 10}s;
        animation-delay: ${Math.random() * -12}s;
        border-radius: 50%;
        position: absolute;
        opacity: 0.6;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.4 } },
  };

  const terminalLines = [
    { prompt: '$', command: 'whoami', output: 'zawar — full-stack developer', outputClass: 'term-highlight' },
    { prompt: '$', command: 'cat skills.txt', output: 'React · Node · n8n · MongoDB · Express', outputClass: 'term-skills' },
    { prompt: '$', command: 'status', output: '✓ Available for projects', outputClass: 'term-available' },
  ];

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

            {/* Available badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot"></span>
              AVAILABLE FOR HIRE
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="hero-greeting">
              Hello, World! 👋
            </motion.p>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="hero-name">
              I'm <span className="hero-name-highlight">Zawar</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="hero-typewriter">
              <span className="typewriter-dollar">$</span>
              <span className="typewriter-cursor"></span>
              <span className="typewriter-text">{typed}</span>
              <span className="typewriter-blink">|</span>
            </motion.div>

            {/* Description — changes per role */}
            <motion.p
              key={roleIndex}
              className="hero-description"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {descriptions[roleIndex]}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scroller.scrollTo('projects', { smooth: true, duration: 500, offset: -70 })}
              >
                View Projects →
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scroller.scrollTo('contact', { smooth: true, duration: 500, offset: -70 })}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="hero-socials">
              <a href="https://github.com/ZAWARTAHIR" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/zawar-tahir-742535342/" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/zawar_tahir?igsh=anh2a3lpZXExZ2N3" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── Right Column — Terminal ── */}
          <motion.div className="hero-right-column" variants={rightVariants}>
            <div className="terminal-window">
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="t-dot red"></span>
                  <span className="t-dot yellow"></span>
                  <span className="t-dot green"></span>
                </div>
                <span className="terminal-title">zawar@portfolio — bash</span>
              </div>

              {/* Terminal body */}
              <div className="terminal-body">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="terminal-line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.4 }}
                  >
                    <div className="terminal-line-cmd">
                      <span className="term-prompt">{line.prompt}</span>
                      <span className="term-command"> {line.command}</span>
                    </div>
                    <div className={`term-output ${line.outputClass}`}>{line.output}</div>
                  </motion.div>
                ))}
                <motion.div
                  className="terminal-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <div className="terminal-line-cmd">
                    <span className="term-prompt">$</span>
                    <span className="term-blink-cursor"> ▋</span>
                  </div>
                </motion.div>
              </div>

              {/* Stats row */}
              <div className="terminal-stats">
                {[
                  { num: '2+', label: 'Years Exp.' },
                  { num: '30+', label: 'Projects' },
                  { num: '15+', label: 'Clients' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="t-stat"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + i * 0.15 }}
                  >
                    <span className="t-stat-num">{s.num}</span>
                    <span className="t-stat-label">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Hero;
