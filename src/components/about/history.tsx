import Image from 'next/image'
import watercolor from '@/assets/images/splash.png'
import MoreSampleSoon from '@/assets/images/moreSampleSoon.png'

import React from 'react'

const history = () => {
  return (
    <div className='max-w-screen-xl mx-auto mb-20'>
        <div className="flex flex-col md:hidden  text-center w-full sm:w-[24rem] mx-auto">
           <div  style={{zIndex:'9999'}}>
           <h1 className='text-pblue font-satisfy text-5xl z-20 mt-6'>The <span className='text-pstone'>History</span></h1>
            <p className='text-[16px] text-justify px-6  z-30 mt-6 font-khu'>
            In the bustling heart of Cabanatuan City, Nueva Ecija, Philippines, a digital oasis emerged, weaving its tale of creativity and innovation. The Penn Digitals, born on June 8, 2022, stands as a testament to the power of entrepreneurial dreams.
            The very essence of The Penn Digitals can be traced back to a name that echoes with warmth and affection—<span className="italic font-bold">Penny</span>, my beloved mother, whose nickname became the soul of this business. The word "Penn" encapsulates not just a moniker, but a legacy of love and inspiration that fuels the spirit of the business.
            As the doors of The Penn Digitals swung open for the first time, the vision was clear: <span className='italic font-bold'>to create a haven where digital dreams come to life.</span>
            </p>
           </div>
            <Image
            className='absolute  rotate-180 opacity-70  w-[100] h-auto right-12'
            src={watercolor}
            alt="watercolor-splash"
            style={{zIndex:'-1'}}
            />
            <Image
                className='relative z-30   '
                src={MoreSampleSoon}
                alt='kaye-illustrated'/> 
        </div>
        
        <div className='hidden md:flex md:max-w-screen-md lg:max-w-screen-lg flex-col mx-auto mt-10 text-center'>
          <h1 className='text-pblue font-satisfy md:text-5xl lg:text-6xl z-20 mt-6'>The <span className='text-pstone'> History</span></h1>


          <div className='flex md:gap-12 lg:gap-14 mt-5'>
            <div className='w-50% relative'>
              <div style={{zIndex:'999'}}>
              <p className='md:text-base lg:text-lg z-30 mt-6 font-khu text-left'>
                In the bustling heart of Cabanatuan City, Nueva Ecija, Philippines, a digital oasis emerged, weaving its tale of creativity and innovation. The Penn Digitals, born on June 8, 2022, stands as a testament to the power of entrepreneurial dreams.
              </p>
              <p className='md:text-base lg:text-lg z-30 mt-6 font-khu text-left'>
                The very essence of The Penn Digitals can be traced back to a name that echoes with warmth and affection <span className="italic font-bold">Penny</span>, my beloved mother, whose nickname became the soul of this business. The word "Penn" encapsulates not just a moniker, but a legacy of love and inspiration that fuels the spirit of the business.
              </p>
              <p className='md:text-base lg:text-lg z-30 mt-6 font-khu text-left'>
                As the doors of The Penn Digitals swung open for the first time, the vision was clear:<span className='italic font-bold'> to create a haven where digital dreams come to life.</span>
              </p>
              </div>
              <Image
              style={{zIndex:'-1'}}
                  className='absolute -rotate-45  opacity-35 w-[36rem] h-auto top-28 right-40'
                  src={watercolor}
                  alt="watercolor-splash"
                  />
            </div>

            <div className='w-50%'>
            <Image
                className='z-30 w-[36rem] h-auto b'
                src={MoreSampleSoon}
                alt='kaye-illustrated'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default history