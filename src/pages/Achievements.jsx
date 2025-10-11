import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSocketdotio, SiLangchain, SiPostman, SiGithub } from "react-icons/si";

const Achievements = () => {
  const achievements = [
    "Solved 750+ DSA problems on LeetCode.",
    "Secured All India Rank 235 out of 32,378 participants in a national-level coding challenge organized by Naukri Campus",
    "5th Rank in CodeNow- DSA Problem Solving Round at MIET Meerut.",
    "Topped the class in my first Sem."
  ];

  const skills = [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React", icon: FaReact },
    { name: "Express.js", icon: SiExpress },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Socket.io", icon: SiSocketdotio },
    { name: "Langchain", icon: SiLangchain },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
    { name: "JWT", icon: FaGitAlt },
  ];

  return (
    <div className="text-gray-200 bg-neutral-900 space-y-24 px-10 py-24">
      
      {/* Achievements Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Achievements</h2>
        <div className="relative ml-10">
          {/* Vertical line */}
          <div className="absolute top-0 left-2 w-1 bg-blue-500 h-full"></div>

          {/* Timeline items with animation */}
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="relative mb-12 pl-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.6 }}
            >
              {/* Circle */}
              <div className="absolute -left-0 top-0 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              {/* Achievement Text */}
              <p className="text-gray-300">{ach}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-blue-400">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 text-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-2xl shadow-md hover:shadow-blue-500/30 transition hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="text-5xl text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Achievements;


