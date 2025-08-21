import React from 'react';
import { PlayCircle } from 'lucide-react';

const Banner = () => {
    return (
        <section
            id="accueil"
            className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"

            style={{ backgroundImage: 'url(/images/banner/DiAGNOSTIQUER_ET_APPRENDRE.png)' }}
        >

            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 p-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Bienvenue dans DiagVerse
                </h1>
                <p className="text-xl md:text-2xl mb-6 font-light">
                    L 'immersion au coeur du diagnostic médical
                </p>
                <p className="text-lg md:text-xl mb-8">
                    Apprendre à diagnostiquer n' a jamais été aussi simple.
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

export default Banner;