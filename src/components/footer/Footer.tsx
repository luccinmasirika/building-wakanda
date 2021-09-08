import * as React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { onGetData } from './../../api/index';

interface IFooterProps {}
interface IData {
  facebook: string;
  twitter: string;
  linkedin: string;
}

export const Footer: React.FC<IFooterProps> = (props) => {
  const [data, setData] = React.useState<IData>({
    facebook: '',
    twitter: '',
    linkedin: '',
  });

  const onLoadData = async () => {
    const data: IData = await onGetData('/get/settings');
    if (data) {
      setData({
        ...data,
        facebook: data && data.facebook,
        twitter: data && data.twitter,
        linkedin: data && data.linkedin,
      });
    }
  };

  React.useEffect(() => {
    onLoadData();
  }, []);
  return (
    <div className='w-full flex items-center justify-center h-56 p-4 md:h-24 bg-gray-800 relative z-10'>
      <div className='container flex flex-wrap-reverse md:flex-nowrap items-center justify-center md:justify-between md:px-32 mx-auto'>
        <p className='text-center text-gray-200 p-4'>
          © Building Wakanda and Designed By{' '}
          <a
            href='https://www.uptodatedevelopers.com'
            target='_blank'
            rel='noreferrer'
            className='text-yellow-400 underline'
          >
            Uptodate Developers
          </a>
          , All rights reserved.
        </p>
        <div className='flex items-center p-4'>
          <a href={data.twitter} target='_blank' rel='noreferrer'>
            <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
              <FaTwitter />
            </div>
          </a>
          <a href={data.linkedin} target='_blank' rel='noreferrer'>
            <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
              <FaLinkedinIn />
            </div>
          </a>
          <a href={data.facebook} target='_blank' rel='noreferrer'>
            <div className='flex rounded-full cursor-pointer items-center justify-center w-8 h-8 mx-3 bg-gray-300'>
              <FaFacebookF />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
