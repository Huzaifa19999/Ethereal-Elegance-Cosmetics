// 'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

function Home() {
  return (
    <> 
      <Navbar/>
      <section>
        <Image src={'/home/Frame 97.png'} className='w-full' alt='home cover' height={800} width={1600}/>
      </section>
      <Footer/>
    </>
  )
}

export default Home
