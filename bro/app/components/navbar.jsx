'use client';
import React, { useState } from 'react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-[#f8fafc] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-[#f8fafc] font-bold text-xl">
              <img src="favicon.ico" alt="" height={50} width={50}/>
              </a>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/introduction">Introduction</NavItem>
                <NavItem href="/features">Features</NavItem>
                <NavItem href="/materials">Materials</NavItem>
                <NavItem href="/procedure">Procedure</NavItem>
                <NavItem href="/video">Video</NavItem>
                <NavItem href="/help-desk">Help Desk</NavItem>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#f8fafc]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#020617]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/introduction">Introduction</NavItem>
            <NavItem href="/features">Features</NavItem>
            <NavItem href="/materials">Materials</NavItem>
            <NavItem href="/procedure">Procedure</NavItem>
            <NavItem href="/video">Video</NavItem>
            <NavItem href="/help-desk">Help Desk</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
