import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaTrophy, FaCode, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div className="text-gray-200 bg-neutral-900 space-y-24 overflow-hidden">

      {/* About Me Section */}
      <motion.section
        className="px-10 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-400 mb-6">About Me</h1>
        <p className="text-lg text-gray-300 mb-4">
          I am Preet Chaudhary, a passionate MERN Stack Developer. I love building full-stack web applications that are fast, responsive, and user-friendly. Currently, I am diving into Generative AI to explore the future of intelligent systems. I am also highly proficient in Data Structures & Algorithms, solving complex problems efficiently. My goal is to create impactful projects while continuously learning and growing.
        </p>

        {/* Resume + LeetCode Links */}
        <motion.div
          className="flex gap-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 flex items-center gap-2 transition"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="https://leetcode.com/Preet_Chaudhary264"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-yellow-500 rounded-xl hover:bg-yellow-600 flex items-center gap-2 transition"
          >
            <SiLeetcode /> View LeetCode
          </a>
        </motion.div>
      </motion.section>

      {/* WHAT I AM DOING Section */}
      <motion.section
        className="px-10 py-10 bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400">WHAT I AM DOING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[{icon: FaBrain, text: "Mastering DSA", color:"yellow-400"},
            {icon: FaLaptopCode, text: "Web Development", color:"blue-400"},
            {icon: FaTrophy, text: "Participating in Hackathons", color:"green-400"},
            {icon: FaCode, text: "Learning GenAI", color:"purple-400"}].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <item.icon className={`text-5xl text-${item.color} mx-auto mb-4`} />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact / Collaboration Section */}
      <motion.section
        className="px-10 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">Why Collaborate With Me?</h2>
        <p className="text-lg text-gray-300">
          I am always open to collaborating on innovative projects. Whether you are building a startup, working on exciting web applications, or exploring AI-driven solutions, I bring strong problem-solving skills, full-stack expertise, and a passion for learning to every project. Let’s connect and create something amazing together!
        </p>
      </motion.section>

    </div>
  );
};

export default Home;







