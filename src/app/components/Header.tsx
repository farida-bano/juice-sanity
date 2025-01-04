import React from 'react';
import { FaAppleAlt } from 'react-icons/fa'; // Importing only the apple icon

const Header = () => {
  return (
    <header className="bg-green-500 p-4 md:p-6 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaAppleAlt size={30} />
          <h1 className="text-2xl font-bold">Fresh Juice</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a
            href="#home"
            className="hover:text-green-300 transition duration-200 ease-in-out"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-green-300 transition duration-200 ease-in-out"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-green-300 transition duration-200 ease-in-out"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-green-300 transition duration-200 ease-in-out"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;



