import React from 'react'
import Image from 'next/image';
import { tpd_logo } from '@/assets';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function footer() {
  return (
    <footer className=' bg-pshell py-3 md:py-10 px-[10%] flex justify-center w-full'>
    <div className="justify-between flex w-full md:flex-row flex-col">
      {/* Row 1 */}
      <div className="  hidden md:flex flex-col p-4 flex items-center justify-center font-khu">
        <p className="text-pstone">EST. 2022 | </p>
        <p className="text-pstone">All Rights Reserved</p>
      </div>

      {/* Row 2 */}
      <div className="  hidden md:flex p-4  items-center justify-center ">
      <Image src={tpd_logo} className="w-30% min-w-[80px] max-w-[150px] md:min-w-[180px] md:max-w-[200px] 2xl:max-w-[250px]" alt="logo" />
      </div>


       {/* Mobile Row  */}
       <div className=" md:hidden  p-4 flex items-center justify-center ">
      <Image src={tpd_logo} className="w-30% min-w-[80px] max-w-[150px] md:min-w-[180px] md:max-w-[200px] 2xl:max-w-[250px]" alt="logo" />
      </div>


      <div className=" md:hidden  p-4 flex items-center justify-center font-khu">
        <p className="text-pstone">EST. 2022 | </p>
        <br/> <br/>
        <p className="text-pstone">All Rights Reserved</p>
      </div>

   

      {/* Row 3 */}
      <div className=" p-4 flex items-center justify-center space-x-8 md:space-x-4 xl:space-x-8">
      <a href="https://www.facebook.com/thepenndigitals" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-pstone transition ease-in-out delay-50 
              hover:-translate-y-1 hover:scale-110   duration-300 hover:text-[#BC7F6C] text-2xl" />
        </a>
        <a href="tel:+63 976 322 3201" target="_blank" rel="noopener noreferrer">
          <FaPhone className="text-pstone transition ease-in-out delay-50 
              hover:-translate-y-1 hover:scale-110   duration-300 hover:text-[#BC7F6C] text-2xl" />
        </a>
        <a href="mailto:thepenndigitals@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-pstone transition ease-in-out delay-50 
              hover:-translate-y-1 hover:scale-110   duration-300 hover:text-[#BC7F6C]  text-2xl" />
        </a>
        <a href="https://www.google.com/maps/place/Cabanatuan+City,+Nueva+Ecija/@15.4853424,120.9459528,11.71z/data=!4m6!3m5!1s0x33972921652f4ccb:0x3ddca086bad37111!8m2!3d15.4865047!4d120.973393!16zL20vMDU2anls?entry=ttu" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt className="text-pstone transition ease-in-out delay-50 
              hover:-translate-y-1 hover:scale-110   duration-300 hover:text-[#BC7F6C] text-2xl" />
        </a>
      </div>
    </div>

   
    </footer>
   
  )
}

export default footer

