'use client';

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { cvData } from "../data/cvData";

export default function Footer() {
  
  const { t } = useTranslation("footer"); // Assurez-vous que le namespace est correct
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-center md:text-left">
          &copy; {year ?? ""} Baraduc Sylvain. {t('footer.rights')}
        </p>
        <div className="flex space-x-6 text-xl">
          <a href={cvData.contact.find((c) => c.icon === "gith")?.href || "#"} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={cvData.contact.find((c) => c.icon === "linkedin")?.href || "#"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${cvData.contact.find((c) => c.icon === "email")?.text || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
