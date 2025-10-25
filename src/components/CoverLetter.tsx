import React from "react";

const CoverLetter: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl text-gray-900 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Lettre de motivation</h1>

      {/* Coordonnées expéditeur à droite */}
      <div className="text-right mb-6">
        <p><strong>Jean Dupont</strong></p>
        <p>123 Rue des Développeurs</p>
        <p>75000 Paris</p>
        <p>jean.dupont@email.com</p>
        <p>06 12 34 56 78</p>
        <p className="mt-2">Paris, le 8 juillet 2025</p>
      </div>

      {/* Coordonnées destinataire à gauche */}
      <div className="mb-6">
        <p><strong>À l’attention de Madame, Monsieur</strong></p>
        <p>Responsable du recrutement</p>
        <p>Entreprise Digitale</p>
        <p>45 Avenue du Web</p>
        <p>75010 Paris</p>
      </div>

      {/* Objet */}
      <p className="mb-6 font-semibold">Objet : Candidature spontanée – Développeur Fullstack JavaScript/TypeScript</p>

      {/* Corps de la lettre */}
      <p className="mb-4">Madame, Monsieur,</p>

      <p className="mb-4">
        Passionné par le développement web et les solutions digitales innovantes, je vous adresse ma candidature en tant que développeur fullstack. Vous trouverez ci-joint mon portfolio, qui illustre mes compétences techniques, mon sens du détail et mon attachement à la qualité.
      </p>

      <p className="mb-4">
        Formé au développement web avec une spécialisation en JavaScript/TypeScript, je travaille avec des technologies comme <strong>React, Node.js, Express</strong> et <strong>MongoDB</strong>, tout en portant une attention particulière au design responsive et à l’optimisation front-end. Mon portfolio comprend aussi bien des projets personnels que collaboratifs, allant d’applications web dynamiques à des APIs sur mesure.
      </p>

      <p className="mb-4">
        Chacune de mes réalisations reflète mon souci d’écrire un code clair, maintenable et performant, en veillant à l’expérience utilisateur et à l’ergonomie. J’aime associer logique, design et efficacité pour créer des interfaces intuitives et des back-ends robustes.
      </p>

      <p className="mb-4">
        Je vous invite à consulter mon portfolio à l’adresse suivante :{" "}
        <a
          href="https://mon-portfolio-rose.vercel.app/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mon-portfolio-rose.vercel.app
        </a>. Je serais heureux d’échanger avec vous pour vous présenter mes projets en détail et discuter de vos besoins.
      </p>

      <p className="mb-4">Dans l’attente de votre retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.</p>

      <p className="mt-6 font-semibold">Jean Dupont</p>
    </section>
  );
};

export default CoverLetter;
