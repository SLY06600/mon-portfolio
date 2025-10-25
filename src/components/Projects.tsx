// import { title } from "node:process";

import React from "react";

const projects = [
  {
    title: "Application de location immobilière",
    description:
      "Application web pour rechercher, réserver et gérer des biens à louer, avec système de paiement et tableau de bord admin. Stack : React, Node.js, MongoDB.",
    image: "https://source.unsplash.com/600x400/?real-estate,app",
    link: "/projects/application-de-location-immobiliere",
    points: [
      "Développement d’une plateforme de gestion de locations avec React et Node.js",
      "Fonctionnalités : recherche, réservation, gestion des contrats",
      "Utilisation de MongoDB pour la gestion des données",
    ],
  },
  {
    title: "Application de réservation restaurant",
    description:
      "Outil de gestion des réservations par créneau horaire, avec interface client et back-office. Notifications mail et intégration calendrier.",
    image: "https://source.unsplash.com/600x400/?restaurant,booking",
    link: "#",
    points: [
      "Création d’un système complet de réservation avec calendrier et notifications",
      "Frontend en React avec Tailwind CSS, backend en Express.js",
      "Gestion des créneaux horaires et validation des réservations",
    ],
  },
  {
    title: "Application de réservation de camping",
    description:
      "Application de réservation de camping avec React et Node.js. Fonctionnalités : recherche de campings, réservation en ligne, gestion des disponibilités.",    
    image: "https://source.unsplash.com/600x400/?camping,reservation",
    link: "#",
    points: [
      "Création d’une application de réservation de camping avec React et Node.js",
      "Fonctionnalités : recherche de campings, réservation en ligne, gestion des disponibilités",
      "Utilisation de MongoDB pour stocker les données des campings et des réservations",
    ],
  },
  {
    title: "Application de réservation de salon de coiffure",
    description:
      "Création d’une application de réservation de salon de coiffure avec React et Node.js. Fonctionnalités : prise de rendez-vous, gestion des créneaux horaires, notifications par email.",
    image: "https://source.unsplash.com/600x400/?hair-salon,booking",
    link: "#",
    points: [
      "Création d’une application de réservation de salon de coiffure avec React et Node.js",
      "Fonctionnalités : prise de rendez-vous, gestion des créneaux horaires, notifications par email",
      "Utilisation de MongoDB pour stocker les données des coiffeurs et des réservations",
    ],
  },
  {
    title: "Application de gestion de projet",
    description:
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    image: "https://source.unsplash.com/600x400/?project-management,app",
    link: "#",
    points: [
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    ],
  },
  {
    title: "Application Météo",
    description:
      "Application météo en WPF avec C#. Utilisation de l'API OpenWeather pour récupérer les données météorologiques.",
    image: "https://source.unsplash.com/600x400/?weather,app",
    link: "#",
    points: [
      "Application météo en WPF avec C#",
      "Utilisation de l'API OpenWeather pour récupérer les données météorologiques",
      "Affichage des prévisions météo pour plusieurs jours",
      "Interface utilisateur simple et intuitive",
    ],
  },
  {
    title: "CV interactif",
    description:
      "Portfolio moderne en React avec animation, formulaire de contact et design responsive.",
    image: "https://source.unsplash.com/600x400/?portfolio,react",
    link: "#",
    points: [
      "Portfolio moderne en React avec animation, formulaire de contact et design responsive.",
    ],
  },
];


export default function Projects() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="projects">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Mes Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600">
                {proj.title}
              </h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Voir le projet →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
