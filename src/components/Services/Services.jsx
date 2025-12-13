import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Font Awesome आइकन्स इंपोर्ट किए गए
import { FaLaptopCode, FaCloud, FaChartBar, FaCogs } from 'react-icons/fa'; 
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      // Icon कंपोनेंट का रेफरेंस
      Icon: FaLaptopCode, 
      title: "Website Development",
      description: "Modern, responsive web applications using React.js, HTML5, CSS3, and JavaScript. Clean code and user-friendly interfaces.",
      tags: ["React", "JavaScript", "CSS3"]
    },
    {
      Icon: FaCloud, 
      title: "Cloud Services",
      description: "AWS cloud solutions for scalable and reliable infrastructure. Deployment, configuration, and optimization.",
      tags: ["AWS", "Cloud", "DevOps"]
    },
    {
      Icon: FaChartBar, 
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using Python, Pandas, NumPy, and Matplotlib for visualization.",
      tags: ["Python", "Pandas", "Analytics"]
    },
    {
      Icon: FaCogs, 
      title: "Automation Solutions",
      description: "Python-based automation scripts to streamline workflows, reduce manual tasks, and increase efficiency.",
      tags: ["Python", "Automation", "Scripts"]
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
    <section id="services" ref={ref} className="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">SERVICES</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Professional services tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="services-grid"
        >
          {services.map((service, index) => {
            const IconComponent = service.Icon; 

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="service-card"
              >
                <div className="service-icon">
                  {/* IconComponent को रेंडर किया गया */}
                  <IconComponent /> 
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;