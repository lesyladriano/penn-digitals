import React from 'react';
import Image from 'next/image';
import { heroimg2, hero_mobile } from '@/assets';

function Hero() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Desktop Hero Image */}
      <div className="hidden lg:flex w-full h-full inset-0">
        <Image src={heroimg2} className="w-full lg:h-full lg:flex hidden object-cover" alt="hero" />

        <div className="font-[satisfy] text-[#8B6363] lg:pt-40 pt-20 absolute inset-0 flex items-center justify-center  lg:text-[45px] md:text-[40px] text-[10px]">
          <div className="text-left">
            <div>Let you focus more on growing your </div>
            <div>business by freeing up your time</div>
            <div className="text-right lg:mt-16 md:mt-10 font-[Poppins] font-medium text-xl">@thepenndigitals</div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Image */}
      <div className="lg:hidden w-full">
        <Image src={hero_mobile} className="w-full lg:hidden object-cover" alt="mobile hero" />
        {/* Centered text */}
        <div className="font-[satisfy] text-[#8B6363] md:pr-20 pr-10  md:text-3xl sm:text-xl text-base absolute inset-0 flex items-center justify-end">
          <div className="text-right">
            <div>Let you focus more on</div>
            <div>growing your business by</div>
            <div>freeing up your time</div>
            <div className="text-right md:mt-16  mt-5 font-[Poppins] font-medium md:text-xl text-[10px]">@thepenndigitals</div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
