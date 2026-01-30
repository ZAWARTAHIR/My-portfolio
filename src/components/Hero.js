import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import '../styles/hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Element name="hero">
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-text-group">
            <h1 className="hero-title">
              <span className="creative">CREATIVE</span>
            </h1>
            <h1 className="hero-title subtitle">
              Web Developer & Engineer
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="hero-description"
          >
            I craft beautiful, functional digital experiences through code and design.
            <br />
            Specializing in Frontend & Backend Development
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="hero-buttons"
          >
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Let's Connect</button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="scroll-indicator"
          >
            <span>SCROLL TO KNOW MORE</span>
            <div className="scroll-icon">
              <div className="scroll-dot"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="floating-shapes"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Hero;
