import React from 'react';
import Image from 'next/image';
import { souv1, souv2, souv3, souv4, souv5, souv6 } from '@/assets';

function Souvenir() {
  return (
    <div className="bg-gray">
      <div className="container mx-auto max-w-7xl px-4 md:py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl text-pstone font-satisfy text-center font-medium py-10">
          Souvenirs
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={`group flex flex-col items-center relative bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-300`}>
              <div className="w-full h-48 sm:h-64 lg:h-80 overflow-hidden">
                <Image
                  src={index === 0 ? souv1 : index === 1 ? souv2 : index === 2 ? souv3 : index === 3 ? souv4 : index === 4 ? souv5 : souv6}
                  alt={`souv${index + 1}`}
                  className="object-cover w-full h-full transition-transform transform hover:scale-110"
                />
              </div>
              {index !== 5 && (
                <div className="my-4 font-poppins text-gray-800 text-sm text-center tracking-wider font-medium">
                  {index === 0
                    ? 'Thank You Cards'
                    : index === 1
                    ? 'Souvenir Fans'
                    : index === 2
                    ? 'Loot Bags'
                    : index === 3
                    ? 'Custom Coin Purse'
                    : index === 4
                    ? 'Alcohol Spray'
                    : ''}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Souvenir;
