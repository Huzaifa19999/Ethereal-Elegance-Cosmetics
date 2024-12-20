'use client'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Login() {
  return (
  <>
    <Navbar />
    <section className="flex mt-32 mb-28 md:mb-36 bg-white text-black justify-center items-center h-screen">
      <div className="  justify-center  flex items-center w-full">
        <div className="w-96 p-6 bg-white rounded-lg">
          <span className="text-3xl font-semibold mb-6 block dynamic-hover">Login</span>

          <input 
            type="text" 
            placeholder="Username" 
            className="border-2 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="border-2 w-full p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          
          <div className="text-xs flex justify-between items-center mb-6">
            <label className="flex items-center cursor-pointer text-slate-400">
              <input type="checkbox" className="mr-2 text-slate-300" /> Remember me
            </label>
            <p className="text-red-500 hover:underline cursor-pointer">Forgot Password?</p>
          </div>
          
          <div className="flex justify-end">
            <button className="bg-black text-white p-3 text-sm hover:bg-gray-800 transition duration-200">LOGIN</button>
          </div>
          
          <p className='text-center text-gray-400 mt-6'>OR</p>
          
          <div className='flex text-2xl justify-center gap-5 mt-4'>
            <FaFacebook />
            <SiGmail />
            <FaTwitter />
          </div>

          <p className='text-center mt-4'>
            Don't have an account? <span className='text-red-500'>SIGN UP</span>
          </p>
        </div>

        <div className="ml-10 hidden md:block">
          <Image src="/login/login.png" width={450} height={400} alt="login" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Login
