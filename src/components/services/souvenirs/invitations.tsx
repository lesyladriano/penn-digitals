import React from "react";
import Image from "next/image";
import { inv1 } from "@/assets";

function Invitations() {
  return (
    <div className="bg-pshell w-full px-4 lg:pb-10 sm:px-6 sm:pt-10  lg:px-8">
      <h2 className="text-4xl lg:text-6xl text-pblue font-satisfy text-center pb-5 pt-5 md:pt-0 md:pb-10">
        Invitations
      </h2>

      <div className="w-full gap-10 flex-wrap flex justify-center items-center pt-1 pb-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full pb-4 sm:w-[16rem] p-2 md:h-[28rem] bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="p-2">
              <h2 className="text-poffstone font-poppins font-medium text-lg mb-2 text-center sm:tracking-widest ">
                Package {index + 1}
              </h2>
              <Image src={inv1} alt="" className="w-full object-cover" />
            </div>
            <div className="p-2">
              <h2 className="text-black font-poppins font-medium text-sm mb-2 text-center sm:tracking-widest sm:p-2">
                {index === 0
                  ? "1 page with envelope and sticker"
                  : index === 1
                  ? "1-3 pages with envelope and sticker"
                  : "1-3 pages with envelope, sticker, paper dollies and ribbon/yarn"}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invitations;
