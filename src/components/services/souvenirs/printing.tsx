import React from "react";
import Image from "next/image";
import {
  print1,
  print2,
  print3,
  print4,
  print5,
  print6,
  print7,
  print8,
} from "@/assets";

function Printing() {
  return (
    <div className="bg-white flex-col mt-[5rem] md:mt-[10rem]">

      <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 ">
        <div className="px-4 pb-10 lg:max-w-7xl lg:px-8">
          <h2 className="flex-auto font-satisfy text-pblue text-center pb-5 pt-5 md:pt-0 md:pb-10 text-4xl lg:text-6xl">
            Printing Services
          </h2>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 px-10 lg:px-20 gap-4 lg:gap-10 ">
          {[print1, print2, print3, print4, print5, print6, print7, print8].map((image, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-transform transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-50 h-50 bg-pshell bop-3 rounded-md overflow-hidden  shadow-md">
                <Image
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`print${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        <h2 className="flex-auto font-poppins tracking-wider text-black max-w-6xl text-center  text-base pt-12 pb-10">
          The print design process is a symphony of creativity and technical precision. We carefully optimize images, ensuring that they translate seamlessly from digital screens to printed material. Attention to detail extends to resolution, color profiles, and print specifications, guaranteeing that the final output meets the highest standards of clarity and vibrancy.
        </h2>
      </div>
    </div>
  );
}

export default Printing;
