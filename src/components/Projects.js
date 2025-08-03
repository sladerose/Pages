import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Project Alpha',
    problem: 'Many small businesses struggle with inefficient inventory management, leading to stockouts or overstocking.',
    solution: 'Developed a cloud-based inventory tracking system with real-time updates and predictive analytics, reducing waste by 15%.',
    githubLink: 'https://github.com/sladerose/project-alpha',
    liveDemoLink: '#',
  },
  {
    title: 'Project Beta',
    problem: 'Freelancers often find it difficult to manage client communications and project deadlines effectively.',
    solution: 'Created a streamlined CRM and project management tool tailored for individual contractors, improving client satisfaction by 25%.',
    githubLink: 'https://github.com/sladerose/project-beta',
    liveDemoLink: '#',
  },
  {
    title: 'Project Gamma',
    problem: 'Non-profit organizations need better ways to track donations and engage with their donor base.',
    solution: 'Built a secure donor management platform with integrated communication features, increasing donor retention by 10%.',
    githubLink: 'https://github.com/sladerose/project-gamma',
    liveDemoLink: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My Solutions
      </motion.h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
          >
            <h3>{project.title}</h3>
            <h4>The Problem:</h4>
            <p>{project.problem}</p>
            <h4>My Solution:</h4>
            <p>{project.solution}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              {project.liveDemoLink && (
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;