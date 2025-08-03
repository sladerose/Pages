import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="about-section"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Hello! I'm Slade Rose, a passionate Solution Architect and the Development and Applications Manager at Athenium Consulting. 
        My career is dedicated to transforming complex challenges into elegant, scalable, and efficient software solutions. 
        I thrive on understanding real-world problems and leveraging technology to build impactful applications that drive success.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        With a strong background in full-stack development and a keen eye for architectural design, 
        I enjoy crafting solutions from concept to deployment. This website is a showcase of my approach 
        to problem-solving, featuring projects where I've tackled specific issues with innovative and practical applications.
      </motion.p>
    </motion.section>
  );
}

export default About;