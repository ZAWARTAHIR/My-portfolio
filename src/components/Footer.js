import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'f', label: 'Facebook', url: 'https://facebook.com' },
    { icon: 'in', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'gh', label: 'GitHub', url: 'https://github.com' },
    { icon: 't', label: 'Twitter', url: 'https://twitter.com' },
  ];

  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-top">
          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Portfolio</h3>
            <p>Crafting digital experiences with passion and precision.</p>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Home</ScrollLink></li>
              <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">About</ScrollLink></li>
              <li><ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Skills</ScrollLink></li>
              <li><ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Projects</ScrollLink></li>
              <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className="footer-link">Contact</ScrollLink></li>

            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Social</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.label[0].toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="footer-divider"></div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} My Portfolio. Designed and developed with 💖 by <strong>Your Name</strong>
          </p>
          <p className="footer-credits">
            All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
