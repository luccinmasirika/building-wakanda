import * as React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

interface IFooterProps {}

export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='footer w-full h-60 bg-gray-700 px-16 py-12 fixed bottom-0 inset-x-0 z-0'>
      <div className='p-4 mx-auto flex items-center justify-center'>
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

      <p className='p-4 mx-auto text-center text-gray-200'>
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
    </div>
  );
};
