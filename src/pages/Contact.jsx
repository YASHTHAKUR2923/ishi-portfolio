// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-white mb-6">📬 Contact Me</h2>
        <form className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-white dark:bg-gray-700" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-white dark:bg-gray-700" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 mb-4 rounded bg-white dark:bg-gray-700"></textarea>
          <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700 transition">Send Message</button>
        </form>

        <div className="mt-6 flex justify-center gap-6 text-2xl text-indigo-600 dark:text-white">
          <a href="https://github.com/Ishirastogi" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ishi-rastogi-72a6422b1" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/RastogiIshi" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
