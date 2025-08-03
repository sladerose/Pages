import React from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: '1rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        {navLinks.map((link) => (
          <li key={link.name} style={{ margin: '0 1rem' }}>
            <a
              href={link.href}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
