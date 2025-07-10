// LettreDev.tsx
import { cvData } from "@/data/cvData";
import React from "react";



const LettreDev: React.FC = () => {

   const email = cvData.contact.find((item) => item.icon === "email")?.text;
  const phone = cvData.contact.find((item) => item.icon === "phone")?.text;
  const location = cvData.contact.find((item) => item.icon === "location")?.text;
 
return (
  
  <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl text-gray-900 leading-relaxed">
    {/* Expéditeur à gauche */}
    {/* Coordonnées expéditeur à droite */}
      <div className="text-right mb-6">
        <p><strong>{cvData.personalInfo.name}</strong></p>
        <p>{cvData.personalInfo.address}</p>
        <p>{cvData.personalInfo.postalCode}-{location}</p>
        <p>{email}</p>
        <p>{phone}</p>
        {/* <p className="mt-2">Paris, le 8 juillet 2025</p> */}
      </div>

      {/* Coordonnées destinataire à gauche */}
      <div className="mb-6">
        <p><strong>À l’attention de Madame, Monsieur</strong></p>
        <p>Responsable du recrutement</p>
        <p>Entreprise Digitale</p>
        <p>45 Avenue du Web</p>
        <p>75010 Paris</p>
      </div>

    {/* Date à droite */}
    <div className="text-right mb-6">
     <p>{location}, le {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</p>

    </div>

    {/* Destinataire
    <div className="mb-6">
      <p><strong>À l’attention de Madame, Monsieur,</strong></p>
      <p>Responsable du recrutement</p>
      <p>Entreprise Digitale</p>
      <p>45 Avenue du Web</p>
      <p>75010 Paris</p>
    </div> */}

    {/* Objet */}
    <p className="mb-6 font-semibold">
      Objet : Candidature spontanée – Développeur Fullstack JavaScript/TypeScript
    </p>

    {/* Corps */}
    <p className="mb-4">Madame, Monsieur,</p>
    <p className="mb-4">
      Passionné par le développement web et les solutions digitales innovantes, je vous adresse ma candidature en tant que développeur fullstack. Vous trouverez ci-joint mon portfolio, qui illustre mes compétences techniques, mon sens du détail et mon attachement à la qualité.
    </p>
    <p className="mb-4">
      Formé au développement web avec une spécialisation en JavaScript/TypeScript, je maîtrise des technologies telles que <strong>React, Node.js, Express</strong> et <strong>MongoDB</strong>. Je porte également une attention particulière au design responsive ainsi qu’à l’optimisation front-end. Mon portfolio comprend des projets personnels et collaboratifs, allant d’applications web dynamiques à des API sur mesure.
    </p>
    <p className="mb-4">
      Chaque réalisation reflète mon souci d’écrire un code clair, maintenable et performant, tout en veillant à l’expérience utilisateur et à l’ergonomie. J’aime associer logique, design et efficacité pour créer des interfaces intuitives et des back-ends robustes.
    </p>
    <p className="mb-4">
      Je vous invite à consulter mon portfolio à l’adresse suivante :{" "}
      <a
        href="https://mon-portfolio-mauve-six.vercel.app"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://mon-portfolio-mauve-six.vercel.app
        
      </a>. Je serais ravi d’échanger avec vous afin de vous présenter mes projets plus en détail et discuter de vos besoins.
    </p>
    <p className="mb-6">
      Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.
    </p>
    <p className="font-semibold">{cvData.personalInfo.name}</p>
  </section>
);
};

export default LettreDev;
