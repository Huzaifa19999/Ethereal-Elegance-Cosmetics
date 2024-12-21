import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

function Aboutus() {
  return (
    <>
    <Navbar/>
    <Image src={'/aboutus/Frame 97.png'} alt='cover' width={1200} height={800} style={{width:'100%',height:'auto'}}/>
    <Footer/>
        </>
  )
}

export default Aboutus
