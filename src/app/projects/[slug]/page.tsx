"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function ProjectPage() {
  const { slug } = useParams(); // récupère le slug depuis l'URL
  const { t } = useTranslation("project");

  const sideProjects = t("projects", { returnObjects: true }) as Array<{
    image: string;
    title: string;
    description: string;
    slug: string;
    points: string[];
  }>;

  const project = sideProjects.find((p) => p.slug === slug);

  if (!project) return <p>Projet non trouvé.</p>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-600 mb-6">{project.description}</p>

        {project.points && project.points.length > 0 && (
          <ul className="list-disc ml-6 text-gray-600">
            {project.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
