// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-lg bg-white/60 transition-shadow ${
        scrolling ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
          Ishi.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium text-gray-800">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <a href={link.href} className="hover:text-indigo-600 transition duration-300">
                {link.name}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-indigo-700 text-2xl">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 bg-white/90 rounded-xl p-6 shadow-xl"
          >
            <ul className="flex flex-col gap-4 text-gray-800 font-semibold text-lg">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={() => setNavOpen(false)}
                    className="block hover:text-pink-500 transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
