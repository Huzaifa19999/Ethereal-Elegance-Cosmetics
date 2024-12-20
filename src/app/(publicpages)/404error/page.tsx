import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function Notfound() {
  return (
    <>
      <Navbar />
      <section className="relative">
      <div className="bg-[#F5F5F5]  h-screen bottom-0 flex justify-center items-center">
        <div className="text-center z-10">
        <p className="text-4xl font-extrabold">404</p>
        <p className="text-center mx-10 mt-3">Oops! The page your are looking for does not exist,It might have been moved or deleted.</p>
        <button className="mt-10 border-2 p-3 bg-black text-white rounded-2">BACK TO HOME</button>
        </div>
      </div>
        <Image className="absolute z-10 right-42  left-56 top-52" src={'/notfound/Jewe2 1.png'} alt="bubble" height={24} width={24} />
        <Image className="absolute z-10 md:h-150 md:w-200   left-0 top-10" src={'/notfound/texture-6 1.png'} alt="bubble" height={30} width={30} />
      <Footer />
      </section>
    </>
  );
}

export default Notfound;
