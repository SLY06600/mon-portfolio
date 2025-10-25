"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


const sideProjects = [
  {
    title: "Application de location immobilière",
    description:
      "Application web pour rechercher, réserver et gérer des biens à louer, avec système de paiement et tableau de bord admin. Stack : React, Node.js, MongoDB.",
    image:
      "https://media.istockphoto.com/id/149060607/fr/photo/pour-louer-signe-en-face-de-la-nouvelle-maison.jpg?s=1024x1024&w=is&k=20&c=haWtDIX8a_Wp-oO3Oq5JHP4K8RKqWiT3mTr0DQX4K4Q=",
    slug: "application-de-location-immobiliere",
  },
  {
    title: "Application de réservation restaurant",
    description:
      "Outil de gestion des réservations par créneau horaire, avec interface client et back-office. Notifications mail et intégration calendrier.",
    image: "https://source.unsplash.com/600x400/?restaurant,booking",
    slug: "application-de-reservation-restaurant",
  },
  {
    title: "Application de reservation de camping",
    description:
      "Application de réservation de camping avec React et Node.js. Fonctionnalités : recherche de campings, réservation en ligne, gestion des disponibilités.",    
    image: "https://source.unsplash.com/600x400/?camping,reservation",
    slug: "application-de-reservation-de-camping",
  },
  {
    title: "Application de réservation de salon de coiffure",
    description:
      "Création d’une application de réservation de salon de coiffure avec React et Node.js. Fonctionnalités : prise de rendez-vous, gestion des créneaux horaires, notifications par email.",
    image: "https://source.unsplash.com/600x400/?hair-salon,booking",
    slug: "application-de-reservation-de-salon-de-coiffure",
  },
  {
    title: "Application de gestion de projet",
    description:
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    image: "https://source.unsplash.com/600x400/?project-management",
    slug: "gestion-de-projet",
  },
  { title: "Application de comptabilité",
    description:
      "Application de comptabilité avec React et Node.js pour la gestion financière des petites entreprises.",
    image: "https://source.unsplash.com/600x400/?accounting,app",
    slug: "application-de-comptabilite",
  },
  {
    title: "Application de gestion de tâches",
    description:
      "To-do list moderne avec React, Redux et Node.js pour la gestion des tâches.",
    image: "https://source.unsplash.com/600x400/?tasks",
    slug: "gestion-de-taches",
  },
  {
    title: "E-commerce Next.js",
    description:
      "Site e-commerce performant avec Next.js, Tailwind CSS et Stripe pour les paiements.",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    slug: "ecommerce-nextjs",
  },
  {
    title: "Application de gestion de projet",
    description:
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    image: "https://source.unsplash.com/600x400/?project-management",
    slug: "gestion-de-projet",
  },
  {
    title: "CV interactif",
    description:
      "Portfolio moderne en React avec animation, formulaire de contact et design responsive.",
    image: "https://source.unsplash.com/600x400/?developer,portfolio",
    slug: "cv-interactif",
  },
  {
    title: "Application météo",
    description:
      "Application météo en WPF avec C#, utilisant l'API OpenWeather pour afficher les prévisions météo.",
    image: "https://source.unsplash.com/600x400/?weather,app",
    slug: "application-meteo",
  },

  {
    title: "Zebra Lecteur de BarCode",
    description:
      "Application de lecture de codes-barres en React Native et Expo, utilisant la caméra du smartphone pour scanner les codes-barres.",
    image: "https://source.unsplash.com/600x400/?barcode,scanner",
    slug: "zebra-lecteur-de-barcode",
  },  
  {
    title: "Application de gestion de stock",
    description:
      "Application de gestion de stock avec React et Node.js, permettant le suivi des inventaires et des commandes.",
    image: "https://source.unsplash.com/600x400/?inventory,management",
    slug: "application-de-gestion-de-stock",

  }
  
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-neutral-800 mb-8">
         Portfolio de Projets Personnels
        </h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
          Une sélection de projets personnels réalisés pour explorer de nouvelles technologies et apprendre les différentes logiques métier selon le type d’application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sideProjects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-lg border shadow hover:shadow-lg transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {proj.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{proj.description}</p>

                {/* ✅ Lien interne avec slug */}
                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Voir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
