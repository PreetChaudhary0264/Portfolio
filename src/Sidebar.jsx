import React from "react";
import { Mail, MapPin, Calendar, Phone, Github, Linkedin } from "lucide-react";
import MyPhoto from './assets/MyPhoto.jpg';

const Sidebar = () => {
  return (
    <aside className="w-[240px] flex-shrink-0 border-r border-neutral-800 py-10 flex flex-col items-center bg-neutral-900 rounded-xl">
      {/* Profile Image */}
      <img
        src={MyPhoto}
        alt="Preet Chaudhary"
        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4"
      />
      <h2 className="text-2xl font-bold text-white mb-2">Preet Chaudhary</h2>
      <p className="text-sm text-gray-300 mb-6 text-center">CSE Student</p>

      {/* Contact Info */}
      <div className="space-y-3 text-sm text-gray-200 w-full px-6">
        <p className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span>spray264preet@gmail.com</span>
        </p>
        <p className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span>+91-8433070121</span>
        </p>
        <p className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span>Ghaziabad, Uttar Pradesh</span>
        </p>
        <p className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span>28/02/2005</span>
        </p>
      </div>

      <hr className="border-neutral-800 w-3/4 my-6" />

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/PreetChaudhary0264"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-colors text-white"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/preet-chaudhary-5523a0306"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition-colors text-white"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;










