import React from 'react';
import { landingFooterList } from '@/constant/landingFooterList';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { FaMapLocation } from "react-icons/fa6";
import Image from 'next/image';
import { tpd_logo } from '@/assets';

const iconComponents = {
  Facebook: FaFacebook,
  Phone: FaPhone,
  Envelope: FaEnvelope,
  MapMarker: FaMapLocation,
};

type IconKey = keyof typeof iconComponents;

function LandingPageFooter() {
  return (
    <div className='w-full bg-white py-4 px-6 pt-10'>
      <div className='w-full text-pstone text-center font-khu'>
        <p className='text-md sm:text-lg  font-semibold md:text-2xl'>Like what you see so far?</p>
        <p className='text-sm sm:text-md py-1 md:pt-4 pb-8' >Reach us here and stay connected! </p>
      </div>

      <div className='flex justify-center items-center     '>
        <div className='font-khu text-pstone w-full  h-full gap-3 md:gap-x-5 md:gap-y-3 md:max-w-3xl  sm:max-w-[20rem] smd:grid-cols-2 grid smd:max-w-full '>
          {landingFooterList.map((contact) => (
              <a className=''
              key={contact.title}
              href={contact.icon === 'Envelope' ? `mailto:${contact.link}` : contact.icon === 'Phone' ? `tel:${contact.link}` : contact.link}
              target="_blank"  // This will open the link in a new tab
              rel="noopener noreferrer" 
            >
              <div  className='border-[1px] py-3 px-2  border-pstone flex  items-center   pr-2 transition ease-in-out delay-50 
              hover:-translate-y-1 hover:scale-110   duration-300 hover:bg-[#BC7F6C] hover:text-pshell hover:border-none '>
            
                <div className='w-[3rem] flex justify-center'>
                  <span className={`] ${contact.icon === 'Facebook' && 'text-4xl md:text-5xl'} ${contact.icon === 'Phone' && 'text-3xl  md:text-4xl'} ${contact.icon === 'Envelope' && 'text-3xl  md:text-4xl'} ${contact.icon === 'MapMarker' && 'text-3xl  md:text-4xl'}`}>
                    {React.createElement(iconComponents[contact.icon as IconKey])}
                  </span>
                </div> 
                <div className='flex-col h-full px-2 flex'>
                  <div className='font-semibold tracking-wider text-lg sm:text-[1.2rem] h-full'>
                    {contact.title}
                  </div>
                  <div className={`text-xs whitespace-wrap tracking-wider sm:text-sm md:text-[1rem] flex items-center h-full ${contact.title === 'Contact Number' || contact.title === 'Email Address' ? 'underline' : ''}`}>
                    {contact.info}
                  </div>
                </div>
              </div>
              </a>

          ))}
        </div>
      </div>

      <div className='flex justify-center py-6 pt-10 md:mt-20'>
        <div className='flex-col'>
          <div className='w-full flex justify-center'>
            <div className='w-20% md:w-[25%]'>
              <Image src={tpd_logo} alt="logo"/>
            </div>
          </div>

          <div className='w-full text-pblue font-khu text-sm md:text-md text-center py-4'>
            EST. 2022 | All Rights Reserved | <span className='whitespace-nowrap'>The Penn Digitals </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFooter;
