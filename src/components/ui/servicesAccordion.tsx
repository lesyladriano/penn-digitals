'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import { servicesAccordionList } from '@/constant/servicesAccordionList';
import AccordionItem from './accordionItem';
import Link from 'next/link';
function servicesAccordion() {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [descriptionWidth, setDescriptionWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateDescriptionWidth = () => {
      if (descriptionRef.current) {
        setDescriptionWidth(descriptionRef.current.scrollWidth);
      }
    };

    // Initial calculation
    calculateDescriptionWidth();

    // Add event listener for window resize
    window.addEventListener('resize', calculateDescriptionWidth);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', calculateDescriptionWidth);
    };
  }, [descriptionRef]);
  const defaultOpenIndex = 0;
  const [open, setOpen] = useState<number | null>(defaultOpenIndex);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.width = open !== null ? `${descriptionWidth}px` : '0';
    }
  }, [open, descriptionWidth]);

  const toggle = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? 0 : index));
  };
  
  
  

  return (
<div className=' flex justify-center  overflow-hidden' ref={descriptionRef}>
  {/* Dektop */}
  {servicesAccordionList.map((data, index) => (
    <div className={`max-w-7xl md:border-[1px]  md:border-black`} key={index}>
      <div className='md:flex hidden h-[25rem] 2xl:h-[30rem]'>
        {/* Title Card */}
        <div className='bg-souv1 hidden' />
        <div className='bg-souv2 hidden' />
        <div className='bg-souv3 hidden' />
        <div className='bg-souv4 hidden' />

        <div
          className={`bg-${data.souvcolor} flex justify-center  w-[3rem] p-2 font-poppins`}
          onClick={() => toggle(index)} // Corrected onClick to call toggle with index
          style={{ transition: 'transform 0.3s ease-in-out' }}>
          <div className='w-[3rem] flex-col cursor-pointer '>
            <div className='h-10% w-[3rem] flex justify-center '>
              {open === index ? <GoArrowRight /> : <GoArrowLeft />} {/* Corrected the condition */}
            </div>

            <div className='h-90% flex items-center justify-center pl-9'>
              <div className=' w-full '>
                <div className='rotate-counterclockwise  '>{data.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={` w-full`}>
          <div className='flex overflow-hidden leading-loose flex-wrap h-[25rem] 2xl:h-[30rem]'>
            <div
              style={{
                maxWidth: open === index ? `${descriptionWidth * 0.7}px` : '0',
                opacity: open === index ? '1' : '0',
                transition: 'max-width 0.3s ease-in-out, opacity 1s ease-in-out  ',
                width: '100%', // Set a default width to make it responsive
              }}
              className='flex-shrink'
              ref={containerRef}
            >

              <div className='transition-all duration-300 white h-full flex  '  >
                <div className='w-30% h-full'>
                  <div className='h-full relative'>
                    <Image
                      src={data.image}
                      alt={data.title}
                      className='h-full w-full object-cover'
                      title={data.title}
                    />
                  </div>
                </div>

                <div className='w-70% flex items-center h-full px-4  lg:px-10 '>
                  <div className='flex-col flex h-80%'>
                    <div className='w-50% '>
                      <hr className='w-full border-1 border-dashed border-black' />
                    </div>
                    <div className='font-khu text-2xl tracking-wider pt-5 lg:text-3xl 2xl:text-[2rem]'>{data.title}</div>
                    <div className='font-poppins text-sm leading-loose tracking-wider text-justify pt-6 pb-5 lg:text-md w-90% 2xl:text-lg 2xl:py-8' >{data.description}</div>
                    <div className='font-poppins flex items-center   text-md lg:text-lg'>
                      <Link className='flex items-center hover:text-[#BC7F6C] transition-all ease-in-out duration-300 delay-75' href={data.link}>  READ MORE <span className='ml-2'><FaArrowRight /></span> </Link>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}

      {/* Mobile */}

    <div className='flex-col h-full'>
    <div className='flex-col md:hidden max-w-[576px]'>
      {servicesAccordionList.map((data, index) => (
          <AccordionItem open={index===open} key={index} toggle={()=>toggle(index)} id={data.id} title={data.title} description={data.description} image={data.image} souvcolor={data.souvcolor} link={data.link}/>    
          ))}
      </div>
    </div>
</div>

  );
}

export default servicesAccordion;
