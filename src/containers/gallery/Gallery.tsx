import * as React from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import Img1 from '../../assets/img/galley/bg-01.jpg';
import Img2 from '../../assets/img/galley/bg-02.jpg';
import Img3 from '../../assets/img/galley/bg-03.jpg';
import Img4 from '../../assets/img/galley/bg-04.jpg';
import Img5 from '../../assets/img/galley/bg-05.jpg';
import Img6 from '../../assets/img/galley/bg-06.jpg';
import Img7 from '../../assets/img/galley/bg-07.jpg';
import Img8 from '../../assets/img/galley/bg-08.jpg';
import Img9 from '../../assets/img/galley/bg-09.jpg';
import Img10 from '../../assets/img/galley/bg-10.jpg';
import Img11 from '../../assets/img/galley/bg-11.jpg';

interface IGalleyProps {}

const PHOTOS = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img5,
];

export const Galley: React.FC<IGalleyProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='container mx-auto pt-20 z-10 relative  bg-white'>
      <ReactBnbGallery
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
      />
      <div className='flex w-full md:p-12 p-4 md:justify-center px-4 overflow-auto'>
        <div className='rounded-full py-3 flex justify-center items-center px-8 mx-3 cursor-pointer bg-gray-700 font-bold text-white active:bg-gray-500'>
          X Photos
        </div>
        <div className='rounded-full py-3 flex justify-center items-center px-8 mx-3 cursor-pointer bg-gray-200 hover:bg-yellow-300 active:bg-gray-500'>
          Y Photos
        </div>
        <div className='rounded-full py-3 flex justify-center items-center px-8 mx-3 cursor-pointer bg-gray-200 hover:bg-yellow-300 active:bg-gray-500'>
          Z Photos
        </div>
        <div className='rounded-full py-3 flex justify-center items-center px-8 mx-3 cursor-pointer bg-gray-200 hover:bg-yellow-300 active:bg-gray-500'>
          Others
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer bg-yellow-300 hover:bg-yellow-300 active:bg-gray-500'
        >
          All
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-44 px-3'>
        {PHOTOS.map((x, y) => (
          <>
            {0 ? (
              <div className='bg-gray-200 w-full h-48 rounded-md'>
                <img
                  key={y}
                  src={x}
                  alt='img'
                  className='rounded-md object-cover h-full w-full'
                />
              </div>
            ) : (
              <div className='bg-gray-200 w-full h-48 rounded-md animate-pulse' />
            )}
          </>
        ))}
      </div>
      <div className='w-full bg-gray-100 h-40 transform -skew-y-2 translate-y-28 z-0'></div>
      <div className='w-full bg-gray-100 py-24'>
        {/* <div className='w-full bg-gray-100 flex justify-center relative transform -translate-y-16 pb-10 z-20'>
          <h1 className='text-6xl'>Video galley</h1>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-44 px-3 z-1'>
          {Array(12)
            .fill(null)
            .map((x, y) => (
              <>
                {0 ? (
                  <iframe
                    width='100%'
                    key={y}
                    className='rounded-md bg-gray-300 w-full z-10 h-60'
                    title='video'
                    src='https://www.youtube.com/embed/iFItARqIAjY'
                    frameBorder={0}
                    allowFullScreen
                  />
                ) : (
                  <div className='bg-gray-300 w-full h-60 rounded-md animate-pulse' />
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
