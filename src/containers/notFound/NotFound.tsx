import * as React from 'react';
import Image from '../../assets/img/404.svg';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = (props) => {
  return (
    <div className='container p-10 md:py-40 flex items-center justify-center z-10 relative mb-60 bg-gray-100 mx-auto'>
      <img src={Image} className='h-96 mt-12 md:mt-50' alt='Not founded' />
    </div>
  );
};
