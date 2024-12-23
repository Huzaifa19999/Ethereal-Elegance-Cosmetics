import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

function Products() {
  return (
    <>
    <Navbar/>
    <section>
    <Image alt='cover' src={'/products/Frame 137.png'} className='w-full' height={1600} width={1600} />
    </section>
    <Footer/>
    </>
  )
}

export default Products
