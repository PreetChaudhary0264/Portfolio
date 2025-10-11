import React from 'react';
import { motion } from 'framer-motion';
import mypet from '../assets/mypet.jpg';
import upskill from '../assets/upskill-11.webp';
import medConnect from '../assets/medConnect.webp';

const Projects = () => {
  const projects = [
    {
      title: 'UpCode',
      description: 'UpCode is an interactive web platform that allows developers to learn, practice, and share coding challenges efficiently. Built with React and modern web technologies, it focuses on clean UI, real-time feedback, and community engagement to help users improve their coding skills.',
      image: upskill,
      link: 'https://upcode-1.onrender.com'
    },
    {
      title: 'MyPet',
      description: 'MyPet is a pet management application that allows users to register their pets, keep track of health records, and access nearby veterinary clinics or pet stores. The app also generates QR codes for each pet to provide instant pet-owner information in emergencies.',
      image: mypet,
      link: 'https://mypetfrontend1.vercel.app'
    },
    {
      title: 'MedConnect',
      description: 'MedConnect is a telemedicine platform designed to provide healthcare access to rural areas. Users can consult doctors remotely, track medicine availability, and donate medicines that are near expiration to those in need. This project emphasizes community healthcare support and easy medical access using mobile technology.',
      image: medConnect,
      link: 'https://github.com/yourusername/medconnect'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-12 text-blue-400">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/40 transition transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




