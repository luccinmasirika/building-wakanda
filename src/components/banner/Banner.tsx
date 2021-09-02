import * as React from 'react';
import Bg from '../../assets/img/bg/bg.jpg';
import Logo from '../../assets/img/logo.png';

interface IBannerProps {
  state: boolean;
  title?: string;
}

export const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className='w-full sticky mx-auto top-0 z-0 pt-16 md:pt-20 bg-white'>
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className='Banner w-full mx-auto'
      >
        <div className='w-full bg-gray-900 bg-opacity-60 flex flex-col items-center mx-auto'>
          {props.state && (
            <img
              src={Logo}
              alt='Logo building wakanda'
              className='md:w-5/12 pt-32 pb-24 px-8'
            />
          )}
          {!props.state && (
            <div className='md:w-5/12 pt-32 flex items-center justify-center pb-24 px-8'>
              <span className='text-white text-5xl'>{props.title}</span>
            </div>
          )}
          {/* <BiMouse
            color='#ffa41b'
            size='32'
            className='animate-bounce absolute bottom-32 md:bottom-24'
          /> */}
        </div>
      </div>
    </div>
  );
};
