import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Smart Parking</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#login" className="hover:text-gray-400">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
