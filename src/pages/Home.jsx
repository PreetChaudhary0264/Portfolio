import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaTrophy, FaCode, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const cardData = [
  { icon: FaBrain, text: "Mastering DSA", color: "yellow-400" },
  { icon: FaLaptopCode, text: "Web Development", color: "blue-400" },
  { icon: FaTrophy, text: "Participating in Hackathons", color: "green-400" },
  { icon: FaCode, text: "Learning GenAI", color: "purple-400" },
];

const Home = () => {
  return (
    <div className="relative text-gray-200 overflow-hidden bg-neutral-900">

      {/* About Me Section */}
      <motion.section
        className="px-6 sm:px-10 py-10 max-w-6xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-base sm:text-lg text-gray-300 mb-6 text-justify leading-relaxed">
          I am <b>Preet Chaudhary</b>, a 3rd-year B.Tech Computer Science and Engineering student at
          IMS Engineering College, Ghaziabad, with a strong passion for software development and
          problem-solving. I specialize in MERN Stack Web Development and have hands-on experience in
          building responsive, fast, and user-friendly web applications.
          <br />
          <br />
          I am highly proficient in Data Structures and Algorithms (DSA), which enables me to approach
          challenges with logical and optimized solutions. Currently, I am exploring Generative AI to
          understand and build intelligent, next-generation systems.
          <br />
          <br />
          I enjoy learning new technologies, exploring innovative ideas, and applying my skills to
          real-world projects. My goal is to grow as a full-stack developer, contribute to impactful and
          scalable solutions, and continuously sharpen my technical expertise while evolving with
          emerging technologies.
        </p>

        {/* Resume + LeetCode Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 bg-white rounded-xl text-black hover:bg-cyan-100 flex items-center justify-center gap-2 transition text-center"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="https://leetcode.com/Preet_Chaudhary264"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-black bg-white rounded-xl hover:bg-cyan-100 flex items-center justify-center gap-2 transition text-center"
          >
            <SiLeetcode /> View LeetCode
          </a>
        </motion.div>
      </motion.section>

      {/* WHAT I AM DOING Section */}
      <motion.section
        className="px-6 sm:px-10 py-16 bg-gradient-to-b from-gray-900 to-black max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-400 text-center sm:text-left">
          WHAT I AM DOING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-10 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }} // ⚡ faster stagger
            >
              <item.icon className="text-6xl text-white mx-auto mb-6" />
              <p className="text-xl">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Collaboration Section */}
      <motion.section
        className="relative px-6 sm:px-10 py-16 max-w-6xl mx-auto text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Soft gradient glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 rounded-2xl blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-blue-400 tracking-tight text-center sm:text-left">
            Why Collaborate With Me?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
            I’m always eager to collaborate on meaningful and forward-thinking projects.
            Whether it’s developing a startup idea, crafting high-performance web applications,
            or integrating AI-driven solutions — I bring strong problem-solving skills,
            full-stack expertise, and a deep enthusiasm for continuous learning.
            Let’s work together to build something impactful and inspiring.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;








