import React from "react";
import Link from "next/link";

interface ProjectPageProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
}

export default function ProjectPage({
  title,
  description,
  image,
  technologies,
  features,
}: ProjectPageProps) {
  return (
    <div className="font-sans text-gray-800 max-w-4xl mx-auto py-12 px-4">
      {/* Retour au portfolio */}
      <Link href="/">
        <a className="text-blue-500 hover:underline mb-6 inline-block">← Retour au Portfolio</a>
      </Link>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>

      <p className="text-gray-700 mb-6">{description}</p>

      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover rounded-lg mb-6" 
      />

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">Technologies utilisées :</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-2">Fonctionnalités :</h2>
      <ul className="list-disc list-inside text-gray-700">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
