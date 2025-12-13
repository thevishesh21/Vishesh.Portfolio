import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Font Awesome Icons को react-icons/fa से इंपोर्ट किया गया
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      // अब icon क्लास की जगह Icon कंपोनेंट का रेफरेंस
      Icon: FaLinkedinIn, 
      url: 'https://www.linkedin.com/in/vishesh-pal-93a03a350/',
      color: 'linkedin'
    },
    { 
      name: 'GitHub', 
      Icon: FaGithub, 
      url: 'https://github.com/thevishesh21',
      color: 'github'
    },
    { 
      name: 'Instagram', 
      Icon: FaInstagram, 
      url: 'https://www.instagram.com/the_vishesh_21/',
      color: 'instagram'
    },
    { 
      name: 'Twitter', 
      Icon: FaTwitter, 
      url: 'https://x.com/Vishesh_Pal_21',
      color: 'twitter'
    }
  ];

  return (
    <section id="contact" ref={ref} className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="section-underline"></div>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-textarea"
                  placeholder="Your Message"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="submit-btn"
              >
                Send Message
              </motion.button>
              
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="success-message"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="social-wrapper"
          >
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => {
                // Icon कंपोनेंट को लिंक ऑब्जेक्ट से बाहर निकालें
                const IconComponent = link.Icon; 

                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`social-link ${link.color}`}
                  >
                    {/* Icon कंपोनेंट को सीधे रेंडर करें और CSS क्लास दें */}
                    <IconComponent className="social-icon" />
                    
                    <span className="social-name">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;