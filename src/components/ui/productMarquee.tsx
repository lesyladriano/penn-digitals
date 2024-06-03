import { product_list } from '@/constant/productList'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
function productMarquee() {
  
  return (
    <div className='w-full'>
        <Marquee pauseOnHover={true} >
            <div className='flex mt-20 mb-5 '>
                {product_list.map((product) => (
                <div key={product.name} className=' relative w-full h-[15rem] md:h-[20rem]  md:px-5'>
                        <Image src={product.image} alt={product.name} className='h-full object-cover w-90% md:w-full' title={product.name} />
                </div>
                ))}
            </div>
        </Marquee>
    </div>
  )
}

export default productMarquee