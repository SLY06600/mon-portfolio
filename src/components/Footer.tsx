import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Baraduc Sylvain. Tous droits réservés.</p>
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/ton-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ton-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:tonemail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
