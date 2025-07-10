'use client';

import React from "react";
import '../../i18n/client';
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <Navbar className="no-print" />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{t("title")}</h1>

        <section className="text-lg text-gray-700 space-y-6">
          <p>{t("paragraph1")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("paragraph2") }} />
          <p>{t("paragraph3")}</p>
          <p>{t("paragraph4")}</p>
        </section>

        <div className="mt-10 space-y-4">
          <Link
            href="/docs/CV_Sylvain_Baraduc-1.pdf"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            {t("cv")}
          </Link>

          <br />

          <Link
            href="/docs/Mon_CV.pdf"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            {t("motivation")}
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
