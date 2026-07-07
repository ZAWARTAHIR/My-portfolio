import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRef, useState, useEffect } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tickerInnerRef = useRef(null);
  const tickerGroupRef = useRef(null);

  const frontendSkills = [
    { name: 'React', level: 95, desc: 'UI library' },
    { name: 'JavaScript', level: 90, desc: 'Core language' },
    { name: 'HTML/CSS', level: 95, desc: 'Layout + style' },
    { name: 'Tailwind CSS', level: 90, desc: 'Utility styling' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 90, desc: 'Server runtime' },
    { name: 'Express.js', level: 90, desc: 'API framework' },
    { name: 'MongoDB', level: 88, desc: 'Database engine' },
    { name: 'REST APIs', level: 92, desc: 'HTTP services' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 90, desc: 'NoSQL storage' },
    { name: 'Mongoose', level: 88, desc: 'ODM toolkit' },
    { name: 'Supabase', level: 80, desc: 'Realtime backend' },
    { name: 'Firebase', level: 78, desc: 'App platform' },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', level: 95, desc: 'Version control' },
    { name: 'Docker', level: 72, desc: 'Container tools' },
    { name: 'VS Code', level: 98, desc: 'Code editor' },
    { name: 'n8n', level: 80, desc: 'Flow automation' },
  ];

  return (
    <Element name="skills">
      <section className="skills">
        <div ref={ref} className="skills-container">

          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            TECHNICAL SKILLS
          </motion.h2>

          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Tech Ticker — seamless scrolling list of technologies */}
          <motion.div
            className="tech-ticker-wrapper"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="tech-ticker" aria-hidden="false">
              <div className="ticker-track">
                <div className="ticker-inner" ref={tickerInnerRef}>
                  <div className="ticker-group" ref={tickerGroupRef}>
                    {[
                      'JavaScript','HTML5','CSS3','Tailwind','Git & GitHub','REST API','JWT','Redux',
                      'Mongoose','Supabase','VS Code','Firebase','Socket.io','Express','React','Node.js','MongoDB','n8n'
                    ].map((t, i) => (
                      <div className="ticker-item" key={`g1-${i}`}>{t}</div>
                    ))}
                  </div>

                  <div className="ticker-group" aria-hidden="true">
                    {[
                      'JavaScript','HTML5','CSS3','Tailwind','Git & GitHub','REST API','JWT','Redux',
                      'Mongoose','Supabase','VS Code','Firebase','Socket.io','Express','React','Node.js','MongoDB','n8n'
                    ].map((t, i) => (
                      <div className="ticker-item" key={`g2-${i}`}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="skills-grid">
            {/* Frontend */}
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ rotateX: 6, rotateY: -3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="category-title">
                <span className="skill-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v3" />
                    <path d="M8 4H6a2 2 0 0 0-2 2v3" />
                    <path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" />
                    <path d="M16 12h.01" />
                    <path d="M12 12h.01" />
                    <path d="M8 12h.01" />
                  </svg>
                </span>
                Frontend Development
              </h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} isInView={isInView} delayIndex={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ rotateX: 6, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="category-title">
                <span className="skill-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M6 7V4h12v3" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                  </svg>
                </span>
                Backend Development
              </h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} isInView={isInView} delayIndex={index + 6} />
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 20 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              whileHover={{ rotateX: 6, rotateY: 3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="category-title">
                <span className="skill-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                    <circle cx="8" cy="6" r="2" />
                    <circle cx="16" cy="12" r="2" />
                  </svg>
                </span>
                Databases
              </h3>
              <div className="skills-list">
                {databaseSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} isInView={isInView} delayIndex={index + 12} />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ rotateX: 6, rotateY: -3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="category-title">
                <span className="skill-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l1.5 4.5h4.7l-3.8 2.8 1.4 4.7L12 11.5 8.2 14 9.6 9.5 5.8 6.7h4.7L12 2z" />
                  </svg>
                </span>
                Tools & Workflow
              </h3>
              <div className="skills-list">
                {toolsSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} isInView={isInView} delayIndex={index + 18} />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </Element>
  );
};

// SkillBar with Counting Animation
const SkillBar = ({ skill, isInView, delayIndex }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Reset to 0 when in view
    setDisplayLevel(0);

    const duration = 1600; // total animation time in ms
    const target = skill.level;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayLevel(target);
        clearInterval(timer);
      } else {
        setDisplayLevel(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, skill.level]);

  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: delayIndex * 0.09 }}
      whileHover={{ x: 10, scale: 1.03 }}
    >
      <div className="skill-header">
        <div className="skill-meta">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-desc">{skill.desc}</span>
        </div>
        <motion.span className="skill-level">
          {displayLevel}<span className="percent-symbol">%</span>
        </motion.span>
      </div>

      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
            delay: delayIndex * 0.09 + 0.3
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;

// Measure ticker group width and set CSS vars after mount
// (Placed after export to avoid altering component top-level execution order)
// We attach a small effect via a window event — the effect will set CSS variables
// on the ticker inner element when present.
if (typeof window !== 'undefined') {
  const setTickerVars = () => {
    const inner = document.querySelector('.ticker-inner');
    const group = document.querySelector('.ticker-group');
    if (!inner || !group) return;
    const w = group.offsetWidth;
    inner.style.setProperty('--marquee', `${w}px`);
    // scale duration so longer lists scroll slightly slower
    const duration = Math.max(12, Math.round(w / 30));
    inner.style.setProperty('--marquee-speed', `${duration}s`);
  };
  window.addEventListener('load', setTickerVars);
  window.addEventListener('resize', setTickerVars);
  // also run once now if DOM is ready
  setTimeout(setTickerVars, 50);
}