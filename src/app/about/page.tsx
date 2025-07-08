import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <>
    <Navbar className="no-print" />
    <main className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos de moi</h1>

          <section className="text-lg text-gray-700 space-y-6">
              <p>
                  Je suis développeur fullstack passionné par la création d’applications web modernes,
                  performantes et bien conçues. J’aime construire des interfaces intuitives tout en garantissant
                  une logique back-end robuste et sécurisée.
              </p>

              <p>
                  Ma stack principale inclut <strong>React, TypeScript, Node.js, Express</strong> et <strong>MongoDB</strong>.
                  J’accorde une grande importance à la qualité du code, à l’accessibilité et à l’optimisation
                  des performances côté client comme côté serveur.
              </p>

              <p>
                  Je suis aussi curieux et toujours en veille sur les bonnes pratiques du développement web,
                  qu’il s’agisse de DevOps léger, de tests automatisés ou de design system.
              </p>

              <p>
                  Je cherche à m’investir dans des projets où la technologie est mise au service d’une vraie
                  utilité, avec une équipe qui valorise la clarté, la collaboration et l’amélioration continue.
              </p>
          </section>

          <div className="mt-10">
              <Link
                  href="/docs/CV_Sylvain_Baraduc-1.pdf" // 🔁 adapte ce chemin selon l’emplacement de ton fichier
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
              >
                  voir mon CV 
              </Link>
               <br className="mb-9" />
                <Link
                    href="/docs/Mon_CV.pdf" // 🔁 adapte ce chemin selon l’emplacement de ton fichier
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition" 
                    target="_blank"
                >
                    Voir ma lettre de motivation
                </Link>
                <br className="mb-9" />
                 <Link
                  href="/docs/Mon_CV - Sylvain Baraduc.pdf" // 🔁 adapte ce chemin selon l’emplacement de ton fichier
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
              >
                  voir mon CV 
              </Link>

          </div>
      </main><Footer  /></>
  );
};

export default AboutPage;
