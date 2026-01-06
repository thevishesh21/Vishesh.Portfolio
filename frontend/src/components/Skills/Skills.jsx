import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaLinux, FaDatabase, FaAws, FaReact, FaChartBar } from 'react-icons/fa'; 
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", level: 85, Icon: FaHtml5, color: "html-color" },
    { name: "CSS3", level: 80, Icon: FaCss3Alt, color: "css-color" },
    { name: "JavaScript", level: 75, Icon: FaJsSquare, color: "js-color" },
    { name: "Python", level: 70, Icon: FaPython, color: "python-color" },
    { name: "MySQL", level: 65, Icon: FaDatabase, color: "mysql-color" },
    { name: "Linux", level: 60, Icon: FaLinux, color: "linux-color" },
    // 👈 नई स्किल्स जोड़ी गईं
    { name: "AWS", level: 55, Icon: FaAws, color: "aws-color" },
    { name: "React", level: 70, Icon: FaReact, color: "react-color" },
    { name: "Data Analysis", level: 65, Icon: FaChartBar, color: "analysis-color" } 
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
          {}
          <h3 className="section-title">SKILLS & EXPERTISE</h3> 
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="skills-grid"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon;

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="skill-card"
              >
                <div className="skill-icon-wrapper">
                  <IconComponent className="skill-icon" />
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;