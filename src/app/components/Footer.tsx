'use client'

import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

function Footer() { 
  return (
    <footer className="bg-[#252525] mt-10 relative text-white py-3">
      <div className='w-40 absolute position-footer right-0 left-0 mx-auto bg-white p-3'>
        <p className=' border-2 p-1 bottom-20 text-black font-bold text-center border-black'>Ethereal <br />Elegance</p>
      </div>
      <div className="container mt-16 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12 gap:9 ">
          <div>
            <ul className="text-sm text-center md:me-10 sm:text-start">
              <li className="mb-4 font-bold text-xl">Contact</li>
              <li>SR-783 Sector 12A/2, Karachi</li>
              <li>huzaifaqadir10@gmail.com</li>
              <li>+92310-6733754</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm mb-4">
              Enhance your natural beauty with our curated collection of cosmetics
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <li>
                <FaInstagram className="border-2 rounded-full text-3xl p-1 text-white border-white" />
              </li>
              <li>
                <FaFacebook className="border-2 rounded-full text-3xl p-1 text-white border-white" />
              </li>
            </div>
            <div className="sm:flex sm:flex-col md:flex-row text-xs mt-5 gap-3 justify-center">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SHOP</li>
              <li>CONTACT US</li>
              <li>BLOGS</li>
            </div>
          </div>

          <div className="mx-auto md:me-2 sm:text-center md:text-start">
            <h3 className="font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="flex items-center justify-center md:justify-start">
              <input
                className="border bg-[#252525] border-white mt-4 p-3 w-full md:w-auto"
                placeholder="Email"
              />
              <FaArrowRightLong className="mt-4 p-3 border-black text-5xl bg-white text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
