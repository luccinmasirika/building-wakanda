import * as React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import Image2 from '../../assets/img/bg/bg.jpg';

interface ICardUnProps {}

export const CardUn: React.FC<ICardUnProps> = (props) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='object-cover h-60 w-full' src={Image2} alt='Mountain' />
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>Mountain</h2>
        <span className='text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </span>
      </div>
      <div className='px-4 pt-4 pb-6 flex'>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <FaTwitter />
        </div>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <FaLinkedinIn />
        </div>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
};
