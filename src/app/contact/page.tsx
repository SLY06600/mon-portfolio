'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`Erreur: ${data.message}`);
      }
    } catch (err) {
      setStatus('Erreur lors de l’envoi du message.');
      console.error(err);
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Contactez-moi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
    <section>
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
