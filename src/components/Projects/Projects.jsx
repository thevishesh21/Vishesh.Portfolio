import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: "fas fa-rocket",
      title: "Coming Soon",
      description: "Exciting projects are in development. Stay tuned for amazing tech innovations!",
      tags: ["React", "Node.js"]
    },
    {
      icon: "fas fa-brain",
      title: "AI Project",
      description: "Machine learning project focusing on predictive analytics and data visualization.",
      tags: ["Python", "TensorFlow"]
    },
    {
      icon: "fas fa-microchip",
      title: "IoT Solution",
      description: "Internet of Things project combining hardware and software for smart automation.",
      tags: ["Arduino", "Raspberry Pi"]
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
              <div className="project-icon-wrapper">
                <i className={`${project.icon} project-icon`}></i>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
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
            Exciting projects are under development and will be showcased here shortly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;