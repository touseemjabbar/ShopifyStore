import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ResponsiveMenu from './ResponsiveMenu';

export const NavLinks = [
    { id: 1, title: 'Solution', link: '#', dropdown: ['E-commerce', 'Retail', 'Wholesale'] },
    { id: 2, title: 'Pricing', link: '#' },
    { id: 3, title: 'Resources', link: '#', dropdown: ['Blog', 'Case Studies', 'Support'] },
    { id: 4, title: 'Enterprise', link: '#' },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setShowMenu(!showMenu);

    const handleDropdownToggle = (id) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    return (
        <div className="bg-black sticky top-0 z-50 w-full text-white">
            <div className="container flex items-center justify-between py-5 relative z-[999]">
                <div className="flex items-center gap-2">
                    <img src="/shopify.png" className="h-[50px] w-auto" alt="shopify" />
                    <span className="text-[25px] font-[500]">Shopify</span>
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center gap-5">
                        {NavLinks.map((link) => (
                            <li key={link.id} className="relative">
                                <div
                                    className="flex items-center gap-2 cursor-pointer text-lg py-1 px-4 hover:red-shadow hover:bg-primary-0 transition-all duration-300 hover:scale-110"
                                    onClick={() => handleDropdownToggle(link.id)}
                                >
                                    {link.title}
                                    {link.dropdown && (
                                        activeDropdown === link.id ? (
                                            <FaChevronUp className="text-sm" />
                                        ) : (
                                            <FaChevronDown className="text-sm" />
                                        )
                                    )}
                                </div>

                                {link.dropdown && activeDropdown === link.id && (
                                    <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 py-2 w-40">
                                        {link.dropdown.map((item, index) => (
                                            <li
                                                key={index}
                                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-all">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-primary-0 text-white rounded-md hover:bg-white hover:text-black transition-all">
                        Start Free Trial
                    </button>
                </div>

                <div className="md:hidden">
                    <MdMenu onClick={toggleMenu} className="text-4xl" />
                </div>
            </div>

            <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
        </div>
    );
};

export default Navbar;
