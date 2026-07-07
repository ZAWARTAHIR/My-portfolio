import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/skills.css';

const buildCards = [
  {
    id: '01',
    title: 'Frontend Development',
    desc: 'Stunning responsive UIs with React.js, modern CSS, and smooth animations.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind'],
    icon: 'monitor',
  },
  {
    id: '02',
    title: 'Backend Development',
    desc: 'Robust RESTful APIs and server-side logic with Node.js & Express.',
    tags: ['Node.js', 'Express', 'REST API', 'JWT Auth'],
    icon: 'server',
  },
  {
    id: '03',
    title: 'Database Design',
    desc: 'Optimized MongoDB databases with proper schemas, indexing, and aggregation.',
    tags: ['MongoDB', 'Mongoose', 'Aggregation', 'Indexing'],
    icon: 'database',
  },
  {
    id: '04',
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end MERN Stack applications from concept to deployment.',
    tags: ['MERN Stack', 'Redux', 'Socket.io', 'Deploy'],
    icon: 'phone',
  },
  {
    id: '05',
    title: 'UI/UX Design',
    desc: 'Beautiful wireframes and prototypes focused on usability and conversions.',
    tags: ['Figma', 'Wireframes', 'Prototypes', 'Design Systems'],
    icon: 'palette',
  },
  {
    id: '06',
    title: 'n8n Automation',
    desc: 'Automations and integrations using n8n to streamline workflows.',
    tags: ['n8n', 'Automation', 'Workflow', 'Integrations'],
    icon: 'zap',
  },
];

const Build = () => {
  return (
    <Element name="services">
      <section className="services-section">
      <div className="services-header">
        <h2 className="section-title" data-text="WHAT I BUILD">WHAT I BUILD</h2>
        <div className="title-underline" />
        <p>From full-stack apps to automation workflows, I build real products and business tools.</p>
      </div>
      <div className="service-grid">
        {buildCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 * index }}
          >
            <div className="terminal-header card-terminal-header">
              <div className="terminal-dots">
                <span className="t-dot red" />
                <span className="t-dot yellow" />
                <span className="t-dot green" />
              </div>
              <div className="terminal-title">{card.title}</div>
            </div>
            <div className="service-card-top">
              <span className="service-card-icon">{getServiceIcon(card.icon)}</span>
              <span className="service-card-index">{card.id}</span>
            </div>
            <div className="service-card-body">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <div className="service-card-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </section>
    </Element>
  );
};

const getServiceIcon = (type) => {
  switch (type) {
    case 'monitor':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case 'server':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="6" rx="2" ry="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" ry="2" />
          <path d="M7 9h.01" />
          <path d="M7 19h.01" />
        </svg>
      );
    case 'database':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
          <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case 'palette':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0-1-17.94" />
          <path d="M17.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path d="M7.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          <path d="M12 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      );
    case 'zap':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    default:
      return <span>+</span>;
  }
};

export default Build;
