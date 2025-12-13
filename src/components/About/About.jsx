import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoCards = [
    {
      icon: "🎓",
      title: "Education",
      subtitle: "B.Sc. (Hons.) Electronics",
      description: "ANDC College, Delhi University"
    },
    {
      icon: "🏫",
      title: "Background",
      subtitle: "12th Grade - CBSE Board",
      description: "Strong Academic Foundation"
    },
    {
      icon: "🚀",
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
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-underline"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="about-content"
        >
          <div className="about-card">
            <h3 className="about-subtitle">Who Am I?</h3>
            
            <div className="about-text">
              <p>
                I'm <strong>Vishesh Pal</strong>, a passionate Electronics Engineering student at ANDC College, Delhi University. With a strong foundation from CBSE 12th grade, I'm diving deep into the world of technology and innovation.
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
              {infoCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="info-card"
                >
                  <div className="info-icon">{card.icon}</div>
                  <h4 className="info-title">{card.title}</h4>
                  <p className="info-subtitle">{card.subtitle}</p>
                  <p className="info-description">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;