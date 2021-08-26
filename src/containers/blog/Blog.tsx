import * as React from 'react';
import { Latest } from './../../components/blog/Latest';

interface IBlogProps {}

export const Blog: React.FC<IBlogProps> = (props) => {
  return (
    <div className='flex container w-full px-32 h-auto bg-white flex-wrap md:flex-nowrap relative z-10 py-20  mx-auto'></div>
  );
};
