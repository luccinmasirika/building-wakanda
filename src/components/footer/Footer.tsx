import * as React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className='w-full flex items-center justify-center md:h-24 bg-gray-800 relative z-10'>
      <div className='container flex flex-wrap-reverse md:flex-nowrap items-center justify-center md:justify-between md:px-32 mx-auto'>
        <p className='text-center text-gray-200 p-4'>
          © Building Wakanda and Designed By{' '}
          <a
            href='https://www.uptodatedevelopers.com'
            target='_blank'
            rel='noreferrer'
            className='text-yellow-400 underline'
          >
            Uptodate Deelopers
          </a>
          , All rights reserved
        </p>
        <div className='flex items-center p-4'>
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
    </div>
  );
};
