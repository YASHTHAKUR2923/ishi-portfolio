// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Template Management System",
    description: "Workflow automation for template approvals with real-time updates and status tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://github.com/Ishirastogi/template-management"
  },
  {
    title: "Hotel Booking Platform",
    description: "Search and manage hotel reservations with smart filters and a user dashboard.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    link: "https://github.com/Ishirastogi/hotel-booking"
  },
  {
    title: "MemeVerse",
    description: "Explore, upload, and react to memes with smooth animations and performance optimization.",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion"],
    link: "https://github.com/Ishirastogi/memeverse"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, j) => (
                <span key={j} className="text-sm px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
