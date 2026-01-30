import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@yourportfolio.com',
      link: 'mailto:contact@yourportfolio.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@yourhandle',
      link: 'https://twitter.com',
    },
  ];

  return (
    <Element name="contact">
      <section className="contact">
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="title-underline"></div>

          <p className="contact-subtitle">
            Let's build something legendary together!
          </p>

          <div className="contact-content">
            <motion.div 
              className="contact-methods"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Ways to Connect</h3>
              <div className="methods-list">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="method-item"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="method-icon">{method.icon}</span>
                    <div className="method-info">
                      <p className="method-label">{method.label}</p>
                      <p className="method-value">{method.value}</p>
                    </div>
                    <span className="method-arrow">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                  rows="5"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? '✓ Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.p 
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
