// src/pages/Services.jsx
import React from 'react';
import { FaCode, FaServer, FaLaptopCode, FaWordpress, FaFigma, FaDatabase, FaShoppingCart, FaPlug } from 'react-icons/fa';

const services = [
  { icon: <FaCode />, title: 'Full Stack Web Development' },
  { icon: <FaLaptopCode />, title: 'Frontend Development' },
  { icon: <FaServer />, title: 'Backend Development' },
  { icon: <FaWordpress />, title: 'WordPress Development' },
  { icon: <FaFigma />, title: 'UI/UX Design & Prototyping' },
  { icon: <FaDatabase />, title: 'Database Design & Management' },
  { icon: <FaShoppingCart />, title: 'E-Commerce & CMS Development' },
  { icon: <FaPlug />, title: 'API Development & Integration' },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-white mb-12">🛠 Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
          >
            <div className="text-indigo-600 text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
