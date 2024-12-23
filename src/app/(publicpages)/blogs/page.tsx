import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

function Blogs() {
  return (
    <>
      <Navbar/>
      <Image alt='blog' width={1600} height={1600} className='w-full' src={'/blogs/Frame 129.png'}/>
      {/* <Blogs/> */}
      <Footer/>
    </>
  )
}

export default Blogs
