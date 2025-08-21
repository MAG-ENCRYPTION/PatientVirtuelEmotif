import React from 'react';
import { Box, User, Activity, Smile, MessageSquare, MonitorSmartphone } from 'lucide-react';

const features = [
    {
        icon: <Box className="h-10 w-10 text-blue" />,
        title: 'Environnement 3D',
        description: 'Reproduction réaliste d’un centre de santé avec des éléments interactifs (lit, instruments).',
    },
    {
        icon: <User className="h-10 w-10 text-blue" />,
        title: 'Patient Virtuel',
        description: 'Modèles 3D avec une grande diversité physique, dynamique et clinique.',
    },
    {
        icon: <Activity className="h-10 w-10 text-blue" />,
        title: 'Symptômes & Diagnostic',
        description: 'Simulation de symptômes et d’examens physiques sur des zones corporelles définies.',
    },
    {
        icon: <Smile className="h-10 w-10 text-blue" />,
        title: 'Émotions Réalistes',
        description: 'Expressions faciales basées sur des théories psychologiques via Face Control Rig.',
    },
    {
        icon: <MessageSquare className="h-10 w-10 text-blue" />,
        title: 'Dialogue Interactif',
        description: 'Module de chat intelligent avec des feedbacks pédagogiques pour guider l’apprenant.',
    },
];

const Manage = () => {
    return (
        <section id="outil" className="py-20 sm:py-32 bg-lightgrey">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
                        L’Outil DiagVerse
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Un environnement 3D pour la consultation, un patient virtuel 3D animé par l’intelligence artificielle et les agents virtuels.
                    </p>
                </div>

                {/* Grille de fonctionnalités */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-darkpurple mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Placeholder pour les captures d'écran */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-darkpurple">Captures d’écran de l’interface</h3>
                    <div className="w-full h-96 bg-gray-300 rounded-2xl flex items-center justify-center border-2 border-dashed">
                        <div className='text-center'>
                            <MonitorSmartphone className="mx-auto h-12 w-12 text-gray-500" />
                            <span className="mt-2 block text-gray-500">Espace réservé aux captures d’écran</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Manage;
