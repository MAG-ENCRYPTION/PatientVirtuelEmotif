"use client"
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message envoyé!\nNom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (

        <section id="contact" className="py-20 sm:py-32">
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
                        Contactez-nous
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Une question, une suggestion ou un partenariat en vue ? N'hésitez pas à nous écrire.
                    </p>
                </div>


                <div className="mt-16 max-w-5xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

                        {/* Colonne 1 : Formulaire */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue focus:border-blue bg-gray-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue focus:border-blue bg-gray-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue focus:border-blue bg-gray-50"
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue hover:bg-navyblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue">
                                    Envoyer
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>


                        <div className="flex flex-col justify-center space-y-8">
                            <h3 className="text-2xl font-bold text-darkpurple mb-4">Nos coordonnées</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-blue" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Email</h4>
                                    <a href="mailto:support@diagverse.com" className="text-gray-600 hover:text-blue">support@diagverse.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-blue" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Téléphone</h4>
                                    <a href="tel:+33633140948" className="text-gray-600 hover:text-blue">+33 6 33 14 09 48</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;