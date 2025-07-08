import React from "react";

const projects = [
  {
    title: "Application de location immobilière",
    description: "Plateforme web avec réservation, tableau de bord, React/Node/MongoDB.",
    image: "https://source.unsplash.com/600x400/?real-estate",
    link: "#",
  },
  {
    title: "Application de réservation restaurant",
    description: "Réservations en ligne avec créneaux et notifications. Stack : React, Express.",
    image: "https://source.unsplash.com/600x400/?restaurant",
    link: "#",
  },
  {
    title: "E-commerce Next.js",
    description: "Site e-commerce moderne avec Next.js, Stripe, Tailwind CSS.",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      {/* <header className="bg-blue-700 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Mon Portfolio</h1>
        <p className="mt-2 text-lg">Développeur Web Full Stack</p>
      </header>
      */}
     

      {/* About */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">À propos</h2>
        <p className="text-gray-700 leading-relaxed">
          Je suis un développeur passionné par la création d’applications web modernes. J’aime construire des
          interfaces propres et fonctionnelles en utilisant des technologies comme React, Node.js et MongoDB.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600">{proj.title}</h3>
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

      {/* Contact */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">
          N’hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Votre nom" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Votre email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Votre message" className="w-full p-3 border rounded-md" rows={5}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Mon Nom — Tous droits réservés</p>
      </footer>
    </div>
  );
}
