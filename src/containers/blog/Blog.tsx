import * as React from 'react';
import { Latest } from './../../components/blog/Latest';

interface IBlogProps {}

export const Blog: React.FC<IBlogProps> = (props) => {
  return (
    <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto bg-white relative z-10 py-20  mx-auto'>
      <h2 className='text-4xl mx-2 mt-12'>Recommended</h2>
      <div className='w-full flex mb-8 flex-wrap md:flex-nowrap'>
        <div className='w-full h-80 md:w-2/4 mx-2'>
          <Latest />
        </div>
        <div className='w-full h-80 md:w-2/4 mx-2'>
          <Latest />
        </div>
      </div>
      <div className='w-full flex flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-9/12 mx-2'>
          <h2 className='text-4xl mx-2 mt-12'>Recents posts</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {Array(4)
              .fill(null)
              .map((x, y) => (
                <div className='w-full h-72'>
                  <Latest key={y} />
                </div>
              ))}
          </div>
        </div>
        <div className='w-full  md:w-3/12 ml-2'>
          <h2 className='text-4xl mx-2 mt-12'>Most popular</h2>
          <div className='grid grid-cols-1 gap-3'>
            {Array(3)
              .fill(null)
              .map((x, y) => (
                <div className='w-full h-52'>
                  <Latest key={y} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
