import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with EmailJS or any service here
    alert('Thank You For Connecting');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-neutral-900 flex flex-col items-center justify-center px-6 py-10">

      <motion.div
        className="max-w-3xl w-full rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 bg-neutral-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black bg-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-white rounded-xl transition-colors font-semibold hover:cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Socials */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 text-white">
          <p className="text-white text-lg">
            You can also reach me at:
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 text-white">
            <Mail className="w-5 h-5 text-blue-400" /> 
            <span>spray264preet@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-white">
            <a href="https://github.com/PreetChaudhary0264" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/preet-chaudhary-5523a0306" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white mt-6">
            Feel free to reach out for collaborations, freelance work, or just to say hi! 
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;


