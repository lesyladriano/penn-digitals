'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolling reaches 100 pixels
      const isScrolled = window.scrollY > 100;

      setIsVisible(isScrolled);
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: animated smooth scroll
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          className='border-2 border-white bg-souv4 text-white m-5 bottom-[10%] right-[2%] fixed p-3 cursor-pointer
          transition ease-in-out delay-50 
          hover:-translate-y-1 hover:scale-110 duration-300'
          style={{ zIndex: '9999' }}
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}
    </div>
  );
}

export default ScrollUpButton;
