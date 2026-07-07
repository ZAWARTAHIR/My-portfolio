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
    
    // The WhatsApp number where messages will be sent
    const phoneNumber = "923037065198"; 
    
    // Construct the WhatsApp message
    const text = `Hello Zawar, you have a new message from your portfolio:%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'chzawartahir12@gmail.com',
      link: 'mailto:chzawartahir12@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/zawar-tahir-742535342/',
      link: 'https://www.linkedin.com/in/zawar-tahir-742535342/',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/ZAWARTAHIR',
      link: 'https://github.com/ZAWARTAHIR',
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@zawar_tahir',
      link: 'https://www.instagram.com/zawar_tahir?igsh=anh2a3lpZXExZ2N3',
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

            <motion.div
              className="terminal-window"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="t-dot red" />
                  <span className="t-dot yellow" />
                  <span className="t-dot green" />
                </div>
                <div className="terminal-title">send_message.sh</div>
              </div>

              <motion.form className="contact-form" onSubmit={handleSubmit}>
                <div className="terminal-body">
                  <div className="form-group">
                    <label className="field-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="field-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="field-label">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Discussion / Freelance Work"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="field-label">Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, budget, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input form-textarea"
                      rows="8"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn whatsapp-send"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? '✓ Sent!' : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 10 }}>
                          <path d="M22 2L11 13" stroke="#07141a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#07141a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="#07141a" opacity="0.04" />
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
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
                </div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Contact;
