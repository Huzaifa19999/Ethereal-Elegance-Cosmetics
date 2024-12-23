import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function Products() {
  return (
    <>
      <Navbar />
      <section>
        <Image
          alt="cover"
          src={"/products/Frame 137.png"}
          className="w-full"
          height={1600}
          width={1600}
        />
        <section className="flex flex-col lg:flex-row justify-around px-4 md:px-20">
          {/* Filters Section */}
          <div className="flex flex-col lg:w-3/12 md:w-4/12 w-full mx-auto mt-10 lg:mt-0">
            <div className="leading-loose">
              <p className="font-bold mt-10 dynamic-hover text-lg">All</p>
              <br />
              <p className="font-bold text-lg dynamic-hover">Filter By</p>
              <br />
              {/* Size Filter */}
              <ul>
                <li className="font-bold dynamic-hover text-lg">Size</li>
                <li>
                  <input type="checkbox" /> S(2)
                </li>
                <li>
                  <input type="checkbox" /> M(2)
                </li>
                <li>
                  <input type="checkbox" /> L(2)
                </li>
                <li>
                  <input type="checkbox" /> XL(2)
                </li>
              </ul>
              <br />
              {/* Product Filter */}
              <ul>
                <li className="font-bold dynamic-hover text-lg">Product</li>
                <li>
                  <input type="checkbox" /> Lips
                </li>
                <li>
                  <input type="checkbox" /> Hairs
                </li>
                <li>
                  <input type="checkbox" /> Nails
                </li>
                <li>
                  <input type="checkbox" /> Eyes
                </li>
                <li>
                  <input type="checkbox" /> Face
                </li>
              </ul>
              <br />
              {/* Availability Filter */}
              <ul>
                <li className="font-bold text-lg dynamic-hover">
                  Availability
                </li>
                <li>
                  <input type="checkbox" /> In Stock
                </li>
                <li>
                  <input type="checkbox" /> Not Available
                </li>
              </ul>
              <br />
              {/* Price Filter */}
              <ul>
                <li className="font-bold dynamic-hover text-lg">Price</li>
                <li>13:00 - 44.00</li>
                <li>
                  <input type="checkbox" /> In Stock
                </li>
              </ul>
              <br />
              {/* Tags Section */}
              <div>
                <p className="font-bold dynamic-hover text-lg">Tags</p>
                <hr className="w-4/12 border-2" />
                <br />
                <div className="flex text-slate-400 gap-3 flex-wrap">
                  <button className="border-2 border-slate-400 rounded-2xl p-1 px-2">
                    Makeup
                  </button>
                  <button className="border-2 border-slate-400 rounded-2xl p-1 px-2">
                    Face Cream
                  </button>
                  <button className="border-2 border-slate-400 rounded-2xl p-1 px-2">
                    Skin Care
                  </button>
                </div>
                <br />
              </div>
              <div>
                <Image
                  src={"/products/Rectangle 163.png"}
                  height={200}
                  width={300}
                  alt="below"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col lg:flex-row justify-start mt-20 lg:mt-0">
            <div className="w-full lg:w-11/12 flex flex-col  justify-start">
              <div className="flex mt-10 lg:justify-end md:justify-start">
                <p className="mt-2 text-slate-300">Sort by:</p>
                <select className="border-2 h-10 ms-4 p-2 w-60 rounded-2xl">
                  <option value="">Relevance</option>
                </select>
              </div>
              <hr className="border-2 border-black mt-5 w-full" />
              <div className="flex  flex-wrap gap-y-5 gap-5 justify-around mt-10">
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img1.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img3.png"}
                    height={200}
                    width={200}
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
                    width={200}
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
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img6.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img7.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img8.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img9.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img10.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img11.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img1.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
                <div className="text-center text-sm shadow-md">
                  <Image
                    alt="img1"
                    src={"/products/products/img1.png"}
                    height={200}
                    width={200}
                  />
                  <p className=" text-red-600">LIPLOSE</p>
                  <p className="text-md">PINK LIP-GLOSS</p>
                  <p className="text-xl">$30.00</p>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Products;
