// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
      
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I’m a Full Stack Developer passionate about turning ideas into functional, scalable, and beautiful apps.
          I build intuitive UIs, robust APIs, and optimize performance with modern tools like React, Node.js, Python, and more.
        </p>
        <a
          href="/cv.pdf"
          download
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;
