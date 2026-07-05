import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="navbar">
      <motion.div 
        className="navbar-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-logo">
          <span className="logo-text">Portfolio</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        <div className="theme-selector-wrapper">
          <div className="theme-segmented-control">
            <div className={`control-slider active-${theme}`} />
            <button 
              className={`control-btn ${theme === 'default' ? 'active' : ''}`}
              onClick={() => setTheme('default')}
              title="Dark Neon Theme"
              aria-label="Dark Neon Theme"
            >
              <svg className="control-icon icon-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <span className="control-label">Dark</span>
            </button>
            <button 
              className={`control-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => setTheme('light')}
              title="Clean Light Theme"
              aria-label="Clean Light Theme"
            >
              <svg className="control-icon icon-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <span className="control-label">Light</span>
            </button>
            <button 
              className={`control-btn ${theme === 'cyberpunk' ? 'active' : ''}`}
              onClick={() => setTheme('cyberpunk')}
              title="Cyberpunk Theme"
              aria-label="Cyberpunk Theme"
            >
              <svg className="control-icon icon-cyber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span className="control-label">Cyber</span>
            </button>
          </div>
        </div>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
