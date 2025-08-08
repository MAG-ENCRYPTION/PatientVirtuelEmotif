"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '#accueil', current: false },
    { name: 'Objectif', href: '#Objectif', current: false },
    { name: 'Outil', href: '#outil', current: false },
    { name: 'Manuel', href: '#Manuel', current: false },
    { name: 'Contributeurs', href: '#contributeur', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/">
                                    <img
                                        src="/images/banner/Logo_Diagverse.png" // Remplacez par le chemin correct vers votre logo
                                        alt="Logo"
                                        className="h-2 w-40 sm:h-40" // Ajustez la taille avec Tailwind
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:flex items-center border-right">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Contactusform />
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className="block lg:hidden">
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;