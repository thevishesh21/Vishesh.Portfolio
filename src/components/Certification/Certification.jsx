import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './Certification.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      icon: "fas fa-certificate",
      title: "HeLa Crossroads ANDC",
      description: "Certificate of Participation for active involvement in tech initiatives"
    },
    {
      icon: "fas fa-microchip",
      title: "Raspberry Pi Training Session",
      description: "Completed hands-on training in Raspberry Pi programming and circuit design"
    },
    {
      icon: "fas fa-users",
      title: "SPIE Society Member",
      description: "Actively contributing to events and collaborative learning initiatives"
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
    <section id="certifications" ref={ref} className="certifications">
      <div className="certifications-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">CERTIFICATIONS & ACHIEVEMENTS</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="certifications-grid"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="certification-card"
            >
              <div className="certification-icon-container">
                <div className="certification-icon-wrapper">
                  <i className={`${cert.icon} certification-icon`}></i>
                </div>
              </div>
              
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;