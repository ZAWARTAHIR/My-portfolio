import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import '../styles/skills.css';

const faqItems = [
  {
    id: '01',
    question: 'What technologies do you work with?',
    answer: 'I build with React, Node.js, Express, MongoDB, n8n, Tailwind, and modern deployment tools.',
  },
  {
    id: '02',
    question: 'How do you handle custom workflows?',
    answer: 'I design and automate workflows using n8n and API integrations to streamline business processes.',
  },
  {
    id: '03',
    question: 'Can you work on existing projects?',
    answer: 'Yes — I can join ongoing projects, review code, and extend features without disrupting current systems.',
  },
  {
    id: '04',
    question: 'What is your deployment process?',
    answer: 'I deploy apps with Vercel, Netlify, or custom cloud infrastructure, including CI/CD and monitoring.',
  },
  {
    id: '05',
    question: 'Do you provide post-launch support?',
    answer: 'I offer maintenance, bug fixes, updates, and optimization after launch to keep your product stable.',
  },
  {
    id: '06',
    question: 'How do you start a new project?',
    answer: 'I begin with a discovery call, define requirements, propose a roadmap, then build iteratively.',
  },
  {
    id: '07',
    question: 'Can you handle both design and development?',
    answer: 'Yes, I combine visuals and code to deliver polished interfaces and working products end-to-end.',
  },
  {
    id: '08',
    question: 'Are you available for remote work?',
    answer: 'Absolutely — I collaborate remotely with clear communication, timezone planning, and regular updates.',
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);
  const activeItem = faqItems.find((item) => item.id === activeId);

  return (
    <Element name="faq">
      <section className="faq-section">
      <div className="faq-grid">
        <div className="faq-panel">
          <span className="section-label">{'// FAQS'}</span>
          <h2 className="faq-title">Got <span>Questions?</span></h2>
          <p className="faq-intro">Can’t find the answer? Reach out directly — I respond fast.</p>

          <motion.div
            className="faq-cta-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <p className="cta-label">Still have questions?</p>
              <h4>I'm just a message away.</h4>
            </div>
            <button
              type="button"
              className="cta-button"
              onClick={() => scroller.scrollTo('contact', { smooth: true, offset: -80, duration: 600 })}
            >
              Ask Me
            </button>
          </motion.div>

          <div className="faq-terminal-card">
            <div className="terminal-header">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p className="terminal-command">$ faq --count</p>
              <p className="terminal-output">→ {faqItems.length} questions found</p>
              <p className="terminal-command">$ faq --active</p>
              <p className="terminal-output">
                → {activeItem ? `${activeItem.id} selected: ${activeItem.question}` : 'none selected'}
              </p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = item.id === activeId;
            return (
              <motion.div
                key={item.id}
                className={`faq-item ${isOpen ? 'expanded' : ''}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                onClick={() => setActiveId(isOpen ? null : item.id)}
              >
                <div className="faq-item-header">
                  <div className="faq-item-title-row">
                    <span className="faq-item-number">{item.id}</span>
                    <h4 className="faq-item-question">{item.question}</h4>
                  </div>
                  <span className={`faq-item-arrow ${isOpen ? 'open' : ''}`}>⏷</span>
                </div>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>
    </Element>
  );
};

export default Faq;
