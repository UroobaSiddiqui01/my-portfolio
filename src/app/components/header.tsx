"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set threshold for background change
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-pink-100 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo Section */}
        <div className="text-lg lg:text-2xl font-bold text-pink-600">
          UROOBA SIDDIQUI
        </div>

        {/* Navigation Links (Hidden on mobile, visible on larger screens) */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 text-gray-700">
          <Link href="/#" className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link href="/#about" className="hover:text-pink-500 transition">
            About Me
          </Link>
          <Link href="/#services" className="hover:text-pink-500 transition">
            Services
          </Link>
          <Link href="/#portfolio" className="hover:text-pink-500 transition">
            Portfolio
          </Link>
        </nav>

        {/* Contact Button (Hidden on mobile, visible on larger screens) */}
        <div className="hidden md:block">
          <Link href="/#contact" className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition">
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only when toggled) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-pink-100 py-4">
          <ul className="flex flex-col space-y-4 text-center text-gray-700">
            <li>
              <Link href="/" className="hover:text-pink-500 transition" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500 transition" onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-500 transition" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-pink-500 transition" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition" onClick={toggleMenu}>
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;




