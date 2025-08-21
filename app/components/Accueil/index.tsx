import React from 'react';
import { PlayCircle } from 'lucide-react';

const Accueil = () => {
    return (
        <section
            id="accueil"
            className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gray-800" // Ajout d'un fond de secours
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >

                <source src="/videos/banner/Diagverse_V1.mp4" type="video/mp4" />

            </video>

            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            <div className="relative z-20 p-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Bienvenue dans DiagVerse
                </h1>
                <p className="text-xl md:text-2xl mb-6 font-light">
                    L'immersion au coeur du diagnostic médical
                </p>
                <p className="text-lg md:text-xl mb-8">
                    Apprendre à diagnostiquer n'a jamais été aussi simple.
                </p>
                <a
                    href="#demo"
                    className="bg-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-navyblue transition-transform transform hover:scale-105 inline-flex items-center gap-3"
                >
                    <PlayCircle className="h-6 w-6" />
                    Essayer la démo gratuite
                </a>
            </div>
        </section>
    );
}

export default Accueil;