import React from 'react';
import logo from './images/Frame 229.png';
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6">
      {/* Online Logo Image */}
      <img 
        src={logo}
        alt="Logo" 
        className="mx-auto mt-12"
      />
      
      <div className="flex justify-center space-x-6 mt-4">
        {/* Social Icons */}
        <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-youtube fa-lg"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-tiktok fa-lg"></i>
        </a>
      </div>
      
      <p className="text-sm text-gray-800 mt-4 font-bold">
        &copy; 2024 CoachforGenZ.com - All Rights Reserved
      </p>
      <p className="text-sm text-gray-800 font-bold">
        Designed with <span className="text-red-500">❤</span> by Shaheer
      </p>
    </footer>
  );
};

export default Footer;
