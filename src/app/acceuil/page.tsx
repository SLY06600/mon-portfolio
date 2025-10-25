// src/components/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Hero() {
  return (
    <>
    <Navbar />
    <section className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/profil.jpg"
            alt="Photo de Sylvain Baraduc"
            width={250}
            height={250}
            className="rounded-full grayscale hover:grayscale-0 transition duration-500 shadow-lg border-4 border-blue-100"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Bonjour, je suis <span className="text-blue-700">Sylvain Baraduc</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Développeur fullstack spécialisé en création d’interfaces modernes et performantes avec React, Next.js et Node.js.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Basé en France. Disponible pour missions freelance et collaborations techniques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/cv">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                Voir mon CV
              </button>
            </Link>
            <Link href="/projects">
              <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Mes projets
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="relative bg-blue-50 py-12">
       {/* Fond SVG décoratif */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#3b82f6"
          fillOpacity="0.2"
          d="M0,160L40,160C80,160,160,160,240,176C320,192,400,224,480,229.3C560,235,640,213,720,197.3C800,181,880,171,960,154.7C1040,139,1120,117,1200,133.3C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </section>
    <Footer />
    </>
  );
}
