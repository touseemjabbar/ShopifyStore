import React from 'react';
import { NavLinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
            <div className="fixed top-0 left-0 z-50 bg-black text-white h-screen w-3/4 pt-20 pl-10 transition duration-500 ease-in-out rounded-r-xl shadow-md">
                <div className="mt-10">
                    <ul>
                        {NavLinks.map((link) => (
                            <li key={link.id} className="py-6">
                                <span className="text-2xl font-medium text-white">{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
