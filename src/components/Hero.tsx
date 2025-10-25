'use client';

import React, { useState } from "react";
import '@/i18n/client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const { t } = useTranslation("common");

  const words = [
    t("hero.greetingWords.0"),
    t("hero.greetingWords.1"),
    t("hero.greetingWords.2"),
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleTypeDone = () => {
    setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 500);
  };

  return (
    <section
      className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden py-24 px-6"
      role="region"
      aria-label={t("hero.imageAlt")}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image profil */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/profil.jpg"
            alt={t("hero.imageAlt")}
            width={250}
            height={250}
            className="rounded-full grayscale hover:grayscale-0 transition duration-500 shadow-xl border-4 border-blue-200 dark:border-blue-500"
            priority
          />
        </motion.div>

        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <Trans
              i18nKey="hero.hello"
              components={{ blue: <span className="text-blue-700 dark:text-blue-400" /> }}
            />
            <br />

            <span className="text-blue-700 dark:text-blue-400 text-2xl md:text-3xl block mt-2 h-10">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Typewriter
                    words={[words[currentWordIndex]]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    onLoopDone={handleTypeDone}
                  />
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t("hero.description")}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">{t("hero.location")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/cv" passHref>
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow transition duration-300"
                aria-label={t("hero.cv")}
              >
                {t("hero.cv")}
              </button>
            </Link>
            <Link href="/projects" passHref>
              <button
                className="border border-blue-700 text-blue-700 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-300 px-6 py-3 rounded-lg transition duration-300"
                aria-label={t("hero.projects")}
              >
                {t("hero.projects")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

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
  );
}
