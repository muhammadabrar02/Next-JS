"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <a className="text-2xl font-bold text-blue-600">
                        My Website
                    </a>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-8 text-lg">
                    <Link href="/"
                        className="text-gray-600 hover:text-blue-600 transition">Home
                    </Link>
                    <Link href="/blog"
                        className="text-gray-600 hover:text-blue-600 transition">Blog
                    </Link>
                    <Link href="/services"
                        className="text-gray-600 hover:text-blue-600 transition">Services
                    </Link>
                    <Link href="/about"
                        className="text-gray-600 hover:text-blue-600 transition">About
                    </Link>
                </nav>

                {/* Contact Button */}
                <button className="hidden md:inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                    Contact Us
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link href="/"
                            className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded transition">Home
                        </Link>
                        <Link href="/blog"
                            className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded transition">Blog
                        </Link>
                        <Link href="/services"
                            className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded transition">Services
                        </Link>
                        <Link href="/about"
                            className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded transition">About
                        </Link>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
                            Contact Us
                            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
