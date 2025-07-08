// src/components/Navbar.tsx

"use client";
import React from "react";
import Link from "next/link";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`bg-gray-800 text-white px-6 py-4 shadow-md ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/acceuil" className="text-xl font-bold">
          Mon Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/cv" className="hover:underline">
            CV
          </Link>
          <Link href="/projects" className="hover:underline">
            Projets
          </Link>
          {/* <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link> */}
          <Link href="/lettre" className="hover:underline">
            Lettre de motivation
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/about" className="hover:underline">
           About  
            </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

