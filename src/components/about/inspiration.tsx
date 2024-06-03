import React from 'react'
import Image from 'next/image'
import watercolor from '@/assets/images/splash.png'
import mamkai2 from '@/assets/images/mam_kai_2.jpg'

const inspiration = () => {
  return (
    <div className='max-w-screen-xl mx-auto mb-16 '>
      <div className="flex flex-col text-center py-5">
        <div className='flex flex-col md:hidden relative'>
            <Image
            className='absolute z-10 rotate-90 opacity-80 w-[100] h-auto left-8'
            src={watercolor}
            alt="watercolor-splash"
            />
            <h1 className='text-pstone font-satisfy text-5xl z-20 mt-6'>The <span className='text-pblue'>Inspiration</span></h1>

            <div className='flex mt-5 flex-col w-full sm:w-[22rem] mx-auto'>
                <Image
                className='relative z-30 w-96 h-auto'
                src={mamkai2}
                alt='mam-kaye-with-her-bestfriend'/>

                <p className='text-[16px] text-justify px-4 z-30 mt-6 font-khu'>
                The driving force behind my business is undeniably my best friend. Her constant encouragement to pursue my true aspirations, coupled with her expertise as a Branding, Web, and Funnel Designer, has been a guiding light in my entrepreneurial journey. She imparts valuable knowledge about the intricacies of the business, providing insights that have proven invaluable. My go-to person for all things design and printing, she has played a pivotal role in shaping the success of my endeavors. To my best friend, I extend my heartfelt gratitude—<span className="italic font-bold">thank you for everything; I wouldn't be here without you.</span>
                </p> 
            </div>
        </div>

        <div className='hidden md:flex md:max-w-screen-md lg:max-w-screen-lg flex-col mx-auto mt-10'>
              <h1 className='text-pstone font-satisfy md:text-5xl lg:text-6xl z-20 mt-6'>The <span className='text-pblue'>Inspiration</span></h1>
              
              <div className='flex md:gap-12 lg:gap-14 mt-5'>
                <div className='w-50% relative'>
                  <Image
                  className='w-[32rem] z-50 h-auto'
                  src={mamkai2}
                  alt='mam-kaye-with-her-bestfriend'/>
                  
                </div>

                <div className='w-50% text-justify relative'>
                <p className='md:text-lg lg:text-xl z-30 mt-6 font-khu'  style={{zIndex:'9999'}}>
                The driving force behind my business is undeniably my best friend. Her constant encouragement to pursue my true aspirations, coupled with her expertise as a Branding, Web, and Funnel Designer, has been a guiding light in my entrepreneurial journey. She imparts valuable knowledge about the intricacies of the business, providing insights that have proven invaluable. My go-to person for all things design and printing, she has played a pivotal role in shaping the success of my endeavors. To my best friend, I extend my heartfelt gratitude— <span className='italic font-bold'>thank you for everything; I wouldn't be here without you.</span>
                </p> 
                <Image
                  style={{zIndex:'-1'}}
                  className='absolute z-0 -rotate-45 opacity-35 w-[36rem] h-auto top-28 left-36'
                  src={watercolor}
                  alt="watercolor-splash"
                  />
                </div>

              </div>
        </div>
      </div>
    </div>
  )
}

export default inspiration
