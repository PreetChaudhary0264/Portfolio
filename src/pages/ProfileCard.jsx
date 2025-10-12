import React, { useEffect, useRef } from "react";
import { Mail, MapPin, Calendar, Phone, Github, Linkedin } from "lucide-react";
import MyPhoto from ".././assets/MyPhoto.jpg";

const ProfileCard = ({ isOpen, setIsOpen }) => {
  const cardRef = useRef(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={cardRef}
      className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 transition-all duration-300"
    >
      {/* Profile Image + Basic Info */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <img
          src={MyPhoto}
          alt="Preet Chaudhary"
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-md mb-4 sm:mb-2"
        />
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
          Preet Chaudhary
        </h2>
        <p className="text-sm text-gray-300 mb-4 sm:mb-0">
          Web Developer | CSE Student
        </p>
      </div>

      {/* Contact + Social Section */}
      <div className="flex-1 space-y-4 text-sm text-gray-200 w-full">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <p className="flex items-center gap-3 break-all">
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
            <span>09/10/2005</span>
          </p>
        </div>

        <hr className="border-neutral-800 w-full sm:w-3/4 my-4" />

        {/* Social Links */}
        <div className="flex justify-center sm:justify-start gap-6">
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
      </div>
    </div>
  );
};

export default ProfileCard;


