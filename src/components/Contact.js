import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        Feel free to reach out!
      </motion.p>
      <div className="contact-links">
        <motion.a
          href="mailto:your.email@example.com" /* TODO: Replace with your actual email */
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button email"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          Email Me
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourprofile" /* TODO: Replace with your actual LinkedIn profile */
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button linkedin"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="https://github.com/sladerose" /* TODO: Replace with your actual GitHub profile */
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button github"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;