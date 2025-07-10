"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const { t } = useTranslation("navbar"); // namespace commun

  return (
    <nav className={`bg-gray-800 text-white px-6 py-4 shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/acceuil" className="text-xl font-bold">
          {t("navbar.title")}
        </Link>
        <div className="space-x-4">
          <Link href="/cv" className="hover:underline">
            {t("navbar.cv")}
          </Link>
          <Link href="/projects" className="hover:underline">
            {t("navbar.projects")}
          </Link>
          {/* <Link href="/portfolio" className="hover:underline">
            {t("navbar.portfolio")}
          </Link> */}
          <Link href="/lettre" className="hover:underline">
            {t("navbar.coverLetter")}
          </Link>
          <Link href="/contact" className="hover:underline">
            {t("navbar.contact")}
          </Link>
          <Link href="/about" className="hover:underline">
            {t("navbar.about")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
