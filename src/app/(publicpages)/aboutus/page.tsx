import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function Aboutus() {
  const team = [
    {
      img: "/aboutus/Rectangle 140.png",
      name: "EMILY JOHNSON",
      status: "Founder",
    },
    {
      img: "/aboutus/Rectangle 141.png",
      name: "LIAM ANDERSON",
      status: "Co-Founder",
    },
    {
      img: "/aboutus/Rectangle 142.png",
      name: "ETHAN THOMPSON",
      status: "Marketing Director",
    },
    {
      img: "/aboutus/Rectangle 143.png",
      name: "SOPHIA ROBERTS",
      status: "Creative Director",
    },
  ];

  return (
    <>
      <Navbar />
      <Image
        src={"/aboutus/Frame 97.png"}
        alt="cover"
        width={1200}
        height={800}
        style={{ width: "100%", height: "auto" }}
      />

      <section className="flex flex-wrap lg:flex-nowrap mt-10 md:mt-28 px-4">
        <div className="w-full lg:w-8/12 text-center lg:text-left">
          <Image
            className="mx-auto lg:mx-3"
            alt="Our Story"
            src="/aboutus/Our Story.png"
            height={200}
            width={200}
          />
          <p className="text-2xl md:text-3xl italic font-serif mt-4 mb-5">
            Elevate your beauty with Ethereal Elegance
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
            src={"/aboutus/Rectangle 89.png"}
            alt="side image"
            height={400}
            width={400}
          />
        </div>
      </section>

      <section className="flex justify-center flex-wrap gap-14 lg:gap-24 mt-10">
        <div className="shadow-lg p-6 text-center">
          <Image
            className="mx-auto mt-2 mb-4"
            alt="first"
            src={"/aboutus/Group 146.png"}
            width={70}
            height={100}
          />
          <p className="text-[#C75D68] italic text-3xl">10 +</p>
          <p>years Experience</p>
        </div>
        <div className="shadow-lg p-6 text-center">
          <Image
            className="mx-auto mt-2 mb-4"
            alt="second"
            src={"/aboutus/Group 147.png"}
            width={70}
            height={100}
          />
          <p className="text-[#C75D68] italic text-3xl">500 K</p>
          <p>Cosmetics sold</p>
        </div>
        <div className="shadow-lg p-6 text-center">
          <Image
            className="mx-auto mt-2 mb-4"
            alt="third"
            src={"/aboutus/Group 170.png"}
            width={70}
            height={100}
          />
          <p className="text-[#C75D68] italic text-3xl">40</p>
          <p>Clients Happy</p>
        </div>
      </section>

      <section>
        <div className="flex mt-10 flex-col items-center">
          <Image
            src={"/aboutus/Our Memebers.png"}
            alt="our member"
            width={150}
            height={200}
          />
          <p className="md:text-xl text-center italic mt-4">
            Meet the Faces of Ethereal Elegance
          </p>
        </div>
        <div className="flex mt-10 flex-wrap justify-center gap-8">
          {team.map((e, i) => (
            <div key={i} className="text-center">
              <Image src={e.img} alt={e.name} height={200} width={170} />
              <h3 className="font-bold mt-2">{e.name}</h3>
              <p>{e.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:flex flex-col hidden mt-16 items-center">
        <div className="flex items-center flex-col">
          <Image
            src={"/aboutus/Experience Diversity.png"}
            alt="experience"
            width={150}
            height={100}
          />
          <p className="text-center mt-4 mb-5">
            Explore Our Range of Leading Brand Products
          </p>
        </div>
      </section>

          <Banner/>
      <Gallery />
      <Footer />
    </>
  );
}

export default Aboutus;
