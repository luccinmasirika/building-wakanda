import * as React from 'react';
import { Banner } from '../../components/banner';
import { useLocation, Link } from 'react-router-dom';
import { onGetData } from '../../api';
import { API } from '../../config';
import { FaEye, FaClock } from 'react-icons/fa';
import dayjs from 'dayjs';
// dayjs format
dayjs().format();

interface IBlogPageProps {}

export const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const [data, setData] = React.useState<any>({});

  const location = useLocation();

  const onLoadData = async () => {
    const _id = location.pathname.split('/blog/')[1];
    const data = await onGetData(`/get/blog/?_id=${_id}&client=${true}`);
    if (data && !data.error) {
      setData(data);
    }
  };

  React.useEffect(() => {
    onLoadData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Banner state={false} title='Blog' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:py-12 md:mx-auto md:px-32 py-4'>
          {data.title ? (
            <h1>{data.title}</h1>
          ) : (
            <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
          )}
          {data.image ? (
            <div className='w-full bg-gray-300' style={{ minHeight: 700 }}>
              <img
                src={`${API}/${data.image}`}
                alt='Ima'
                className='w-full mt-10'
              />
            </div>
          ) : (
            <div className='w-full mt-10 h-96 bg-gray-300 animate-pulse'></div>
          )}
          <div className='w-full flex justify-between bg-gradient-to-b from-gray-100 py-4 mb-5'>
            <span className='mx-2 text-gray-400 flex items-center text-sm'>
              <FaEye className='text-gray-400 mx-2' /> {data.visites} times
            </span>
            <span className='mx-2 text-gray-400 hidden md:flex'>-</span>
            <div className='mx-2 text-gray-400 flex items-center text-sm'>
              <FaClock className='text-gray-400  mx-2' />
              {dayjs(data.createdAt).format('dddd, YYYY MMM DD')}
            </div>
          </div>

          {data.content ? (
            <span
              className='md:px-28'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          ) : (
            <div className=''>
              <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
              <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
              <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
              <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
            </div>
          )}
          <div className='w-full flex items-center justify-center px-4 py-8'>
            <Link
              to='/blog'
              title='Join Us'
              className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
