//components/footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-pink-600 text-white py-6 mt-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Footer Links Section */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a href="#" className="text-white hover:text-pink-300">Privacy Policy</a>
          <a href="#" className="text-white hover:text-pink-300">Terms of Service</a>
          <a href="#" className="text-white hover:text-pink-300">Contact Us</a>
        </div>

        {/* Social Media Icons Section */}
        <div className="mt-4 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-pink-300 text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-pink-300 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-300 text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;