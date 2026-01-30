import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { useRef, useState, useEffect } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Vue.js', level: 80 },
    { name: 'TypeScript', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'MongoDB', level: 88 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'REST APIs', level: 92 },
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

          <div className="skills-grid">
            {/* Frontend */}
            <motion.div 
              className="skill-category"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="category-title">
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
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="category-title">
                Backend Development
              </h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} isInView={isInView} delayIndex={index + 6} />
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
        <span className="skill-name">{skill.name}</span>
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