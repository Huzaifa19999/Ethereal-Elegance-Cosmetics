import Image from 'next/image'
import React from 'react'

function Email() {
  return (
    <section className="flex flex-wrap text-slate-400 lg:flex-nowrap mt-10 md:mt-20 px-4">
        <div className="md:mx-auto md:p-5 lg:mt-16">
        <Image
          src={"/contactus/Rectangle 171.png"}
          alt="side image"
          height={400}
          width={500}
          className="w-full lg:w-auto"
        />
      </div>
      <div className="w-full md:5/12 lg:w-6/12 text-center lg:text-left">
        <Image
          className="mx-auto mt-5 lg:mx-3"
          alt="Our Story"
          src="/aboutus/Our Story.png"
          height={200}
          width={200}
        />
        <p className="text-2xl md:text-3xl text-black font-serif mt-4">
          Email Us
        </p>

        <div className="flex flex-col lg:justify-start sm:h-24 md:h-12 lg:h-16 mt-4 lg:mt-0">
          <p className="mt-2 mx-auto lg:mx-0  sm:mt-7 w-8/12 md:mt-1 lg:mt-3">
            Feel free to reach out to us anytime! We're here to assist you with any inquiries or concerns you may have.
          </p>
          <div className="flex mx-auto lg:mx-0 flex-col gap-3 mt-4 sm:w-6/12 w-full lg:w-8/12">
            <input 
              className='border-2 border-gray-400 p-1 rounded-md w-full' 
              type="text" 
              placeholder="Your Name" 
            />
            <input 
              className='border-2 border-gray-400 p-2 rounded-md w-full' 
              type="email" 
              placeholder="Your Email" 
            />
          </div>
        </div>
        
        <div className="md:mt-32 mt-10 text-sm md:w-6/12 lg:w-9/12 mx-auto lg:mx-0 font-sans lg:text-start">
          <textarea 
            className='border-2 h-40 border-gray-400 p-4 w-full rounded-md' 
            placeholder="Your Message"
          />
        </div>
      </div>

    
    </section>
  )
}

export default Email
