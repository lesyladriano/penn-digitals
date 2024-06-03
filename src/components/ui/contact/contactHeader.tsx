'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { menu_icon, tpd_logo } from '@/assets';
import { navList } from '@/constant/navList';
import Link from 'next/link';
import { servicesNavList } from '@/constant/servicesNavList';
import { FaAngleDown, FaAngleUp, FaChevronDown } from 'react-icons/fa6';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { useRouter } from 'next/router';

function ContactHeader() {
  const [activeMenu, setActiveMenu] = useState('');
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAngleUp, setAngleUp] = useState(false);
  const parent = useRef<HTMLDivElement>(null);

  const updateScrollClass = () => {
    const isMediumScreen = window.innerWidth <= 768; // Adjust the threshold as needed
    if (!isMenuOpen || !isMediumScreen) {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateScrollClass);

    return () => {
      window.removeEventListener('resize', updateScrollClass);
    };
  }, [isMenuOpen]); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    // Toggle body overflow class
    if (!isMenuOpen) {
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

  const [isPage , setIsPage]=useState('');

  useEffect(() => {
    // Get the current pathname from the window location
    const currentPathname = window.location.pathname;

    // Check if the pathname includes 'about', 'services', or 'contact'
    if (currentPathname.includes('about')) {
      setIsPage('ABOUT');
    } else if (currentPathname.includes('services')) {
      setIsPage('SERVICES');
    } else if (currentPathname.includes('contact')) {
      setIsPage('CONTACT');
    }
  }, []); 


  return (
    <div>
      <div className={`py-5 px-5 md:px-[5rem]  relative lg:px-[7rem] w-full shadow-lg bg-pshell `}style={{zIndex:'9999'}}>
        <div className='w-full justify-between flex-col md:flex'>
          <div className='flex items-center'>
            
            <div className='flex justify-center w-full md:w-[auto] lg:absolute'>
              <Link href="/" className='flex justify-center'>
                <Image src={tpd_logo} className=" w-full min-w-[50px] max-w-[100px]  2xl:max-w-[150px]" alt="logo" />
              </Link>
            </div>

            <div className='hidden md:flex w-full h-full justify-center '>
              <div className='justify-between text-base space-x-10 tracking-widest lg:space-x-20 pl-10 font-poppins  text-black flex'>
                {navList.map((nav) => (
                  <div
                    key={nav.name}
                    className={`flex items-center md:h-[5rem] ${nav.name === 'SERVICES' ? 'group ' : ''}`}
                    onMouseEnter={() => nav.name === 'SERVICES' && setActiveMenu('services')}
                    onMouseLeave={() => nav.name === 'SERVICES' && setActiveMenu('')}>
                    <div className={`hoverline flex nav-link  items-center ${nav.name === isPage && 'border-b-2 border-pblue'}`} >
                      <Link href={nav.link}>{nav.name}</Link>
                      <div className={`h-full flex items-center mx-1 pb-1 ${nav.name === 'SERVICES' ? '' : 'hidden'}`}>
                      <GoChevronDown style={getAngleIconStyle()} />
                      </div>
                    </div>
                    {nav.name === 'SERVICES' ?(
                      <div
                        className={`block transition-all duration-300 ease-in-out ${
                          activeMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-5rem]  '
                        } bg-[#BC7F6C] text-white absolute mt-[15rem] p-7 font-normal shadow-lg space-y-2 rounded-sm text-md`} 
                        style={{ zIndex: activeMenu ? '99999' : '-9999' }}>
                        {servicesNavList.map((service) => (
                          <div key={service.name} className='hover:text-pblue transition-all duration-300 ease-in-out'>
                            <Link href={service.link}>{service.name}</Link>
                          </div>
                        ))}
                      </div>
                    ):(
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='absolute right-[7%] justify-end flex items-center md:hidden hover:cursor-pointer' onClick={toggleMenu}>
                {isMenuOpen ? (
                <RxCross2 className="w-6 h-6" />
              ) : (
                <Image src={menu_icon} className="w-6 h-6 " alt="menu-icon hover-gray" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition in={isMenuOpen} timeout={300} unmountOnExit >
        {(state) => (
          <div className={`md:hidden fixed  top-0 bg-[#BC7F6C] font-[Poppins] text-pstone w-full h-full transition-transform duration-300 ${state === 'entered' ? 'translate-x-0' : '-translate-x-full'}`}  style={{zIndex:'999'}}>
            <div className="absolute top-[20rem] left-1/2  transform -translate-x-1/2 -translate-y-1/2">
              <ul className="text-center font-[Poppins] tracking-wider text-white">
                <li className="mb-4 text-xl font-normal"   >
                  <Link href="/">
                    <span className={`nav-link hoverline active ${activeMenu === 'home' ? 'hoverline active' : ''}`} onMouseEnter={() => setActiveMenu('home')} onMouseLeave={() => setActiveMenu('')}  onClick={toggleMenu}>
                      HOME
                    </span>
                  </Link>
                </li>
                <li className="mb-4 text-xl font-normal" onClick={toggleMenu}>
                  <Link href="/about">
                    <span className={`nav-link hoverline active ${activeMenu === 'home' ? 'hoverline active' : ''}`} onMouseEnter={() => setActiveMenu('about')} onMouseLeave={() => setActiveMenu('')}>
                      ABOUT
                    </span>
                  </Link>
                </li>

                {/* SERVICES menu item */}
                <li className="mb-4 text-xl font-normal  " onClick={toggleServiceMenu}>
                  <span className={`nav-link hoverline flex items-center hover:cursor-pointer ${isServiceMenuOpen ? 'active' : ''}`} onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu('')}>
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
                          <Link href="/services/#souvenir" >SOUVENIR</Link>
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

export default ContactHeader;
