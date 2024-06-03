'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Image, { StaticImageData } from 'next/image';
import { Collapse } from 'react-collapse';
import Link from 'next/link';
interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  description: string;
  image: StaticImageData;
  souvcolor:string;
  id:number;
  link:string;
}

function accordionItem({ open, toggle, title, description, image, souvcolor,id ,link}: AccordionItemProps) {

  return (
    <div className='flex-col border-[1px] border-black '>
      <div className={`bg-souv${id} w-full flex items-center py-2 px-4`} onClick={toggle}>
        <div className='w-full flex items-center'>
          <span className='flex-grow text-center text-poppins text-base tracking-wider font-medium smd:text-base '>
            {title}
          </span>
          <span className='ml-auto'>
            {open ? <GoArrowUp/> : <GoArrowDown/>}
          </span>
        </div>
      </div>



      <Collapse isOpened={open}>
        <div className='flex-col h-full py-4' style={{ transition: 'transform 0.3s ease-in-out' }}>
          <div className='w-full h-full px-8 '>
            <Image src={image} className=' h-[15rem] smd:h-[18rem] w-full object-cover' alt={title}/>
          </div>
          <div className='w-full'>
            <div className='text-lg font-khu pl-8 py-5 smd:text-lg'>
              {title}
            </div>
            <div className='text-sm text-justify tracking-wider font-poppins px-8 pb-5 smd:text-md'>
              {description}
            </div>
            <div className='font-poppins  px-8 flex items-center   text-[15px] py-2'>
                <Link href={link} className='flex items-center hover:text-[#BC7F6C] transition-all ease-in-out duration-300 delay-75'>
                  READ MORE <span className='ml-2'><FaArrowRight /></span>
                </Link>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default accordionItem;
