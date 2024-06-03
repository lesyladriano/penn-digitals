'use client'
import React, { useState } from 'react'
import ContactHeader from '@/components/ui/contact/contactHeader'
import { MaamKayeGif, bgWaterColor, contactAvatar } from '@/assets'
import Image from 'next/image' 
import ContactForm from '@/components/contact/contactForm'
import Footer from '../../components/ui/footer'
function page() {
  
  

  return (
    <div className='h-[100%] '>
        <div className='' style={{zIndex:'9999'}}>
          <ContactHeader/>
        </div>
        <div className=' flex w-full 3xl:py-[5%]  relative justify-center overflow-hidden py-[3rem]'>
          <div className='px-[2rem] md:px-[5rem] 3xl:px-0 max-w-screen-xl  h-fit 3xl:max-w-screen-2xl 2xl:gap-5 3xl:gap-10 md:grid-cols-2 md:grid flex flex-col-reverse'>
            <div className='flex items-center '>
              <div className='flex-col w-full md:space-y-4'>
                <div className='text-center  text-[55px] py-6 3xl:text-70px text-souv4 w-full font-satisfy  md:py-0'>
                  Let’s Connect!
                </div>
                <div className='font-poppins text-justify text-sm md:text-md leading-6' style={{letterSpacing: '0.1125rem'}}>
                  Interested in working with us? Reach us through the contact form below or send us an email directly to <a href="mailto:thepenndigitals@gmail.com ">
                   <span  className='text-souv4'>thepenndigitals@gmail.com </span> </a> with information on what the product, item or occasion that will be in use along with the desired deadline. Don’t hesitate to reach out directly through email and we look forward to hearing from you.
                </div>
                <div>
                  <ContactForm/>
                </div>
              </div>
            </div>

            <div className='md:flex md:items-center h-fit md:h-full  justify-center  ' >
            <div className='absolute flex justify-center w-full left-[.5rem] top-[1rem]'>
              <Image src={bgWaterColor} alt='bg' className=' md:hidden flex  w-[500px] h-[300px] object-fit z-[-1] opacity-[.5] top-[1rem] justify-self-center left-[5.5rem]' />
            </div>
            <div className='md:aspect-w-16 md:aspect-h-6 w-full flex  justify-center md:justify-start 3xl:justify-center left-0'>
            <Image src={bgWaterColor} alt='bg' className='hidden md:flex absolute w-[800px] object-fit h-auto max-h-[700px] z-[-1] opacity-[.5] -rotate-45 top-[1.5rem] left-[40%] 2xl:left-[45%]  3xl:left-[50%]' />
              <Image src={MaamKayeGif} alt="Avatar" className='object-cover floating max-w-[250px] md:min-w-[300px] md:max-w-[450px] h-full w-full'/>
            </div>
          </div>
          </div>

         
        </div>
        <Footer/>
    </div>
  )
}

export default page