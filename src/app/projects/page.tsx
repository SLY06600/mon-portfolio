import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const sideProjects = [
{
    title: "Application de location immobilière",
    description:
      "Application web pour rechercher, réserver et gérer des biens à louer, avec système de paiement et tableau de bord admin. Stack : React, Node.js, MongoDB.",
    image: "https://source.unsplash.com/600x400/?real-estate,app",
    link: "#",
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
    title: "Application de gestion de tâches",
    description:
      "To-do list moderne avec React, Redux et Node.js pour la gestion des tâches.",
    image: "https://source.unsplash.com/600x400/?tasks",
    link: "#",
    points: [],
  },
  {
    title: "Application de reservation de fleuriste",
    description:
      "Site e-commerce performant avec Next.js, Tailwind CSS .",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    link: "#",
    points: [
        "Création d’un site de fleuriste moderne avec Next.js et Tailwind CSS",
        "Fonctionnalités : catalogue de fleurs, panier d’achat, paiement en ligne",
    ],
  },
  {
    title: "Application de gestion de projet",
    description:
      "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
    image: "https://source.unsplash.com/600x400/?project-management",
    link: "#",
    points: [],
  },
  {title: "Application de réservation de camping",
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
    image: "https://source.unsplash.com/600x400/?hair-salon,reservation",
    link: "#",
    points: [
      "Création d’une application de réservation de salon de coiffure avec React et Node.js",
      "Fonctionnalités : prise de rendez-vous, gestion des créneaux horaires, notifications par email",
      "Utilisation de MongoDB pour stocker les données des coiffeurs et des réservations",
    ],

},
{
  title: "Application meteo",
    description:
        "Application meteo en wpf avec c#. Utilisation de l'API OpenWeather pour récupérer les données météorologiques.",   
    image: "https://source.unsplash.com/600x400/?weather",
    link: "#",
    points: [
      "Application meteo en wpf avec c#",
      "Utilisation de l'API OpenWeather pour récupérer les données météorologiques",
      "Affichage des prévisions météo pour plusieurs jours",
      "Interface utilisateur simple et intuitive",
    ],

},
  {
    title: "Application de comptabilité",
    description:
      "Application de comptabilité personnelle en javaFx. Fonctionnalités : suivi des dépenses, gestion des budgets, rapports financiers.",
    image: "https://source.unsplash.com/600x400/?developer,portfolio",
    link: "#",
    points: [
        "Application de comptabilité personnelle en javaFx",
        "Fonctionnalités : suivi des dépenses, gestion des budgets, rapports financiers",
        "Utilisation de JavaFX pour l'interface utilisateur et SQLite pour la base de données",
    ],
  },
  {
    title: "application de banque",
    description:
      "Application de banque en ligne en React et node. Fonctionnalités : gestion des comptes, virements, historique des transactions.",
    image: "https://source.unsplash.com/600x400/?banking,finance",
    link: "#",
    points: [
      "Application de banque en ligne en React et Node.js",
      "Fonctionnalités : gestion des comptes, virements, historique des transactions",
      "Utilisation de MongoDB pour stocker les données des comptes et des transactions",
    ],
  },
  {
    title: "Application de bibliothèque",
    description:
        "Application de gestion de bibliothèque en React et Node.js. Fonctionnalités : recherche de livres, emprunt, retour, gestion des utilisateurs.",
    image: "https://source.unsplash.com/600x400/?library,books",
    link: "#",
    points: [
      "Application de gestion de bibliothèque en React et Node.js",
      "Fonctionnalités : recherche de livres, emprunt, retour, gestion des utilisateurs",
      "Utilisation de MongoDB pour stocker les données des livres et des utilisateurs",
    ],

  },
  {
    title: "Application de devis et de factures",
    description:
      "Application de gestion de devis et de factures en React et Node.js. Fonctionnalités : création de devis, génération de factures, suivi des paiements.",  

    image: "https://source.unsplash.com/600x400/?invoice,bill",
    link: "#",
    points: [
      "Application de gestion de devis et de factures en React et Node.js",
      "Fonctionnalités : création de devis, génération de factures, suivi des paiements",
      "Utilisation de MongoDB pour stocker les données des devis et des factures",
    ],

  },
  {
    title: "Dashboard",
    description:
      "Dashboard en React pour visualiser des données en temps réel. Intégration de graphiques et de tableaux de bord personnalisés.",  
    image: "https://source.unsplash.com/600x400/?dashboard,data",
    link: "#",
    points: [
      "Création d’un dashboard interactif avec React et Chart.js",
      "Visualisation de données en temps réel avec WebSocket",
      "Personnalisation des graphiques et des tableaux de bord",
    ],

  },

];

export default function Portfolio() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-neutral-800 mb-8">Portfolio Alternatif</h1>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
        Une sélection de projets personnels réalisés pour explorer de nouvelles technologies ou simplement par curiosité.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sideProjects.map((proj, idx) => (
          <div key={idx} className="rounded-lg border shadow hover:shadow-lg transition">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{proj.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Voir plus →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}
