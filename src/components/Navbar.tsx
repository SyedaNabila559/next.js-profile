"use client"; 

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-pink-300 p-5 relative">
      <div className="flex justify-between items-center">
        {/* Brand name */}
        <h1 className="text-xl lg:text-2xl font-bold ml-5">
          SYEDA
        </h1>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden mr-5">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-12 mr-10 mt-2">
          <li className="relative group">
            <Link href="/" className="text-xl">Home</Link>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FontAwesomeIcon icon={faHome} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/about" className="text-xl">About</Link>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FontAwesomeIcon icon={faUser} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/projects" className="text-xl">Projects</Link>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FontAwesomeIcon icon={faProjectDiagram} className="text-gray-800" />
            </div>
          </li>
          <li className="relative group">
            <Link href="/contact" className="text-xl">Contact</Link>
            <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-800" />
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-start bg-blue-300 p-5 space-y-5">
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faHome} className="text-black" />
            <Link href="/" onClick={toggleMenu} className="text-lg">Home</Link>
          </li>
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} className="text-black" />
            <Link href="/about" onClick={toggleMenu} className="text-lg">About</Link>
          </li>
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-black" />
            <Link href="/projects" onClick={toggleMenu} className="text-lg">Projects</Link>
          </li>
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
            <Link href="/contact" onClick={toggleMenu} className="text-lg">Contact</Link>
          </li>
        </ul>
      )}

      {/* Divider */}
      <div className='bg-white w-full h-1 mt-6 lg:mt-8'></div>
    </nav>
  );
};

export default Navbar;
