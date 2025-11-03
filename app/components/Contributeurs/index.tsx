"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import "@/app/globals.css"; // Assure-toi que Tailwind est bien importé

interface Contributor {
  name: string;
  role: string;
  avatar: string;
  linkedinUrl: string;
}

const contributorsData: Contributor[] = [
  {
    name: "Alain MBO",
    role: "Ingénieur de Conception",
    avatar: "/images/wework/mbo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alain-g%C3%A9rard-mbo-49608b281/",
  },
  {
    name: "Anaïs MBAHA",
    role: "Ingénieure de Conception",
    avatar: "/images/wework/anais.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/michele-anais-mbaha-ndoundam-4a3502273/",
  },
  {
    name: "Pr Nicolas VUILLERME",
    role: "Professeur, UGA",
    avatar: "/images/wework/prNicolas.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nicolas-vuillerme-73685427/",
  },
  {
    name: "Pr Alain TCHANA",
    role: "Professeur, GRENOBLE-INP, UGA",
    avatar: "/images/wework/prAlain.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pr-alain-tchana-72516722/",
  },
  {
    name: "Pr BATCHAKUI Bernabé",
    role: "Maître de Conférences, ENSPY",
    avatar: "/images/wework/prBatchakui.png",
    linkedinUrl: "https://www.linkedin.com/in/bernab%C3%A9-batchakui-42023355/",
  },
];

export default class Wework extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <section
        id="contributeurs"
        className="py-20 sm:py-32 bg-gradient-to-b from-white to-lightgrey relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4 relative inline-block">
              Nos Contributeurs
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue rounded-full w-16 mx-auto"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le DIAGVERSE, c’est aussi eux — une équipe passionnée et créative.
            </p>
          </div>

          <Slider {...settings}>
            {contributorsData.map((contributor, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-white text-center shadow-md rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  
                  {/* Avatar avec orbites animées */}
                  <div className="relative w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                    
                    {/* Orbite bleue */}
                    <div className="absolute w-48 h-48 border-2 border-blue/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
                    
                    {/* Orbite verte */}
                    <div className="absolute w-52 h-52 border-2 border-green-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-reverse"></div>
                    
                    {/* Avatar circulaire */}
                    <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-blue/20 group-hover:border-blue transition-all duration-500">
                      <Image
                        src={contributor.avatar}
                        alt={`Avatar de ${contributor.name}`}
                        fill
                        className="object-cover"
                      />
                      <a
                        href={contributor.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 bg-blue text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110"
                        aria-label={`Profil LinkedIn de ${contributor.name}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Nom et rôle */}
                  <h3 className="text-xl font-bold text-darkpurple group-hover:text-blue transition-colors duration-300">
                    {contributor.name}
                  </h3>
                  <p className="text-md text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {contributor.role}
                  </p>

                  {/* Ligne décorative animée */}
                  <div className="w-0 h-1 bg-blue mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
