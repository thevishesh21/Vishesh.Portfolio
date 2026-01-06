/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAws, FaCloud, FaServer, FaDatabase, FaLaptopCode, FaReact, FaNodeJs, FaChartLine, FaPython, FaTable, FaMicrochip, FaWifi, FaRaspberryPi, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const whyChooseRef = useRef(null);
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, margin: "-100px" });
  const detailRef = useRef(null);
  const isDetailInView = useInView(detailRef, { once: true, margin: "-100px" });

  const mainServices = [
    {
      Icon: FaAws,
      title: "AWS Cloud Solutions",
      description: "Empower your business with scalable and secure cloud-based solutions tailored to your needs.",
      color: "#FF9900"
    },
    {
      Icon: FaLaptopCode,
      title: "Full Stack Web Development",
      description: "Build modern, responsive web applications using cutting-edge technologies and best practices.",
      color: "#3b82f6"
    },
    {
      Icon: FaChartLine,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights to make smarter business decisions.",
      color: "#8b5cf6"
    },
    {
      Icon: FaMicrochip,
      title: "IoT Solutions",
      description: "Innovative IoT implementations connecting devices for smart automation and monitoring.",
      color: "#10b981"
    }
  ];

  const detailedServices = [
    {
      Icon: FaCloud,
      title: "AWS Cloud Computing",
      description: "Businesses are moving to the cloud for scalability, flexibility, and security. Public, private, and hybrid cloud solutions are shaping the future of IT infrastructure."
    },
    {
      Icon: FaServer,
      title: "Cloud Infrastructure",
      description: "Deploy and manage scalable cloud infrastructure using AWS EC2, S3, Lambda, and other services for optimal performance and cost efficiency."
    },
    {
      Icon: FaDatabase,
      title: "Database Management",
      description: "Design and implement robust database solutions using AWS RDS, DynamoDB, and other managed database services for reliable data storage."
    },
    {
      Icon: FaReact,
      title: "Modern Web Development",
      description: "Modern web applications use React.js, Next.js, and AI-driven tools for fast, secure, and scalable digital experiences."
    },
    {
      Icon: FaNodeJs,
      title: "Backend Development",
      description: "Build powerful server-side applications with Node.js, Express, and RESTful APIs for seamless client-server communication."
    },
    {
      Icon: FaPython,
      title: "Data Science & Analytics",
      description: "Leverage Python, Pandas, NumPy, and Matplotlib for comprehensive data analysis, visualization, and predictive modeling."
    },
    {
      Icon: FaTable,
      title: "Business Intelligence",
      description: "Create interactive dashboards and reports to visualize key metrics and drive data-driven decision making across your organization."
    },
    {
      Icon: FaRaspberryPi,
      title: "IoT Hardware Integration",
      description: "Connect and control physical devices using Raspberry Pi, Arduino, and various sensors for real-time monitoring and automation."
    },
    {
      Icon: FaWifi,
      title: "IoT Connectivity",
      description: "Implement secure IoT communication protocols and cloud connectivity for seamless device-to-device and device-to-cloud interactions."
    }
  ];

  const whyChoose = [
    {
      Icon: FaCheckCircle,
      title: "Have Expert Team",
      description: "Experienced professionals with deep technical knowledge"
    },
    {
      Icon: FaCheckCircle,
      title: "Quality Delivery",
      description: "Proven track record with 99.9% project success rate"
    },
    {
      Icon: FaCheckCircle,
      title: "Innovation Focused",
      description: "Commitment to innovation and cutting-edge solutions"
    },
    {
      Icon: FaCheckCircle,
      title: "Client Satisfaction",
      description: "Trusted by clients worldwide for exceptional service"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-content"
          >
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Innovative solutions tailored to empower your business and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section ref={ref} className="main-services-section">
        <div className="services-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="main-services-grid"
          >
            {mainServices.map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="main-service-card"
                >
                  <div className="main-service-icon" style={{ color: service.color }}>
                    <IconComponent />
                  </div>
                  <h3 className="main-service-title">{service.title}</h3>
                  <p className="main-service-description">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyChooseRef} className="why-choose-section">
        <div className="services-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title-blue">Why Choose Me ?</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isWhyChooseInView ? "visible" : "hidden"}
            className="why-choose-grid"
          >
            {whyChoose.map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="why-choose-card"
                >
                  <IconComponent className="why-choose-icon" />
                  <h4 className="why-choose-title">{item.title}</h4>
                  <p className="why-choose-description">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section ref={detailRef} className="detailed-services-section">
        <div className="services-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isDetailInView ? "visible" : "hidden"}
            className="detailed-services-grid"
          >
            {detailedServices.map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="detailed-service-card"
                >
                  <div className="detailed-service-header">
                    <div className="detailed-service-icon">
                      <IconComponent />
                    </div>
                    <h3 className="detailed-service-title">{service.title}</h3>
                  </div>
                  <p className="detailed-service-description">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-cta-content"
          >
            <h2 className="services-cta-title">
              Ready to elevate your business with our expert solutions?
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="services-cta-button"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;