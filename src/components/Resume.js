import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        For a detailed overview of my professional experience, education, and skills,
        please download my resume.
      </motion.p>
      <motion.a
        href="/path/to/your/resume.pdf" /* TODO: Replace with actual path to your resume PDF */
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-button"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume (PDF)
      </motion.a>
    </section>
  );
}

export default Resume;