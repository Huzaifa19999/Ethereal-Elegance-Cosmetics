// 'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Banner from '../components/Banner'

function Home() {
  return (
    <> 
      <Navbar/>
      <section>
        <Image src={'/home/Frame 97.png'} className='w-full' alt='home cover' height={800} width={1600}/>
        <div className='flex flex-wrap gap-y-3 justify-evenly mt-10'>
          <Image src={'/home/Group 81.png'} height={200} width={250} alt='1' />
          <Image src={'/home/Group 82.png'} height={200} width={250} alt='1' />
          <Image src={'/home/Group 83.png'} height={200} width={250} alt='1' />
          <Image src={'/home/Group 84.png'} height={200} width={250} alt='1' />
        </div>
        <div className=' mt-20 flex justify-center text-center'>
          <Image src={'/home/Perfect.png'} alt='perfect' width={200} height={200} />
        </div>
          <p className='italic text-center text-3xl'>From Editor‘s Pick Collection</p>
          <hr className='mx-auto w-80 border-2' />
          <div className='flex flex-wrap mt-10 justify-evenly'>
            <div className="text-center text-sm shadow-md">
                              <Image
                                alt="img1"
                                src={"/products/products/img1.png"}
                                height={200}
                                width={300}
                              />
                              <p className=" text-red-600">LIPLOSE</p>
                              <p className="text-md">PINK LIP-GLOSS</p>
                              <p className="text-xl">$30.00</p>
                            </div>
            <div className="text-center  text-sm shadow-md">
                              <Image
                                alt="img1"
                                src={"/products/products/img5.png"}
                                height={200}
                                width={300}
                              />
                              <p className=" text-red-600">LIPLOSE</p>
                              <p className="text-md">PINK LIP-GLOSS</p>
                              <p className="text-xl">$30.00</p>
                            </div>
            <div className="text-center text-sm shadow-md">
                              <Image
                                alt="img1"
                                src={"/products/products/img4.png"}
                                height={200}
                                width={300}
                              />
                              <p className=" text-red-600">LIPLOSE</p>
                              <p className="text-md">PINK LIP-GLOSS</p>
                              <p className="text-xl">$30.00</p>
                            </div>
            <div className="text-center text-sm shadow-md">
                              <Image
                                alt="img1"
                                src={"/products/products/img5.png"}
                                height={200}
                                width={300}
                              />
                              <p className=" text-red-600">LIPLOSE</p>
                              <p className="text-md">PINK LIP-GLOSS</p>
                              <p className="text-xl">$30.00</p>
                            </div>
          </div>
                            <div className='flex justify-center'>
                              <button className='border-2 border-black p-3 font-bold mt-10'>SHOP NOW</button>
                            </div>
      </section>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home
