// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const cardVariants = {
  animate: {
    scale: [1, 1.02, 1],
    boxShadow: [
      '0 0 0 rgba(0,0,0,0)',
      '0 8px 25px rgba(139,92,246,0.2)',
      '0 0 0 rgba(0,0,0,0)'
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const Home = () => {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* ✨ Stars BG */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: 'stars',
          background: {
            color: '#fdf4ff' // light pinkish bg
          },
          fullScreen: { enable: true, zIndex: -1 }
        }}
      />

      {/* 🌟 Magic Card */}
      <motion.div
        variants={cardVariants}
        animate="animate"
        className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 text-center border border-purple-200"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text"
        >
          I’m Ishi Rastogi 👨‍💻
        </motion.h1>

        {/* ✨ Typewriter Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-xl text-gray-700 font-medium"
        >
          <span className="inline-block bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text font-semibold sparkle-text">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer 💻',
                  'React | Node | MongoDB | Python',
                  'UI/UX Designer 🎨',
                  'Problem Solver 🔍',
                  'Let’s build something magical ✨'
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30
              }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto"
        >
          Passionate about building beautiful, scalable apps. From design in Figma to full-stack apps in React & Node — I do it all with a ✨ touch of creative flair.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 text-sm text-gray-500 italic"
        >
          Also addicted to cold showers, clean code & good chai ☕
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a
            href="https://github.com/Ishirastogi"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-pink-500 font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ishi-rastogi-72a6422b1"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-pink-500 font-semibold transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/RastogiIshi"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-pink-500 font-semibold transition"
          >
            Twitter
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
