// 'use client'
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Navbar />
      <section>
        <Image
          src={"/home/Frame 97.png"}
          className="w-full"
          alt="home cover"
          height={800}
          width={1600}
        />
        <div className="flex flex-wrap gap-y-3 justify-evenly mt-10">
          <Image src={"/home/Group 81.png"} height={200} width={250} alt="1" />
          <Image src={"/home/Group 82.png"} height={200} width={250} alt="1" />
          <Image src={"/home/Group 83.png"} height={200} width={250} alt="1" />
          <Image src={"/home/Group 84.png"} height={200} width={250} alt="1" />
        </div>
        <div className=" mt-20 flex justify-center text-center">
          <Image
            src={"/home/Perfect.png"}
            alt="perfect"
            width={200}
            height={200}
          />
        </div>
        <p className="italic text-center text-3xl">
          From Editor‘s Pick Collection
        </p>
        <hr className="mx-auto w-80 border-2" />
        <div className="flex flex-wrap mt-10 justify-evenly">
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
        <div className="flex justify-center">
          <button className="border-2 border-black p-3 font-bold mt-10">
            SHOP NOW
          </button>
        </div>
      </section>
      <section className="flex flex-wrap lg:flex-nowrap  px-4">
        <div className="md:mx-auto md:p-5 lg:mt-16">
          <Image
            src={"/home/Group 110.png"}
            alt="side image"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full lg:w-8/12 lg:mt-32 md:mt-5 mt-5 text-center lg:text-left">
          <Image
            className="mx-auto lg:mx-3"
            alt="About us"
            src="/home/About us.png"
            height={200}
            width={200}
          />
          <p className="text-2xl md:text-3xl italic font-serif mt-4 mb-5">
            We Guaranteed a High Quality
          </p>

          <div className="flex items-center justify-center lg:justify-start border-l-4 sm:h-24 md:h-12 lg:h-16 border-l-red-700 me-4 mt-4 lg:mt-0">
            <p className="mt-2 sm:mt-7 ms-3 md:mt-1 lg:mt-3">
              At EtherealElegance, we believe in the transformative power of
              beauty. Our curated cosmetics collection is meticulously crafted
              to inspire confidence and elevate your natural allure.
            </p>
          </div>

          <div className="mt-5 text-sm font-sans px-2 lg:text-start">
            <p>
              We understand that beauty is more than just skin deep; it's about
              embracing your individuality and expressing your personal style
              with effortless elegance. That's why we offer premium offerings
              that cater to modern sophistication, ensuring you feel empowered
              and beautiful in every moment.
            </p>
          </div>
          <div className="flex justify-around mt-10">
            <Image
              alt="cosmetic"
              src={"/home/Group 112.png"}
              height={80}
              width={80}
            />
            <Image
              alt="cosmetic"
              src={"/home/Group 113.png"}
              height={80}
              width={80}
            />
          </div>
          <button className="mx-auto border-2 border-black p-3 lg:ms-28  hover:text-white hover:bg-black mt-5">
            EXPLORE MORE
          </button>
        </div>
      </section>
      <Image
        alt="cover-2"
        src={"/home/Group 122.png"}
        className="w-full"
        height={1000}
        width={1600}
      />
      <section className="flex flex-wrap lg:flex-nowrap  px-4">
        <div className="w-full lg:w-8/12 lg:mt-32 md:mt-5 mt-5 text-center lg:text-left">
          <Image
            className="mx-auto lg:mx-3"
            alt="Best Product"
            src="/home/Best Product.png"
            height={200}
            width={200}
          />
          <p className="text-2xl md:text-3xl italic font-serif mt-4 mb-5">
            Revolutionizing eye shadow.
          </p>
          <div className="mt-5 text-sm font-sans px-2 lg:text-start">
            <p className="font-bold">Embracing a new era in cosmetics </p>
          </div>
          <br />
          <div className="flex items-center justify-center lg:justify-start border-l-4 sm:h-24 md:h-12 lg:h-16 border-l-red-700 me-4 mt-4 lg:mt-0">
            <p className="mt-2 sm:mt-7 text-slate-400 ms-3 md:mt-1 lg:mt-3">
              The eye shadow revolution redefines beauty with vibrant colors and
              innovative formulas, empowering self-expression and creativity in
              every stroke.{" "}
            </p>
          </div>
        </div>
        <div className="md:mx-auto md:p-5 lg:mt-16">
          <Image
            src={"/home/glitz-7 1.png"}
            alt="side image"
            height={400}
            width={400}
          />
        </div>
      </section>
      <section className="flex flex-wrap lg:flex-nowrap  px-4">
        <div className="md:mx-auto md:p-5 lg:mt-16">
          <Image
            src={"/home/aa.png"}
            alt="side image"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full lg:w-8/12 lg:mt-32 md:mt-5 mt-5 text-center lg:text-left">
          <Image
            className="mx-auto lg:mx-3"
            alt="Best Product"
            src="/home/Best Product.png"
            height={200}
            width={200}
          />
          <p className="text-2xl md:text-3xl italic font-serif mt-4 mb-5">
            Whitening Serum
          </p>
          <div className="mt-5 text-sm font-sans px-2 lg:text-start">
            <p className="font-bold">
              Introducing the Whitening Serum, a breakthrough in skincare
            </p>
          </div>
          <br />
          <div className="flex items-center justify-center lg:justify-start border-l-4 sm:h-24 md:h-12 lg:h-16 border-l-red-700 me-4 mt-4 lg:mt-0">
            <p className="mt-2 sm:mt-7 text-slate-400 ms-3 md:mt-1 lg:mt-3">
              Formulated with advanced ingredients, it targets dark spots and
              uneven skin tone, unveiling a brighter, more radiant complexion.
            </p>
          </div>
        </div>
      </section>
      <Image alt="cover-3" src={'/home/Frame 62.png'} className="w-full" height={1200} width={1800}/>
      <section>
        
      </section>
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
