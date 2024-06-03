"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { servicesNavList } from "@/constant/servicesNavList";
import { GoChevronDown } from "react-icons/go";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");
  const handleLinkClick = (id:any) => {
    setActiveMenu("");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getAngleIconStyle = () => {
    return {
      transform: `rotate(${activeMenu==='services' ? '180deg' : '0deg'})`,
      transition: 'transform 0.3s ease',
      fontSize: '25px', // Adjust the font size as needed
    };
  };

  return (
    <nav className="shadow-lg bg-white uppercase font-[poppins] md:flex hidden h-[5rem] tracking-wider justify-center">
      <div className="items-center space-x-24 md:flex hidden">
        <Link href="/">
          <span
            className={`hoverline nav-link border-b-2 border-pblue${
              activeMenu === "home" ? "hoverline active" : ""
            }`}
            onMouseEnter={() => setActiveMenu("home")}
            onMouseLeave={() => setActiveMenu("")}
          >
            Home
          </span>
        </Link>

        <Link href="/about">
          <span
            className={`nav-link hoverline ${
              activeMenu === "about" ? "active" : ""
            }`}
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu("")}
          >
            About
          </span>
        </Link>

        <div
          className="group relative h-full flex items-center group cursor-pointer"
          onMouseEnter={() => setActiveMenu("services")}
          onMouseLeave={() => setActiveMenu("")}
        >
          <Link href="/services" className="flex">
            <span className={` flex items-center nav-link hoverline ${
                activeMenu === "services" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveMenu("services")}>
              SERVICES  <GoChevronDown style={getAngleIconStyle()} />
            </span>
          </Link>
          <div
            className={` transition-all duration-300 ease-in-out ${
              activeMenu === "services"
                ? "opacity-100 translate-y-0 z-[9999]"
                : "opacity-0 translate-y-[-5rem]  z-[-1]"
            } bg-[#BC7F6C] text-white absolute mt-[15rem] p-7 font-normal shadow-lg space-y-2 rounded-sm text-md`}
          >
 {servicesNavList.map((service) => (
            <div
              key={service.name}
              className="hover:text-pblue transition-all duration-300 ease-in-out"
            >
              <Link href={service.link}>
                <div onClick={() => handleLinkClick(service.id)}>
                  {service.name}
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>

        <Link href="/contact">
          <span
            className={`nav-link hoverline ${
              activeMenu === "contact" ? "active" : ""
            }`}
            onMouseEnter={() => setActiveMenu("contact")}
            onMouseLeave={() => setActiveMenu("")}
          >
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
