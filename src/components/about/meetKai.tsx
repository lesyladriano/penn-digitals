'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import watercolor from '@/assets/images/splash.png'
import mamKai from '@/assets/images/maam_kai.jpg'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Link from 'next/link'
const meetKai = () => {
  const [isPage,setIsPage]=useState('');
  
  useEffect(() => {
    const currentPathname = window.location.pathname;
    if (currentPathname.includes('about')) {
      setIsPage('ABOUT');
    }
  }, []); 

  return (
    <div className='max-w-screen-xl mx-auto mb-16'>

      <div className="flex flex-col text-center">
          <div className='flex flex-col md:hidden'>
            <Image
            className='absolute z-10 rotate-180 opacity-70 w-[100] h-auto'
            src={watercolor}
            
            alt="watercolor-splash"
            />
            <h1 className='text-pblue  font-satisfy text-5xl z-20 mt-20'>Meet <span className='text-pstone'>Kai</span></h1>
            <div className='flex  mt-5 flex-col w-[18rem] mx-auto'>
                <Image
                className='relative z-30 rounded-t-full h-auto'
                src={mamKai}
                alt='kaye'/>

                <p className='text-[16px] text-justify z-20 tracking-wide leading-relaxed mt-6 font-khu'>
                Hi, I'm Kai. I love organizing stuff and crafting. I would rather sit all day with my laptop, create and design anything. I am a die-hard fan of scented paper, glitter, ribbons, and crafting. I’m all in, and I want to help you tell your story through beautiful paper goods.
                </p>
                {isPage==='ABOUT' ? (" "):(
                  <div>
                    <Link href='/about'>
                    <button className='px-3 font-poppins py-2 mt-7 transition-all ease-in-out duration-300 delay-100 hover:bg-[#af5a42] border-[1px] rounded-sm border-black tracking-wide  flex items-center hover:text-white hover:border-none'>Read More  <span className='pl-1'><GoArrowRight/></span></button>
                    </Link>
                  </div>
                )}
            </div>  
          </div>


          <div className='hidden md:flex md:max-w-screen-md lg:max-w-screen-lg mx-auto md:gap-12 lg:gap-14 mt-10'>
              <div className='text-left w-50% mt-5 relative'>
                <Image
                className='absolute z-10 opacity-35 w-[36rem] h-auto right-56'
                src={watercolor}
                style={{zIndex:'-1'}}
                alt="watercolor-splash"
                />

                <h1 className='text-pblue font-satisfy md:text-6xl lg:text-7xl z-20 mt-6'>Meet <span className='text-pstone'>Kai</span></h1>
                <p className='md:text-lg lg:text-lg leading-10 tracking-wide z-30 mt-10 font-khu ' style={{zIndex:'9999'}}>
                Hi, I'm Kai. I love organizing stuff and crafting. <br/>I would rather sit all day with my laptop, create and design anything. I am a die-hard fan of scented paper, glitter, ribbons, and crafting. I’m all in, and I want to help you tell your story through beautiful paper goods.
                </p>

                {isPage==='ABOUT' ? (" "):(
                  <div>
                         <Link href='/about'>
                    <button className='px-3 font-poppins py-2 mt-7 transition-all ease-in-out duration-300 delay-100 hover:bg-[#af5a42] border-[1px] rounded-sm border-black tracking-wide  flex items-center hover:text-white hover:border-none'>Read More  <span className='pl-1'><GoArrowRight/></span></button>
                    </Link>
                  </div>
                )}
              </div>

              <div>
              <Image
                className='relative rounded-t-full z-30 w-96 h-auto mt-5'
                src={mamKai}
                alt='kaye'/>
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default meetKai
