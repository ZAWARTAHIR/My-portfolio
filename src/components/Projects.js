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
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A modern e-commerce platform with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      featured: true,
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      category: 'frontend',
      description: 'Interactive dashboard for managing multiple social media accounts',
      technologies: ['React', 'Chart.js', 'Tailwind CSS'],
      image: '📊',
      featured: true,
    },
    {
      id: 3,
      title: 'AI Chat Application',
      category: 'fullstack',
      description: 'Real-time chat application with AI-powered responses',
      technologies: ['React', 'Python', 'WebSockets', 'OpenAI API'],
      image: '💬',
      featured: true,
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'frontend',
      description: 'Collaborative task management system with real-time updates',
      technologies: ['Vue.js', 'Firebase', 'Material Design'],
      image: '✓',
      featured: false,
    },
    {
      id: 5,
      title: 'API Gateway Service',
      category: 'backend',
      description: 'Scalable API gateway with authentication and rate limiting',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      image: '🔌',
      featured: false,
    },
    {
      id: 6,
      title: 'Weather Application',
      category: 'frontend',
      description: 'Beautiful weather app with detailed forecasts and animations',
      technologies: ['React', 'Weather API', 'Framer Motion'],
      image: '🌦️',
      featured: false,
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
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
                  <span className="image-emoji">{project.image}</span>
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
                    <button className="project-link">
                      View Project →
                    </button>
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