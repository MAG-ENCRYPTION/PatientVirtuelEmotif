"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Linkedin } from 'lucide-react';

// CAROUSEL DATA: Remplacez ces données par les informations de vos contributeurs
interface Contributor {
    name: string;
    role: string;
    avatar: string; // Chemin vers l'avatar, ex: '/images/team/avatar1.png'
    linkedinUrl: string;
}

const contributorsData: Contributor[] = [
    {
        name: 'Nom Contributeur 1',
        role: 'Chef de projet',
        avatar: '/images/wework/avatar.svg', // Placeholder, à remplacer
        linkedinUrl: '#',
    },
    {
        name: 'Nom Contributeur 2',
        role: 'Développeur Unreal',
        avatar: '/images/wework/avatar3.svg', // Placeholder, à remplacer
        linkedinUrl: '#',
    },
    {
        name: 'Nom Contributeur 3',
        role: 'Spécialiste IA',
        avatar: '/images/wework/avatar4.svg', // Placeholder, à remplacer
        linkedinUrl: '#',
    },
    {
        name: 'Nom Contributeur 4',
        role: 'UI/UX Designer',
        avatar: '/images/wework/avatar.svg', // Placeholder, à remplacer
        linkedinUrl: '#',
    },
    {
        name: 'Nom Contributeur 5',
        role: 'Médecin Consultant',
        avatar: '/images/wework/avatar3.svg', // Placeholder, à remplacer
        linkedinUrl: '#',
    },
];

// CAROUSEL SETTINGS
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
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 640,
                    settings: { slidesToShow: 1 }
                }
            ]
        };

        return (
            <section id="contributeurs" className="py-20 sm:py-32">
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
                            Nos Contributeurs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            L équipe passionnée derrière le projet DiagVerse.
                        </p>
                    </div>

                    <div className="mt-16">
                        <Slider {...settings}>
                            {contributorsData.map((contributor) => (
                                <div key={contributor.name} className="px-4">
                                    <div className='bg-white text-center shadow-lg rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-2'>
                                        <div className='relative w-32 h-32 mx-auto'>
                                            <Image
                                                src={contributor.avatar}
                                                alt={`Avatar de ${contributor.name}`}
                                                width={128}
                                                height={128}
                                                className="rounded-full object-cover"
                                            />
                                            <a
                                                href={contributor.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute bottom-0 right-0 bg-blue text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                aria-label={`Profil LinkedIn de ${contributor.name}`}
                                            >
                                                <Linkedin size={20} />
                                            </a>
                                        </div>
                                        <h3 className='text-xl font-bold pt-6 text-darkpurple'>{contributor.name}</h3>
                                        <p className='text-md font-normal pt-1 text-gray-500'>{contributor.role}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}