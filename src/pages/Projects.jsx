import React, { useState } from 'react';
import mypet from '../assets/mypet.jpg';
import upskill from '../assets/upskill-11.webp';
import medConnect from '../assets/medConnect.webp';
import MediBot2 from '../assets/MediBot2.webp';
import  CodeReviewAI  from '../assets/CodeReviewAI.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web'); // default: web

  const webProjects = [
    {
      title: 'UpCode',
      description:
        'UpCode is an interactive web platform that allows developers to learn, practice, and share coding challenges efficiently. Built with React and modern web technologies, it focuses on clean UI, real-time feedback, and community engagement to help users improve their coding skills.',
      image: upskill,
      link: 'https://upcode-1.onrender.com',
    },
    {
      title: 'MyPet',
      description:
        'MyPet is a pet management application that allows users to register their pets, keep track of health records, and access nearby veterinary clinics or pet stores. The app also generates QR codes for each pet to provide instant pet-owner information in emergencies.',
      image: mypet,
      link: 'https://mypetfrontend1.vercel.app',
    },
    {
      title: 'MedConnect',
      description:
        'MedConnect is an integrated healthcare platform that connects patients, doctors, hospitals, and NGOs. Its primary goal is to reduce medical waste by allowing users to donate unused or near-expiry medicines to those in need.',
      image: medConnect,
      link: 'https://github.com/yourusername/medconnect',
    },
  ];

  const genAIProjects = [
    {
      title: 'RevAI',
      description:
        ' Implemented an autonomous AI agent pipeline that automatically reviews pull requests, detects logical flaws, and posts contextual review comments directly to GitHub PRs using the GitHub REST API-reducing review turnaround time',
      image: CodeReviewAI,
      link: 'https://revai-1.netlify.app/',
    },
    {
      title: 'MediBot',
      description:
        'An AI-powered web app that analyzes medical reports (PDFs or images) and explains them in simple terms — with a built-in chatbot for health insights.',
      image: MediBot2,
      link: 'https://github.com/PreetChaudhary0264/MediBot',
    },
  ];

  const displayedProjects = activeTab === 'web' ? webProjects : genAIProjects;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-200 bg-neutral-900">
      <h1 className="text-4xl font-bold mb-8 text-blue-400 text-center md:text-left animate-fadeSlide">
        Projects
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center md:justify-start gap-4 mb-10">
        <button
          onClick={() => setActiveTab('web')}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === 'web'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab('genai')}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === 'genai'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          GenAI
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/40 transition-transform duration-300 hover:scale-105 opacity-0 animate-fadeSlide"
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium transition-all duration-200"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





