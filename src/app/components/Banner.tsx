import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <section className="relative w-full lg:flex hidden mb-30">
         <Image
           className="w-full"
           src={"/aboutus/Rectangle 129.png"}
           alt="experience"
           width={800}
           height={800}
         />
         <div className="absolute flex justify-around left-0 right-0 top-10 lg:top-35">
           <Image
             className="mx-0"
             src={"/aboutus/Logo.png"}
             alt="logo1"
             height={100}
             width={80}
           />
           <Image
             className="mx-0"
             src={"/aboutus/Frame 120.png"}
             alt="logo2"
             height={80}
             width={80}
           />
           <Image
             className="mx-0"
             src={"/aboutus/Logo (1).png"}
             alt="logo3"
             height={100}
             width={80}
           />
           <Image
             className="mx-0"
             src={"/aboutus/Logo (2).png"}
             alt="logo4"
             height={100}
             width={80}
           />
           <Image
             className="mx-0"
             src={"/aboutus/Logo (3).png"}
             alt="logo5"
             height={100}
             width={80}
           />
         </div>
       </section>
  )
}

export default Banner