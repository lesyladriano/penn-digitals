import React from "react";
import Image from "next/image";
import { flower } from "@/assets";

function LayoutServices() {
  return (
    <div className="bg-pshell flex flex-col items-center">
      <div className="w-full px-4 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="flex-auto font-satisfy text-pstone text-center pb-5 md:pt-0 md:pb-10 text-4xl lg:text-6xl">
          Layout Services
        </h2>
      </div>

      <div className="flex-col items-center justify-center pb-10 px-[2rem] sm:px-[3rem] md:px-[10rem]">
        <div className="flex-auto font-poppins tracking-wider max-w-6xl text-black text-center text-sm md:text-base">
          As architects of visual experiences, our commitment is to create design
          layouts that not only captivate the audience but also serve as
          effective communication tools. Each layout is a testament to our
          passion for design excellence, where the intersection of artistry,
          functionality, and collaboration converges to produce layouts that
          leave a lasting impact.
        </div>
        <div className="md:grid grid-cols-1 flex-col md:grid-cols-5 md:flex mt-8">
          <div className="md:col-span-3 col-span-1 md:aspect-w-16 md:aspect-h-6 w-full md:pt-5 flex items-center justify-center">
            <Image
              src={flower}
              alt="flower"
              className="w-[10rem] md:w-full max-w-[500px]"
            />
          </div>

          <div className="p-8 md:col-span-2 col-span-1 flex-auto font-poppins text-pblue  border-dashed border-2 border-pblue font-medium text-md md:text-xl tracking-wider">
            <ul className="text-center list-inside list-none cursor-default">
              <li className="mb-2 hover:text-pstone transition duration-300">
                Logo
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Cover Photo | Banner
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Order Form
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Shop Rules
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Reminders
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Shipping Details
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Mode of Payment
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Thank You Card
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Blank Template
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Invitation
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Souvenir
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Creative Crafts
              </li>
              <li className="mb-2 hover:text-pstone transition duration-300">
                Food Posters | Posters
              </li>
              <li className="hover:text-pstone transition duration-300">
                Menu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutServices;
