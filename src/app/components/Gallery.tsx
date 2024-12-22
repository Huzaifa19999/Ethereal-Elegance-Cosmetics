import React from 'react'
import Image from "next/image";

function Gallery() {
  return (
    <section>
    <div className="flex flex-col mt-16 items-center">
      <Image alt="Our Gallery" src={'/aboutus/Our Gallery.png'} width={100} height={100} />
      <p className="italic mt-4">Welcome to our beauty community</p>
      <div className="border-l-4 ps-2 border-l-red-700 mt-4">
        <p className="text-slate-400">Follow us on Instagram</p>
        <p>@EtherealElegance</p>
      </div>
    </div>

    <div className="flex justify-center flex-wrap gap-5 mt-5">
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 94.png'} width={100} height={100} />
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 95.png'} width={100} height={100} />
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 96.png'} width={100} height={100} />
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 97.png'} width={100} height={100} />
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 98.png'} width={100} height={100} />
      <Image alt="Our Gallery" src={'/aboutus/Rectangle 99.png'} width={100} height={100} />
    </div>
          </section>
  )
}

export default Gallery
