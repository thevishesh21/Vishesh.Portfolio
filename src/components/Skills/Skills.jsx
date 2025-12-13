import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", level: 85, icon: "fab fa-html5", color: "html-color" },
    { name: "CSS3", level: 80, icon: "fab fa-css3-alt", color: "css-color" },
    { name: "JavaScript", level: 75, icon: "fab fa-js-square", color: "js-color" },
    { name: "Python", level: 70, icon: "fab fa-python", color: "python-color" },
    { name: "MySQL", level: 65, icon: "fas fa-database", color: "mysql-color" },
    { name: "Linux", level: 60, icon: "fab fa-linux", color: "linux-color" }
  ];

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="skills" ref={ref} className="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="skill-card"
            >
              <div className="skill-icon-wrapper">
                <i className={`${skill.icon} skill-icon`}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.1, duration: 1 }}
                  className={`skill-bar ${skill.color}`}
                />
              </div>
              <p className="skill-percentage">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;