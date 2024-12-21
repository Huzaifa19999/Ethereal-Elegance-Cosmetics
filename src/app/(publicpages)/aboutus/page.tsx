import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

function Aboutus() {
  return (
    <>
    <Navbar/>
    <Image src={'/aboutus/Frame 97.png'} alt='cover' width={1200} height={800} style={{width:'100%',height:'auto'}}/>
    <section className="flex flex-wrap lg:flex-nowrap">
  <div className="mt-10 md:mt-28 md:text-center ps-2 w-full lg:w-8/12">
    <Image className='lg:mx-3 mx-4 md:mx-auto' alt="Our Story" src="/aboutus/Our Story.png" height={200} width={200} />
    <p className="text-2xl md:text-3xl lg:text-start mt-4 italic font-serif mb-5">Elevate your beauty with Ethereal Elegance</p>

    <div className="flex w-full lg:text-start md:text-center md:w-full">
      <div className="border-l-4 sm:h-24 md:h-12 lg:h-16  border-l-red-700 me-3"></div>
      <p className="mt-2 sm:mt-7  md:mt-1 lg:mt-3">
        Ethereal Elegance offers a curated collection of skincare and makeup products aimed at enhancing natural beauty and individual style.
      </p>
    </div>

    <div className="flex justify-start ps-3 md:ps-1">
      <p className="mt-5 lg:text-start text-sm font-sans px-2 w-full">
        With a focus on quality ingredients and diverse offerings, the brand fosters confidence and self-expression. Beyond products, Ethereal Elegance provides a supportive community with tips, tutorials, and inspiration for unlocking inner beauty and realizing personal potential.
      </p>
    </div>
  </div>

  <div className="md:mx-auto md: p-5">
    <Image src={'/aboutus/Rectangle 89.png'} className='lg:mt-16' alt="" height={400} width={400}/>
  </div>
</section>
<section>
  <div className='flex justify-center md:gap-14 lg:gap-32'>
    <div className=' shadow-lg   p-6'>
      <Image className='mx-auto mt-2 mb-4' alt='first' src={'/aboutus/Group 146.png'} width={70} height={100}/>
      <p className='text-center text-[#C75D68] italic text-3xl'>10 +</p>
      <p>years Experience</p>
    </div>
    <div className=' shadow-lg   p-6'>
      <Image className='mx-auto mt-2 mb-4' alt='first' src={'/aboutus/Group 147.png'} width={70} height={100}/>
      <p className='text-center text-[#C75D68] italic text-3xl'>500 K</p>
      <p>Cosmetics sold</p>
    </div>
    <div className=' shadow-lg   p-6'>
      <Image className='mx-auto mt-2 mb-4' alt='first' src={'/aboutus/Group 170.png'} width={70} height={100}/>
      <p className='text-center text-[#C75D68] italic text-3xl'>40</p>
      <p>Clients Happy</p>
    </div>
   
  
  </div>
</section>


    <Footer/>
        </>
  )
}

export default Aboutus
