import React from "react";

const EnglishCoverLetter: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl leading-relaxed text-gray-900">
      {/* Sender Info - top right (commonly displayed in U.S. resumes) */}
      <div className="text-right mb-6">
        <p><strong>Jean Dupont</strong></p>
        <p>123 Developer Street</p>
        <p>Paris, 75000, France</p>
        <p>jean.dupont@email.com</p>
        <p>+33 6 12 34 56 78</p>
        <p className="mt-2">July 8, 2025</p>
      </div>

      {/* Recipient Info - top left */}
      <div className="mb-6">
        <p><strong>Ms. Sarah Smith</strong></p>
        <p>Hiring Manager</p>
        <p>Tech Innovations Inc.</p>
        <p>456 Startup Lane</p>
        <p>London, UK</p>
      </div>

      {/* Greeting */}
      <p className="mb-4">Dear Ms. Smith,</p>

      {/* Body */}
      <p className="mb-4">
        As a passionate fullstack developer with a strong foundation in JavaScript and TypeScript, I am excited to submit my application for a role within your development team. I invite you to explore my portfolio to better understand the range of projects I’ve developed and my focus on clean code, user experience, and technical performance.
      </p>

      <p className="mb-4">
        I have hands-on experience with modern technologies including <strong>React, Node.js, Express, and MongoDB</strong>. My work reflects a strong emphasis on responsive design and frontend optimization, as well as robust backend solutions tailored to real-world needs.
      </p>

      <p className="mb-4">
        Whether working independently or in collaborative teams, I aim for maintainable, readable code and always prioritize user-centric design. I enjoy balancing functionality with aesthetic simplicity, striving to build efficient and accessible applications.
      </p>

      <p className="mb-4">
        You can view my portfolio here:{" "}
        <a
          href="https://tonportfolio.com"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          tonportfolio.com
        </a>. I would be happy to discuss my projects further or explore how I could contribute to your team.
      </p>

      <p className="mb-4">
        Thank you for considering my application. I look forward to hearing from you.
      </p>

      {/* Closing */}
      <p className="mt-6 font-semibold">Sincerely,</p>
      <p className="font-semibold">Jean Dupont</p>
    </section>
  );
};

export default EnglishCoverLetter;
