'use client';

import React from "react";
import '@/i18n/client';


import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";


export default function Hero() {
  const { t } = useTranslation("common");

  return (
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
            alt={t("hero.imageAlt")}
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
<Trans
  i18nKey="hero.greeting"
  components={{ blue: <span className="text-blue-700" /> }}
/>

          </h1>
          <p className="text-lg text-gray-600 mb-6">{t("hero.description")}</p>
          <p className="text-sm text-gray-500 mb-8">{t("hero.location")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/cv">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                {t("hero.cv")}
              </button>
            </Link>
            <Link href="/projects">
              <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                {t("hero.projects")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
