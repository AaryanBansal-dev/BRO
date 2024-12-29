import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center mb-4">
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">Home</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">About</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">Services</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">Products</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">Blog</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">Contact</a>
          <a href="#" className="mx-3 hover:text-gray-300 mb-2">FAQ</a>
        </nav>
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Reserved By BRO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

