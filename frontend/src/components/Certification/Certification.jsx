import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import './Certification.css';

// Import certificate icon - adjust path based on your folder structure
import certificateIcon from "../../assets/icons/icon.jpg";


const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      icon: "fas fa-certificate",
      iconImage: certificateIcon,
      title: "HeLa Crossroads ANDC",
      description: "Certificate of Participation for active involvement in tech initiatives",
      link: "https://credsverse.com/credentials/a864b86d-9212-45ea-aae5-11d0071f08c6"
    },
    {
      icon: "fas fa-microchip",
      iconImage: certificateIcon,
      title: "Raspberry Pi Training Session",
      description: "Completed hands-on training in Raspberry Pi programming and circuit design",
      link: "https://www.linkedin.com/in/the-vishesh-/details/certifications/1763571322214/single-media-viewer/?profileId=ACoAAFeR-74BPxhBvtAdlHfN5jfld0M-b3kob7s"
    },
    {
      icon: "fas fa-users",
      iconImage: certificateIcon,
      title: "AI And IOT Workshop",
      description: "Participated in workshop on AI and IoT technologies and applications",
      link: "https://www.linkedin.com/in/the-vishesh-/details/certifications/1766301104567/single-media-viewer/?profileId=ACoAAFeR-74BPxhBvtAdlHfN5jfld0M-b3kob7s"
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
                  {cert.iconImage ? (
                    <img 
                      src={cert.iconImage} 
                      alt={`${cert.title} certificate`} 
                      className="certification-icon-image" 
                    />
                  ) : (
                    <i className={`${cert.icon} certification-icon`}></i>
                  )}
                </div>
              </div>
              
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
              </div>

              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="certification-btn"
                >
                  View Certificate
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="view-all-container"
        >
          <motion.a
            href="https://www.linkedin.com/in/the-vishesh-/details/certifications/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="view-all-btn"
          >
            View All Certificates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;