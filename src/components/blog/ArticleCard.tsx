import * as React from 'react';
import { API } from '../../config';

export interface IData {
  _id: string;
  title: string;
  image: string;
  content: string;
}

interface IArticleCardProps {
  data: IData;
}

export const ArticleCard: React.FC<IArticleCardProps> = (props) => {
  return (
    <div className='container w-full mt-6 flex flex-col bg-white shadow-2xl '>
      <div className='bg-gray-900 relative m-2'>
        <img
          src={`${API}/${props.data.image}`}
          alt='img'
          className='object-cover h-96  w-full hover:opacity-60'
        />
        <div className='flex items-center  justify-center px-5 py-4 bg-gray-900 bg-opacity-60 absolute bottom-0 w-full text-white'>
          <h3 className='truncate'>{props.data.title}</h3>
        </div>
      </div>
    </div>
  );
};


