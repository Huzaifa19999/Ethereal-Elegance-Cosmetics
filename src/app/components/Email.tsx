import Image from 'next/image'
import React from 'react'

function Email() {
  return (
     <section className="flex flex-wrap lg:flex-nowrap mt-10 md:mt-28 px-4">
            <div className="w-full lg:w-8/12 text-center lg:text-left">
              <Image
                className="mx-auto lg:mx-3"
                alt="Our Story"
                src="/aboutus/Our Story.png"
                height={200}
                width={200}
              />
              <p className="text-2xl md:text-3xl  font-serif mt-4 mb-5">
                Email Us
              </p>
    
              <div className="flex items-center justify-center lg:justify-start border-l-4 sm:h-24 md:h-12 lg:h-16 border-l-red-700 me-3 mt-4 lg:mt-0">
                <p className="mt-2 sm:mt-7 md:mt-1 lg:mt-3">
                  Ethereal Elegance offers a curated collection of skincare and
                  makeup products aimed at enhancing natural beauty and individual
                  style.
                </p>
              </div>
    
              <div className="mt-5 text-sm font-sans px-2 lg:text-start">
                <p>
                  With a focus on quality ingredients and diverse offerings, the
                  brand fosters confidence and self-expression. Beyond products,
                  Ethereal Elegance provides a supportive community with tips,
                  tutorials, and inspiration for unlocking inner beauty and
                  realizing personal potential.
                </p>
              </div>
            </div>
    
            <div className="md:mx-auto md:p-5 lg:mt-16">
              <Image
                src={"/contactus/Rectangle 171.png"}
                alt="side image"
                height={400}
                width={400}
              />
            </div>
          </section>
    
  )
}

export default Email
