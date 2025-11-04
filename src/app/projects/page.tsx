// "use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import project from "@/data/projects.json";



 

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
          {project.map((proj, idx) => (
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
