export interface NavLink {
    name: string;
    href: string;
}

export const navigation: NavLink[] = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Objectif', href: '#objectif' },
    { name: 'Outil', href: '#outil' },
    { name: 'Démo', href: '#demo' },
    { name: 'Manuel', href: '#manuel' },
    { name: 'Contributeurs', href: '#contributeurs' },
];

export const contactLink: NavLink = {
    name: 'Contact',
    href: '#contact',
};

export const demoButton: NavLink = {
    name: 'Essayer la Démo',
    href: '#featured',
}