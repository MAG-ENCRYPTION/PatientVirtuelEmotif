"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import DemoButton from './Contactus';
import { navigation, contactLink } from './Drawerdata';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const allNavLinks = [...navigation, contactLink];


    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1); // On retire le '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center justify-between">

                        <div className="flex flex-shrink-0 items-center">
                            <Link href="#accueil" onClick={(e) => handleLinkClick(e, '#accueil')}>
                                <img
                                    src="/images/banner/Logo_Diagverse.png"
                                    alt="DiagVerse Logo"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-4">
                            {allNavLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    // ON AJOUTE L'ÉVÉNEMENT ONCLICK ICI
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    className='navlinks hover:text-blue px-3 py-2 rounded-md text-base font-medium transition-colors'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <DemoButton />

                        <div className="block lg:hidden">
                            <Bars3Icon className="block h-6 w-6 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;