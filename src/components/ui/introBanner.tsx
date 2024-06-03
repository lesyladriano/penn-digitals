import React from 'react';

function introBanner() {
  return (
    <div className='bg-pshell flex flex-col items-center py-20 md:py-28 my-10 tracking-widest font-khu'>
      <div className='w-90% sm:w-80% md:w-70% xl:w-50% text-center'>
        <div className='text-pblue pb-5 md:pb-5 tracking-wider text-xl md:text-3xl font-medium'>
          ARTFUL, <span className='text-pstone'>LUXURIOUS</span>, & MEANINGFUL
        </div>
        <div className="flex justify-center items-center my-6">
        <div className="w-40 border-t border-dashed border-gray-500"></div>
    </div>
        <div className="text-sm leading-2 md:leading-8 md:text-base">
          Forget the cookie-cutter, dime-a-dozen details. I want to help you create invitations that feel like they could only be yours,
          with details that will wow your loved ones and will always remind you of what a beautiful time in your life.
        </div>
      </div>
    </div>
  );
}

export default introBanner;
