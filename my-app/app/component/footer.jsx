// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-12 mb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <p className="mr-4">Phone: 0955937183</p>
          <div className="flex">
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="mr-2">
              <FontAwesomeIcon icon={faTelegram} size="lg" />
            </a>
            {/* If you want to add TikTok icon from Font Awesome, you can do so similarly */}
            {/* <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a> */}
          </div>
        </div>
        <div>
          <p className="mb-2">Developed by Kem</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
