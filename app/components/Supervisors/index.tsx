"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

interface Supervisor {
  name: string;
  role: string;
  avatar: string;        // chemin local dans public/images/wework/…
  linkedinUrl: string;
}

const supervisors: Supervisor[] = [
  {
    name: "Pr BATCHAKUI Bernabé",
    role: "Maître de Conférences, ENSPY",
    avatar: "/images/wework/prBatchakui.png",
    linkedinUrl: "https://www.linkedin.com/in/bernab%C3%A9-batchakui-42023355/",
  },
  {
    name: "Pr Alain TCHANA",
    role: "Professeur, GRENOBLE-INP, UGA",
    avatar: "/images/wework/prAlain.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pr-alain-tchana-72516722/",
  },
  {
    name: "Pr Nicolas VUILLERME",
    role: "Professeur, UGA",
    avatar: "/images/wework/prNicolas.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nicolas-vuillerme-73685427/",
  },
];

export default function Supervisors() {
  return (
    <section
      id="superviseurs"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4 relative inline-block">
            Superviseurs
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue rounded-full w-24 mx-auto"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Ils ont pensé, suivi et coordonné le DIAGVERSE depuis sa genèse…
          </p>
        </div>

        {/* Grille des superviseurs (3 cartes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {supervisors.map((person) => (
            <div
              key={person.name}
              className="group relative bg-white text-center shadow-md rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Avatar avec orbites animées */}
              <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                {/* Orbite bleue */}
                <div className="absolute w-48 h-48 border-2 border-blue/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
                {/* Orbite verte */}
                <div className="absolute w-52 h-52 border-2 border-green-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-reverse"></div>

                {/* Avatar */}
                <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-blue/20 group-hover:border-blue transition-all duration-500">
                  <Image
                    src={person.avatar}
                    alt={`Photo de ${person.name}`}
                    fill
                    className="object-cover"
                  />

                  {/* Icône LinkedIn au hover */}
                  <Link
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-blue text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                    aria-label={`Profil LinkedIn de ${person.name}`}
                  >
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>

              {/* Nom et rôle */}
              <h3 className="text-xl font-bold text-darkpurple group-hover:text-blue transition-colors duration-300">
                {person.name}
              </h3>
              <p className="text-md text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-2">
                {person.role}
              </p>

              {/* Ligne décorative animée */}
              <div className="w-0 h-1 bg-blue mx-auto mt-6 rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}