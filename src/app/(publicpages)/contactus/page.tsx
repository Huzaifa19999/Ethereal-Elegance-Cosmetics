import Banner from "@/app/components/Banner";
import Email from "@/app/components/Email";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function Contactus() {
  return (
    <>
      <Navbar />
      <section>
        <div className="relative">
          <Image
            className="w-full"
            src={"/contactus/Frame 98.png"}
            alt="cover"
            width={400}
            height={400}
          />
        </div>
        <div className="text-center mb-16 p-3 shadow-md mx-4 mt-16">
          <div className="flex flex-col justify-center">
            <div className='ms-10 mt-5'>
            <Image src={'/notfound/Jewe2 1.png'} alt='circle' width={30} height={30}/>
          </div>
              <Image
                src={"/contactus/Contact us.png"}
                alt="circle"
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-2xl italic text-center">Feel Free to Contact Us</p>
            </div>
          <div className="italic leading-8 text-sm flex-wrap mt-20 flex justify-evenly">
            <div className="mb-10">
              <p className="font-bold">Phone & Gmail</p>
              <p className="text-slate-400">+92-3106733754</p>
              <p className="text-slate-400">EtherealElegance@gmail.com</p>
            </div>
            <div className="mb-10">
              <p className="font-bold">Address</p>
              <p className="text-slate-400">New York , USE</p>
              <p className="text-slate-400"> 1039 First Avenue , Mushwell hill</p>
            </div>
            <div>
              <p className="font-bold">Opening Times</p>
              <p className="text-slate-400">Mon-Fri 10:00 - 19:00</p>
              <p className="text-slate-400">Closed on Weekends</p>
            </div>
          </div>
        </div>
        <p className="justify-center italic mb-10 lg:flex hidden">Explore Our Range of Leading Brand Products</p>
        <Banner/>
        <Email/>
      </section>
      <Gallery/>
      <Footer />
    </>
  );
}

export default Contactus;
