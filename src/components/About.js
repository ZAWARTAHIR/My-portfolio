import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import '../styles/about.css';

const About = () => {
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
          <motion.div 
            className="about-content"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">ABOUT ME</h2>
            <div className="title-underline"></div>

            <p className="about-text">
              I'm a passionate web developer and software engineer with a love for creating 
              innovative digital experiences. With expertise in both frontend and backend technologies, 
              I transform ideas into elegant, functional solutions.
            </p>

            <p className="about-text">
              My journey in tech started with a curiosity about how things work. Today, I combine 
              creative problem-solving with technical expertise to deliver projects that make a real impact.
            </p>

            <div className="about-stats">
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>5+</h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>50+</h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>30+</h3>
                <p>Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <img
                src="/images/me-removebg-preview.png"
                alt="Me"
                className="about-photo"
                onError={(e) => {
                  // first fallback: try the other PNG, then fallback to SVG if that fails
                  if (!e.target.dataset.fallback) {
                    e.target.dataset.fallback = 'png1';
                    e.target.src = '/images/me-removebg-preview.png';
                  } else {
                    e.target.onerror = null;
                    // e.target.src = '/images/me-removebg-preview.svg';
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;
