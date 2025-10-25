import React from "react";
import Link from "next/link";

const LocationImmobiliere: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Application de location immobilière
      </h1>

      <p className="text-gray-700 mb-4">
        Cette application est une **plateforme de gestion de locations immobilières**, 
        avec fonctionnalités de recherche, réservation et tableau de bord pour les propriétaires.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Frontend : React, Tailwind CSS</li>
        <li>Backend : Node.js, Express.js</li>
        <li>Base de données : MongoDB</li>
        <li>Fonctionnalités : recherche, réservation, gestion des contrats</li>
      </ul>

      <img
        src="https://source.unsplash.com/800x400/?real-estate"
        alt="Application location immobilière"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <Link href="/">
        <a className="text-blue-600 hover:underline">← Retour au portfolio</a>
      </Link>
    </div>
  );
};

export default LocationImmobiliere;
