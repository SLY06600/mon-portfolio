"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 🔹 hooks Next.js App Router

const sideProjects = [
  {
    title: "Application de location immobilière",
    description:
      "Application web pour rechercher, réserver et gérer des biens à louer, avec système de paiement et tableau de bord admin. Stack : React, Node.js, MongoDB.",
    image:
      "https://media.istockphoto.com/id/149060607/fr/photo/pour-louer-signe-en-face-de-la-nouvelle-maison.jpg?s=1024x1024&w=is&k=20&c=haWtDIX8a_Wp-oO3Oq5JHP4K8RKqWiT3mTr0DQX4K4Q=",
    link: "application-de-location-immobiliere",
  },
  {
    title: "Application de réservation restaurant",
    description:
      "Outil de gestion des réservations par créneau horaire, avec interface client et back-office. Notifications mail et intégration calendrier.",
    image: "https://source.unsplash.com/600x400/?restaurant,booking",
    link: "application-de-reservation-restaurant",
  },
  {
    title: "Application de gestion de tâches",
    description:
      "To-do list moderne avec React, Redux et Node.js pour la gestion des tâches.",
    image: "https://source.unsplash.com/600x400/?tasks",
    link: "gestion-de-taches",
  },
  {
    title: "E-commerce Next.js",
    description:
      "Site e-commerce performant avec Next.js, Tailwind CSS et Stripe pour les paiements.",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    link: "ecommerce-nextjs",
  },
  {
    title: "Application de gestion de projet",
    description:
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    image: "https://source.unsplash.com/600x400/?project-management",
    link: "gestion-de-projet",
  },
  {
    title: "CV interactif",
    description:
      "Portfolio moderne en React avec animation, formulaire de contact et design responsive.",
    image: "https://source.unsplash.com/600x400/?developer,portfolio",
    link: "cv-interactif",
  },
  {
    title: "Application météo",
    description:
      "Application météo en WPF avec C#, utilisant l'API OpenWeather pour afficher les prévisions météo.",
    image: "https://source.unsplash.com/600x400/?weather,app",
    link: "application-meteo",
  },
  {
    title: "Zebra Lecteur de BarCode",
    description:
      "Application de lecture de codes-barres en React Native et Expo, utilisant la caméra du smartphone pour scanner les codes-barres.",
    image: "https://source.unsplash.com/600x400/?barcode,scanner",
    link: "zebra-lecteur-de-barcode",
  },
  {
    title: "Application de gestion de bibliothèque",
    description:
      "Application de gestion de bibliothèque avec React et Node.js, permettant la gestion des emprunts et des retours de livres.",
    image: "https://source.unsplash.com/600x400/?library,books",
    link: "gestion-de-bibliotheque",
  },
  {
    title: "Application de suivi des habitudes",
    description:
      "Application de suivi des habitudes avec React Native, permettant aux utilisateurs de suivre et d'analyser leurs habitudes quotidiennes.",
    image: "https://source.unsplash.com/600x400/?habits,tracking",
    link: "suivi-des-habitudes",
  },
  {
    title: "Application de recettes de cuisine",
    description:
      "Application de recettes de cuisine avec React et Node.js, offrant une collection de recettes et la possibilité d'ajouter des recettes personnalisées.",
    image: "https://source.unsplash.com/600x400/?cooking,recipes",
    link: "application-de-recettes-de-cuisine",
  },
  
  // ... autres projets
];

export default function Portfolio() {
  const router = useRouter();

  const handleClick = (slug: string) => {
    // 🔹 navigation côté client via App Router
    router.push(`/projects/${slug}`);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-neutral-800 mb-8">
          Portfolio Alternatif
        </h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
          Une sélection de projets personnels réalisés pour explorer de nouvelles technologies ou simplement par curiosité.
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

                {/* 🔹 Navigation côté client */}
                <Link
                  onClick={() => handleClick(proj.link)}
                  className="inline-block mt-4 text-blue-500 hover:underline" href={""}                >
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
