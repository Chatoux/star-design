import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="text-xl">Star Design</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/about" className="mr-5 hover:text-gray-400">About</Link>
                    <Link href="/services" className="mr-5 hover:text-gray-400">Services</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
