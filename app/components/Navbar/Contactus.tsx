import React from 'react';
import { PlayCircle } from 'lucide-react';
import { demoButton } from './Drawerdata';


const DemoButton = () => {
    return (
        <div className='hidden lg:block'>
            <a
                href={demoButton.href}
                className='justify-end text-sm font-semibold bg-blue text-white py-2 px-6 navbutton rounded-full hover:bg-navyblue transition-colors flex items-center gap-2'
            >
                <PlayCircle size={18} />
                <span>{demoButton.name}</span>
            </a>
        </div>
    );
}

export default DemoButton;