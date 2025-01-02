'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="bg-[#020617] text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block mb-6`}>
          <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center space-y-2 md:space-y-0 md:space-x-4">
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

