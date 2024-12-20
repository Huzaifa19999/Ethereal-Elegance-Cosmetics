'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { PiBasket } from "react-icons/pi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track the menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-[#F8F8F8]">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex-shrink-0">
          <Image 
            src={'/ethereal-elegance.png'} 
            height={50} 
            width={150} 
            alt='navbar-logo' 
          />
        </div>

        <ul className="hidden md:flex gap-6 text-sm text-[#666363]">
          <li className="cursor-pointer hover:text-black">HOME</li>
          <li className="cursor-pointer hover:text-black">ABOUT US</li>
          <li className="cursor-pointer hover:text-black">SHOP</li>
          <li className="cursor-pointer hover:text-black">CONTACT US</li>
          <li className="cursor-pointer hover:text-black">BLOGS</li>
        </ul>

        <div className="flex items-center gap-4 text-[#666363]">
          <li className="hidden md:block cursor-pointer hover:text-black">LOGIN</li>
          <li className="cursor-pointer hover:text-black">
            <FiSearch size={20} />
          </li>
          <li className="cursor-pointer hover:text-black">
            <PiBasket size={20} />
          </li>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu} // Toggle menu visibility on click
          className="md:hidden p-2 focus:outline-none"
        >
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center md:hidden text-sm text-[#666363] py-2 gap-2">
          <li className="cursor-pointer hover:text-black">HOME</li>
          <li className="cursor-pointer hover:text-black">ABOUT US</li>
          <li className="cursor-pointer hover:text-black">SHOP</li>
          <li className="cursor-pointer hover:text-black">CONTACT US</li>
          <li className="cursor-pointer hover:text-black">BLOGS</li>
          <li className="cursor-pointer hover:text-black">LOGIN</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
