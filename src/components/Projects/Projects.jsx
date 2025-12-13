import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: "fas fa-newspaper",
      title: "SPIE Blog Page",
      subtitle: "SPIE Student Chapter",
      description: "Responsive blog page for SPIE Student Chapter showcasing technical articles and events with improved accessibility and user interaction.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      icon: "fas fa-user-circle",
      title: "Personal Portfolio Website",
      description: "Fully responsive portfolio website with mobile-first design, showcasing projects, skills, and achievements with smooth animations.",
      tags: ["React.js", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      icon: "fas fa-bolt",
      title: "IoT Home Automation System",
      description: "IoT-based home automation prototype using Raspberry Pi with sensors and actuators for real-time monitoring and automated control.",
      tags: ["Raspberry Pi", "Python", "Electronics"],
      link: "#"
    },
    {
      icon: "fas fa-table-tennis",
      title: "Sports Score Analyzer",
      description: "Sports analysis system for match data and performance trends with data processing, visualization, and statistical insights.",
      tags: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      icon: "fas fa-rocket",
      title: "Coming Soon",
      description: "New innovative projects in development focused on advanced web development, cloud services, and data-driven solutions.",
      tags: ["TBD"],
      link: null
    }
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
    <section id="projects" ref={ref} className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <div className="project-icon-container">
                <div className="project-icon-wrapper">
                  <i className={`${project.icon} project-icon`}></i>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="project-btn"
                  >
                    <i className="fab fa-github"></i>
                    View Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="projects-note"
        >
          <p className="note-text">
            <i className="fas fa-info-circle note-icon"></i>
            More exciting projects are under development and will be showcased here shortly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;