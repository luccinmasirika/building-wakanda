import * as React from 'react';

interface IBannerProps {}

export const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className='container w-full flex md:mx-auto md:px-10 px-4 py-4 flex-wrap md:flex-no-wrap bg-gray-100 sticky top-0 z-0'>
      <div className='w-full md:w-7/12 h-screen flex items-center'>
        <div className='w-full flex pl-28 items-center justify-center'>
          <div className='flex w-3 h-52 bg-yellow-400'></div>
          <div className='pl-6'>
            <h1 className='md:text-8xl text-5xl font-bold '>Building</h1>
            <h1 className='md:text-9xl text-6xl font-bold'>WAKANDA</h1>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:w-5/12 md:h-screen'></div>
    </div>
  );
};
