export const cvData = {
  personalInfo: {
    name: "Sylvain Baraduc",
    title: "Développeur Fullstack",
    photo: "/photo.jpg",
    address: "327 Chemin du Petit Four",
    postalCode: "06600",
  },
  contact: [
    { icon: "email", text: "sylvain.baraduc@sfr.fr" },
    { icon: "phone", text: "06 80 33 73 52" },
    { icon: "location", text: "Antibes, France" },
    { icon: "link", text: "Mon Portfolio", href: "https://mon-portfolio-git-main-sylvain-baraduc-s-projects.vercel.app/" },
    // { icon: "linkedin", text: "linkedin.com/in/sylvainbaraduc", href: "https://www.linkedin.com/in/sylvainbaraduc" },
    { icon: "gith", text: "github.com/sylvainbaraduc", href: "https://github.com/SLY06600" }
  ],
  technicalSkills: {
    frontend: [
      "React (Hooks, Context)",
      "Next.js (SSG, ISR, API Routes)",
      "TypeScript",
      "Tailwind CSS, CSS Modules, Styled Components",
      "Responsive Design, bonnes pratiques UX",
      "Tests : Jest, React Testing Library, Cypress",
    ],
    backend: [
      "Node.js, Express.js, Json-server, logique métier",
      "C# (.NET Core)",
      "PHP (Laravel, Symfony)",
      "Java (Spring Boot)",
      "Python (scripting, analyse de données)",
      "Programmation orientée objet (POO)",
      "APIs RESTful & GraphQL",
      "Sécurité des APIs : JWT, OAuth",
      "Architecture microservices, fonctions serverless",
    ],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Conception et développement d’applications orientées base de données",
    ],
    devops: [
      "Git (GitFlow, workflow PR)",
      "CI/CD : GitHub Actions, Jenkins",
      "Docker, conteneurisation",
    ],
    mobile: ["React Native"],
    design_gestion: [
      "Figma (prototypage, design systems)",
      "Trello, Jira, GanttProject (gestion de projet)",
    ],
    integrations: ["Firebase", "OpenWeather", "Autres services tiers"],
  },
  softSkills: [
    "Communication et travail en équipe",
    "Gestion du temps et organisation",
    "Esprit d’analyse et résolution de problèmes",
    "Adaptabilité et apprentissage continu",
  ],
  languages: [
    "Français — Langue maternelle",
    "Anglais — Vocabulaire technique et professionnel",
    "Espagnol — Notions",
  ],
  interests: [
    "Voyages",
    "Musique",
    "Documentaires scientifiques et historiques",
  ],
  about: "Développeur web fullstack autodidacte, je conçois des applications modernes orientées réservation, gestion et expérience utilisateur avec React, Node.js et MongoDB. Passionné par le web depuis une dizaine d'années, j'ai réalisé de nombreux projets personnels axés sur la réservation en ligne (immobilier, restaurants, salons, campings...) pour de potentielles collaborations avec de petites entreprises. Je cherche aujourd'hui à rejoindre une entreprise dynamique pour un stage de validation, afin de consolider mes compétences dans un cadre professionnel et collaboratif.",
  personalProjects: [
    {
      title: "Application de location immobilière",
      points: [
        "Développement d’une plateforme de gestion de locations avec React et Node.js",
        "Fonctionnalités : recherche, réservation, gestion des contrats",
        "Utilisation de MongoDB pour la gestion des données",
      ],
    },
    {
      title: "Application de réservation de restaurant",
      points: [
        "Création d’un système complet de réservation avec calendrier et notifications",
        "Frontend en React avec Tailwind CSS, backend en Express.js",
        "Gestion des créneaux horaires et validation des réservations",
      ],
    },
    {
      title: "Application de réservation de camping",
      points: [
        "Création d’une application de réservation de camping avec React et Node.js",
        "Fonctionnalités : recherche de campings, réservation en ligne, gestion des disponibilités",
        "Utilisation de MongoDB pour stocker les données des campings et des réservations",
      ],
    },
    {
      title: "Application de réservation de salon de coiffure",
      points: [
        "Création d’une application de réservation de salon de coiffure avec React et Node.js",
        "Fonctionnalités : prise de rendez-vous, gestion des créneaux horaires, notifications par email",
        "Utilisation de MongoDB pour stocker les données des coiffeurs et des réservations",
      ],
    },
    {
      title: "Application de gestion de projet",
      points: [
        "Application de gestion de projet avec React, Node.js et MongoDB pour la gestion des tâches et des équipes.",
      ],
    },
    {
      title: "Application météo",
      points: [
        "Application météo en WPF avec C#",
        "Utilisation de l'API OpenWeather pour récupérer les données météorologiques",
        "Affichage des prévisions météo pour plusieurs jours",
        "Interface utilisateur simple et intuitive",
      ],
    },
    {
      title: "CV interactif",
      points: [
        "Portfolio moderne en React avec animations, formulaire de contact et design responsive.",
      ],
    },
    {
      title: "Zebra Lecteur de BarCode",
      points: [
        "Application de lecture de codes-barres en React Native et Expo",
        "Utilisation de la caméra du smartphone pour scanner les codes-barres",
        "Affichage des informations du produit scanné à l'écran",
        "Interface utilisateur conviviale et réactive",
        "Utilisation des APIs OpenFoodFacts, OpenBeautyFacts, OpenProductsFacts, OpenPetFoodFacts pour récupérer les informations des produits",
      ],
    },
    {
      title: "Application de gestion de stock et boutique en ligne",
      points: [
        "Application de gestion de stock et boutique en ligne en React et Node.js",
        "Fonctionnalités : gestion des produits, gestion des stocks, gestion des commandes en fonction des stocks, remise sur produit à une période définie, paiement en ligne",
        "Utilisation de Json-server pour simuler une API RESTful",
      ],
    },
    {
      title: "Application de comptabilité personnelle",
      points: [
        "Application de comptabilité personnelle en React et Node.js",
        "Fonctionnalités : gestion des revenus et dépenses, génération de rapports financiers, visualisation des données avec des graphiques",
        "Fonctions : bilans, compte de résultat, grand livre",
        "Utilisation de MongoDB pour stocker les données financières",
      ],
    },
  ],
  experiences: [
    {
      title: "Développeur web — Projets personnels",
      company: "Autodidacte",
      period: "2012 - aujourd’hui",
      location: "Antibes, France",
      description: "Réalisation d'applications web complètes dans des contextes concrets (réservations, gestion de projets...). Utilisation de React, Node.js, MongoDB, Tailwind CSS, avec un fort accent sur l’expérience utilisateur, la logique métier et l’organisation du code. Approche professionnelle, dans le but d’acquérir une expérience technique solide et validable en entreprise.",
    },
  ],
  education: [
    {
      degree: "BTS Informatique de Gestion — Option Développeur d’Applications",
      school: "Educatel (formation à distance)",
      period: "2009 - 2012",
      description: "",
    },
    {
      degree: "Baccalauréat Scientifique (S)",
      school: "Lycée Sainte-Thècle, Clermont-Ferrand",
      period: "1998 - 2000",
      description: "",
    },
  ],
};
