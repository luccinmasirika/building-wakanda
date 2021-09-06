import * as React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { API } from '../../config';

import { ICardBody } from './OurLeaders';
interface ICardUnProps {
  data: ICardBody;
}

export const CardUn: React.FC<ICardUnProps> = (props) => {
  return (
    <div className='w-full m-4 rounded overflow-hidden shadow-lg'>
      <img
        className='object-cover h-60 w-full'
        src={`${API}/${props.data.image}`}
        alt='Mountain'
      />
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{props.data.name}</h2>
        <span
          className='text-gray-700'
          dangerouslySetInnerHTML={{ __html: props.data.content }}
        />
      </div>
      <div className='px-4 pt-4 pb-6 flex'>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <a href={props.data.twitter} target='_blank' rel='noreferrer'>
            <FaTwitter />
          </a>
        </div>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <a href={props.data.linkedin} target='_blank' rel='noreferrer'>
            <FaLinkedinIn />
          </a>
        </div>
        <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
          <a href={props.data.facebook} target='_blank' rel='noreferrer'>
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};
