'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./components.css";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Introduction', href: '/introduction' },
  { name: 'Features', href: '/features' },
  { name: 'Materials', href: '/materials' },
  { name: 'Procedure', href: '/procedure' },
  { name: 'Video', href: '/video' },
  { name: 'Help Desk', href: '/help-desk' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-[#020617] text-white py-4 w-full">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center mb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`mx-3 mb-2 pt-52${
                pathname === item.href
                  ? 'text-blue-400 font-semibold'
                  : 'hover:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Copyright Reserved By BRO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  