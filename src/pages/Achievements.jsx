import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiLangchain,
  SiPostman,
  SiGithub,
} from "react-icons/si";

const Achievements = () => {
  const achievements = [
    "Solved 900+ DSA problems on platforms like LeetCode & GFG.",
    "Secured All India Rank 235 out of 32,378 participants in a national-level coding challenge organized by Naukri Campus.",
    "5th Rank in CodeNow - DSA Problem Solving Contest organized by DMCP.",
    "Topped the class in my first semester.",
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IMS Engineering College, Ghaziabad",
      duration: "2023 - Present",
      details: "CGPA : 8.8/10.0",
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "CJC School, Garhmukteshwar",
      duration: "2021 - 2022",
      details: "Percentage : 84%",
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "CJC School, Garhmukteshwar",
      duration: "2019 - 2020",
      details: "Percentage : 80%",
    },
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
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fadeSlide">
          Achievements
        </h2>

        <div className="relative ml-10">
          <div className="absolute top-0 left-2 w-1 bg-blue-500 h-full"></div>

          {achievements.map((ach, index) => (
            <div
              key={index}
              className="relative mb-10 pl-8 opacity-0 animate-fadeSlide"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="absolute -left-0 top-0 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <p className="text-gray-300">{ach}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fadeSlide">
          Education
        </h2>

        <div className="relative ml-10">
          <div className="absolute top-0 left-2 w-1 bg-blue-500 h-full"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative mb-10 pl-8 opacity-0 animate-fadeSlide"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="absolute -left-0 top-0 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-blue-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-2">{edu.duration}</p>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-blue-400 animate-fadeSlide">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 text-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-2xl shadow-md hover:shadow-blue-500/30 transition hover:scale-105 opacity-0 animate-fadeSlide"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <Icon className="text-5xl text-blue-400 mb-2" />
                <p className="text-gray-300 text-sm">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
