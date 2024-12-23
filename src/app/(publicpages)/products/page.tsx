import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

function Products() {
  return (
    <>
    <Navbar/>
    <section>
    <Image alt='cover' src={'/products/Frame 137.png'} className='w-full' height={1600} width={1600} />
    <section>
        <div>
            <p>All</p>
            <p>Filter By</p>
            <ul>
            <li>Size</li>
            <li><input type="checkbox" />  S(2)</li>
            <li><input type="checkbox" />  M(2)</li>
            <li><input type="checkbox" />  L(2)</li>
            <li><input type="checkbox" />  XL(2)</li>
            </ul>
            <ul>
            <li>Product</li>
            <li><input type="checkbox" />  Lips</li>
            <li><input type="checkbox" />  Hairs</li>
            <li><input type="checkbox" />  Nails</li>
            <li><input type="checkbox" />  Eyes</li>
            <li><input type="checkbox" />  Face</li>
            </ul>
            <ul>
            <li>Availability</li>
            <li><input type="checkbox" />  In Stock</li>
            <li><input type="checkbox" />  Not Available</li>
            </ul>
            <ul>
            <li>Price</li>
            <li><input type="checkbox" />  In Stock</li>
            </ul>
            <div>
            <p>Tags</p>
            <hr className='w-3/12 ' />
            <br />
            <button className='border-2 border-black rounded-lg p-1'>Makeup</button>
            <button className='border-2 border-black rounded-lg p-1'>Face Cream</button>
            <button className='border-2 border-black rounded-lg p-1'>Skin Care</button>
            </div>
        </div>
    </section>
    </section>
    <Footer/>
    </>
  )
}

export default Products
