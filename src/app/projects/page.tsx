"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "@/i18n/client";
import { useTranslation } from "react-i18next";


export default function Portfolio() {
  const { t } = useTranslation("project");
  const sideProjects = t("projects", { returnObjects: true }) as Array<{
    image: string;
    title: string;
    description: string;
    link: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-neutral-800 mb-8">
          {t("title")}
        </h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sideProjects.map((proj, idx) => (
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
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  {t("viewMore")}
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
