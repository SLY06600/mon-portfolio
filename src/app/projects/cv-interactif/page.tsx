"use client";

import { useState } from "react";
import { cvData } from "@/data/cvData";
import Link from "next/link";

// ✅ Définition claire et typée des onglets
const TAB_LABELS = {
  description: "Description",
  skills: "Compétences",
  experience: "Expériences",
  projects: "Projets",
  education: "Formation",
  contact: "Contact",
} as const;

type TabKey = keyof typeof TAB_LABELS;

export default function CvInteractif() {
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white px-6 py-16 max-w-5xl mx-auto space-y-12">
      {/* En-tête */}
      <header className="text-center">
        <img
          src={cvData.personalInfo.photo}
          alt={cvData.personalInfo.name}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h1 className="text-4xl font-bold">{cvData.personalInfo.name}</h1>
        <p className="text-gray-600">{cvData.personalInfo.title}</p>
      </header>

      {/* Onglets */}
      <div className="flex justify-center space-x-2 mb-8 flex-wrap">
        {(Object.keys(TAB_LABELS) as TabKey[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-semibold transition ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Contenu des onglets */}
      <div className="border rounded-b-lg p-6 bg-gray-50 space-y-4">
        {/* Description */}
        {activeTab === "description" && (
          <p className="text-gray-700 text-lg">{cvData.about}</p>
        )}

        {/* Compétences */}
        {activeTab === "skills" && (
          <div className="space-y-4">
            {Object.entries(cvData.technicalSkills).map(([category, list], idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {category.toUpperCase()}
                  <span>{openIndex === idx ? "−" : "+"}</span>
                </button>
                {openIndex === idx && (
                  <div className="p-4 bg-gray-50 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {(list as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Expériences */}
        {activeTab === "experience" && (
          <div className="space-y-4">
            {cvData.experiences.map((exp, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {exp.title} ({exp.period})
                  <span>{openIndex === idx ? "−" : "+"}</span>
                </button>
                {openIndex === idx && (
                  <div className="p-4 bg-gray-50 text-gray-700">
                    <p>{exp.description}</p>
                    <p className="mt-2 font-medium text-gray-600">{exp.location}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projets */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            {cvData.personalProjects.map((proj, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg mb-2">{proj.title}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {proj.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Formation */}
        {activeTab === "education" && (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {cvData.education.map((edu, idx) => (
              <li key={idx}>
                <span className="font-medium">{edu.degree}</span> — {edu.school} (
                {edu.period})
              </li>
            ))}
          </ul>
        )}

        {/* Contact */}
        {activeTab === "contact" && (
          <div className="space-y-2 text-gray-700">
            {cvData.contact.map((c, idx) => (
              <p key={idx}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.text}
                  </a>
                ) : (
                  c.text
                )}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Retour */}
      <div className="text-center">
        <Link href="/projects" className="inline-block mt-6 text-blue-500 hover:underline">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
