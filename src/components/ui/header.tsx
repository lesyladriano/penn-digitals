'use client';

import { FaAngleDown, FaTimes, FaAngleUp } from 'react-icons/fa'; 
import React, { useState,useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group'; 
import Image from 'next/image';
import { tpd_logo, menu_icon } from '@/assets';
import Link from 'next/link'; 
import { RxCross2 } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
function Header() {
  const parent = useRef<HTMLDivElement>(null);

  const [activeMenu, setActiveMenu] = useState('');
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAngleUp, setAngleUp] = useState(false);

  const updateScrollClass = () => {
    const isMediumScreen = window.innerWidth <= 768; // Adjust the threshold as needed
    if (!isMenuOpen || !isMediumScreen) {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    // Add an event listener for resizing the window
    window.addEventListener('resize', updateScrollClass);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScrollClass);
    };
  }, [isMenuOpen]); // Add isMenuOpen as a dependency

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      updateScrollClass();
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const toggleServiceMenu = () => {
    setServiceMenuOpen(!isServiceMenuOpen);

  };


 

  const calculateSubMenuPosition = (parentRef: { current?: DOMRect | null }) => {
    if (parentRef.current) {
      const rect = parentRef.current;
      return {
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      };
    }
    return {};
  };
  

  
  const getAngleIconStyle = () => {
    return {
      transform: `rotate(${activeMenu==='services' ? '180deg' : '0deg'})`,
      transition: 'transform 0.3s ease',
      fontSize: '30px', // Adjust the font size as needed
    };
  };


  return (
    <div className="">  
      {/* Logo */}
      <div className='bg-white flex items-center lg:shadow-none shadow-lg md:bg-pshell w-full py-5 md:py-10 px-5 sm:pr-10 relative'>
       
        <div className='flex justify-center pl-5 md:pl-0 w-full'>
          <Link href='/' className='w-full flex justify-center '>
          <Image src={tpd_logo} className="w-30% min-w-[100px] max-w-[150px] md:min-w-[180px] md:max-w-[200px] 2xl:max-w-[250px]" alt="logo" />
          </Link>
    
        </div>
        <div className="md:hidden absolute  right-[7%]  items-end sm:justify-end cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RxCross2 className="w-6 h-6" />
          ) : (
            <Image src={menu_icon} className="w-6 h-6 " alt="menu-icon" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition in={isMenuOpen} timeout={300} unmountOnExit>
        {(state) => (
          <div className={`md:hidden fixed bg-[#BC7F6C] font-[Poppins] text-pstone w-full h-screen transition-transform duration-300 ${state === 'entered' ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: '9999' }}>
            <div className="absolute top-60  left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: '9999' }}>
              <ul className="text-center font-[Poppins] tracking-wider text-white">
              <li className="mb-4 text-xl font-normal">
  <Link href="/">
  <span className={`nav-link hoverline active ${activeMenu === 'home' ? 'hoverline active' : ''}`} onMouseEnter={() => setActiveMenu('home')} onMouseLeave={() => setActiveMenu('')} onClick={toggleMenu}>
           HOME
          </span>
  </Link>
</li>
                <li className="mb-4 text-xl font-normal">
                <Link href="/about">
  <span className={`nav-link hoverline active ${activeMenu === 'home' ? 'hoverline active' : ''}`} onMouseEnter={() => setActiveMenu('home')} onMouseLeave={() => setActiveMenu('')} onClick={toggleMenu}>
           ABOUT
          </span>
  </Link>
                </li>
                
                
                {/* SERVICES menu item */}
                <li className="mb-4 text-xl font-normal " onClick={toggleServiceMenu}>
        <span className={`nav-link flex items-center hoverline hover:cursor-pointer ${isServiceMenuOpen ? 'active' : ''}`} onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu('')}>
          SERVICES 
        <GoChevronDown style={getAngleIconStyle()} />

        </span>

                  
                  {/* SERVICES submenu */}
                  <Transition in={isServiceMenuOpen} timeout={300} unmountOnExit>
                    {(state) => (
                      <ul
  className={`pt-2 text-sm rounded-md text-pwhite ${state === 'entered' ? 'flex flex-col' : 'dropdownOpen'}`}
  style={calculateSubMenuPosition({ current: parent.current?.getBoundingClientRect() })}
>

                        <li className="  mb-1 hover:text-pblue" onClick={toggleMenu}>
                          <Link href="/services/#souvenir">SOUVENIR</Link>
                        </li>
                        <li className=" mb-1 hover:text-pblue" onClick={toggleMenu}>
                          <Link href="/services/#invitation">INVITATION</Link>
                        </li>
                        <li className=" mb-1 hover:text-pblue" onClick={toggleMenu}>
                          <Link href="/services/#layout">LAYOUT</Link>
                        </li>
                        <li className=" mb-1 hover:text-pblue" onClick={toggleMenu}>
                          <Link href="/services/#printing">PRINTING</Link>
                        </li>
                      </ul>
                    )}
                  </Transition>
                </li>
                <li className="mb-4 text-xl font-normal">
                <Link href="/contact">
  <span className={`nav-link hoverline active ${activeMenu === 'home' ? 'hoverline active' : ''}`} onMouseEnter={() => setActiveMenu('home')} onMouseLeave={() => setActiveMenu('')} onClick={toggleMenu}>
           CONTACT
          </span>
  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Header;

