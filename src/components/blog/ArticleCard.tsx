import * as React from 'react';
import { API } from '../../config';
import { FaClock, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// dayjs format
dayjs().format();
dayjs.extend(relativeTime);

export interface IData {
  _id: string;
  title: string;
  image: string;
  content: string;
  visites: number;
  createdAt: Date;
}

interface IArticleCardProps {
  data: IData;
}

export const ArticleCard: React.FC<IArticleCardProps> = (props) => {
  return (
    <Link to={`/blog/${props.data._id}`}>
      <div className='w-full cursor-pointer shadow-lg rounded-lg'>
        <div className='flex relative'>
          <div className='bg-gray-900 w-full h-72 relative'>
            <img
              src={`${API}/${props.data.image}`}
              alt='img'
              className='object-cover h-full w-full hover:opacity-60 rounded-lg'
            />
          </div>
          <div className='absolute bg-gradient-to-t from-gray-900 w-full bottom-0 pt-36 pb-5 px-4 rounded-lg'>
            <div className='flex px-2 items-center justify-between'>
              <div className='flex items-center'>
                <FaClock className='text-white animate-pulse' />
                <span className='text-white  mx-2'>
                  {dayjs(props.data.createdAt).fromNow()}
                </span>
              </div>
              <div className='flex items-center justify-center'>
                <FaEye className='text-white mx-2  animate-pulse' />
                <span className='text-white'>{props.data.visites}</span>
              </div>
            </div>
            <div className='flex px-2'>
              <h3 className='text-xl font-bold text-white hover:text-yellow-400'>
                {props.data.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
