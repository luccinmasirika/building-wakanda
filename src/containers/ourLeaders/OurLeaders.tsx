import * as React from 'react';
import Image1 from '../../assets/img/leaders/leader1.jpg';
import Image2 from '../../assets/img/leaders/leader2.jpg';
import Image3 from '../../assets/img/leaders/leader3.jpg';

interface IOurLeaderProps {}

export const OurLeaders: React.FunctionComponent<IOurLeaderProps> = (props) => {
  return (
    <div className='container mx-auto py-20 z-10 relative mb-60 bg-white'>
      <h1 className='text-5xl'>Peoples</h1>

      <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img
          className='block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0'
          src={Image2}
          alt="Woman's Face"
        />
        <div className='text-center space-y-2 sm:text-left'>
          <div className='space-y-0.5'>
            <p className='text-lg text-black font-semibold'>Erin Lindford</p>
            <p className='text-gray-500 font-medium'>Product Engineer</p>
          </div>
          <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
