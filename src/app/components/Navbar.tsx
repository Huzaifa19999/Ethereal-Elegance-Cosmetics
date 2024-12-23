"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiBasket } from "react-icons/pi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F8F8F8]">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex-shrink-0">
          <Image
            src={"/ethereal-elegance.png"}
            height={50}
            width={150}
            alt="navbar-logo"
          />
        </div>

        <ul className="hidden md:flex gap-6 text-sm text-[#666363]">
          <Link href={"/"}>
            <li className="cursor-pointer hover:text-black">HOME</li>
          </Link>
          <Link href={"/aboutus"}>
            <li className="cursor-pointer hover:text-black">ABOUT US</li>
          </Link>
          <Link href={'products'}>
          <li className="cursor-pointer hover:text-black">SHOP</li>
          </Link>
          <Link href={'/contactus'}>
          <li className="cursor-pointer hover:text-black">CONTACT US</li>
          </Link>
          <Link href={'/blogs'}>
          <li className="cursor-pointer hover:text-black">BLOGS</li>
          </Link>
        </ul>

        <div className="flex items-center gap-4 text-[#666363]">
          <Link href={'/login'}>
          <li className="hidden md:block cursor-pointer hover:text-black">
            LOGIN
          </li>
          </Link>
          <li className="cursor-pointer hover:text-black">
            <FiSearch size={20} />
          </li>
          <li className="cursor-pointer hover:text-black">
            <PiBasket size={20} />
          </li>
        </div>

        <button
          onClick={toggleMenu} 
          className="md:hidden p-2 focus:outline-none"
        >
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col items-center md:hidden text-sm text-[#666363] py-2 gap-2">
          <Link href={"/"}>
            <li className="cursor-pointer hover:text-black">HOME</li>
          </Link>
          <Link href={'/aboutus'}>
          <li className="cursor-pointer hover:text-black">ABOUT US</li>
          </Link>
          <Link href={''}>
          <li className="cursor-pointer hover:text-black">SHOP</li>
          </Link>
          <Link href={'/contactus'}>
          <li className="cursor-pointer hover:text-black">CONTACT US</li>
          </Link>
          <Link href={'blogs'}>
          <li className="cursor-pointer hover:text-black">BLOGS</li>
          </Link>
          <Link href={'/login'}>
          <li className="cursor-pointer hover:text-black">LOGIN</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
