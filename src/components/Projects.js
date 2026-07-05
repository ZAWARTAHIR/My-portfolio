import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRef } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Mehfil — Event Platform',
      categories: ['fullstack', 'backend'],
      description: 'A full-featured event management platform for UCP, with event listings, registrations, and an admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Vercel'],
      image: '/images/mehfil fulstack.png',
      featured: true,
      link: 'https://mehfil-ucp.vercel.app/',
    },
    {
      id: 2,
      title: 'Ramzan Calendar',
      categories: ['fullstack', 'backend'],
      description: 'An interactive Ramzan calendar with Sehri & Iftar timings, prayer schedules, and a clean modern UI.',
      technologies: ['React', 'Prayer Times API', 'CSS3', 'Vercel'],
      image: '/images/ramzan fullstack.png',
      featured: true,
      link: 'https://ramzan-calendar.vercel.app/',
    },
    {
      id: 3,
      title: 'UCP CSS Society',
      categories: ['fullstack', 'automation', 'backend'],
      description: 'Official website for the UCP Computer Science Society with a built-in chatbot, menu images, events, and society activities.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chatbot', 'Netlify'],
      image: '/images/ucpcs fullstack.png',
      featured: true,
      link: 'https://ucpcssociety.netlify.app/',
    },
    {
      id: 4,
      title: 'Dextra Bit',
      categories: ['fullstack', 'automation', 'backend'],
      description: 'A smart automation-powered full-stack platform built to streamline digital workflows and enhance productivity.',
      technologies: ['React', 'Node.js', 'Automation', 'Vercel'],
      image: '/images/dextrabit fulstack.png',
      featured: true,
      link: 'https://dextra-bit.vercel.app/',
    },
    {
      id: 5,
      title: 'Tap Counter',
      categories: ['frontend'],
      description: 'A clean, interactive tap counter application with state saving and custom settings.',
      technologies: ['React', 'CSS3', 'Local Storage', 'Vercel'],
      image: '/images/Tap counter.png',
      featured: true,
      link: 'https://tapcounter-pearl.vercel.app/',
    },
    {
      id: 6,
      title: 'UCP Gameon',
      categories: ['fullstack', 'backend'],
      description: 'A sports event registration and gaming management platform for UCP with tournament brackets and live updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
      image: '/images/ucpgameon.png',
      featured: true,
      link: 'https://ucpgameon.vercel.app/',
    },
    {
      id: 7,
      title: 'Flappy Bird Game',
      categories: ['frontend'],
      description: 'A classic Flappy Bird arcade game built on the web with interactive physics, score tracking, and smooth animations.',
      technologies: ['HTML5 Canvas', 'CSS3', 'JavaScript', 'Netlify'],
      image: '/images/birdflappy.png',
      featured: true,
      link: 'https://birdflapy.netlify.app/',
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(selectedCategory));


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
      transition: { duration: 0.6 },
    },
  };

  return (
    <Element name="projects">
      <section className="projects">
        <div ref={ref} className="projects-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            MY WORK
          </motion.h2>

          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div 
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['all', 'frontend', 'backend', 'fullstack', 'automation'].map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            key={selectedCategory} // Added key to force remount on category change
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3 }} // Smooth transition for grid
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' }}
                transition={{ delay: index * 0.1 }} // Stagger individual cards
              >
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={
                        project.id === 3 && selectedCategory === 'automation'
                          ? '/images/ucpcs automation.png'
                          : project.image
                      }
                      alt={project.title}
                      className="project-img"
                    />
                  ) : (
                    <span className="image-emoji">🗂️</span>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project →
                      </a>
                    ) : (
                      <button className="project-link" disabled style={{ opacity: 0.45, cursor: 'not-allowed' }}>
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;