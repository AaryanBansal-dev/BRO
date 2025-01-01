'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Introduction', href: '/introduction' },
  { name: 'Features', href: '/features' },
  { name: 'Materials', href: '/materials' },
  { name: 'Procedure', href: '/procedure' },
  { name: 'Video', href: '/video' },
  { name: 'Help Desk', href: '/help-desk' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="bg-[#020617] text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center py-2 px-4 bg-gray-800 rounded transition-colors hover:bg-gray-700"
            aria-expanded={isOpen}
          >
            <span>Menu</span>
            {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block mb-6`}>
          <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center space-y-2 md:space-y-0 md:space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Copyright Reserved By BRO</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

