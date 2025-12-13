import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// 👈 Font Awesome आइकन्स इंपोर्ट किए गए
import { FaGraduationCap, FaSchool, FaRocket } from 'react-icons/fa'; 
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      // इमोजी की जगह Icon कंपोनेंट का रेफरेंस
      Icon: FaGraduationCap, 
      title: "Education",
      subtitle: "B.Sc. (Hons.) Electronics",
      description: "ANDC College, Delhi University"
    },
    {
      Icon: FaSchool, 
      title: "Background",
      subtitle: "12th Grade - CBSE Board",
      description: "Strong Academic Foundation"
    },
    {
      Icon: FaRocket, 
      title: "Passion",
      subtitle: "Technology Enthusiast",
      description: "AI & Robotics Explorer"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" ref={ref} className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="about-card"
        >
          <div className="about-content">
            <h3 className="about-subtitle">Hi, I'm Vishesh Pal.</h3>
            <div className="about-text">
              <p>
                I am an ambitious B.Sc. (Hons.) Electronics Engineering student at ANDC College, Delhi University. With a strong foundation from CBSE 12th grade, I'm diving deep into the world of technology and innovation.
              </p>
              <p>
                My interests include AI, robotics, and exploring the latest advancements in electronics. I believe in the power of technology to transform lives and am excited to contribute to this field.
              </p>
              <p>
                Feel free to connect with me on social media or through the contact form below.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="info-grid"
            >
              {infoCards.map((card, index) => {
                const IconComponent = card.Icon; // Icon कंपोनेंट को डीस्ट्रक्चर करें
                
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                    className="info-card"
                  >
                    {/* इमोजी की जगह IconComponent को रेंडर करें */}
                    <div className="info-icon">
                      <IconComponent />
                    </div>
                    <h4 className="info-title">{card.title}</h4>
                    <p className="info-subtitle">{card.subtitle}</p>
                    <p className="info-description">{card.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;