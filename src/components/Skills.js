import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  technical: [
    'JavaScript (ES6+)', 'Python', 'Node.js', 'React.js', 'SQL', 'NoSQL',
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'RESTful APIs', 'GraphQL',
    'Git', 'CI/CD', 'Microservices', 'Serverless Architectures',
  ],
  soft: [
    'Problem Solving', 'Strategic Planning', 'Team Leadership', 'Communication',
    'Stakeholder Management', 'Agile Methodologies', 'Mentorship',
  ],
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <div className="skills-container">
        <div className="skill-category">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          <ul className="skills-list">
            {skillsData.technical.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Soft Skills
          </motion.h3>
          <ul className="skills-list">
            {skillsData.soft.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;