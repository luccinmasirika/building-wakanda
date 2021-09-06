import * as React from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import { onGetData } from './../../api/index';
import { API } from '../../config';

interface IGalleyProps {}

export const Galley: React.FC<IGalleyProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [gallery, setGallery] = React.useState({
    images: [],
    links: [],
  });

  const photos = gallery.images.map((x) => `${API}/${x}`);

  const loadData = async () => {
    const data = await onGetData(`/get/all/gallery`);
    setGallery({
      ...gallery,
      images: data.images,
      links: data.links,
    });
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='container mx-auto pt-20 z-10 relative  bg-white'>
      <ReactBnbGallery
        show={isOpen}
        photos={photos}
        activePhotoIndex={active}
        onClose={() => setIsOpen(false)}
      />
      <div className='flex w-full md:p-12 p-4 md:justify-center px-4 overflow-auto'>
        {/* <div className='rounded-full py-3 flex justify-center items-center px-8 mx-3 cursor-pointer bg-gray-700 font-bold text-white active:bg-gray-500'>
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
        </div> */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-44 px-3'>
        {gallery && gallery.images.length > 1
          ? gallery.images.map((x, y) => (
              <div
                className='bg-gray-200 w-full h-48 rounded-md cursor-pointer'
                onClick={() => {
                  setIsOpen(true);
                  setActive(y);
                }}
              >
                <img
                  key={y}
                  src={`${API}/${x}`}
                  alt='Building Wakanda Gallery'
                  className='rounded-md object-cover h-full w-full'
                />
              </div>
            ))
          : Array(12)
              .fill(null)
              .map((x, y) => (
                <div className='bg-gray-200 w-full h-48 rounded-md animate-pulse' />
              ))}
      </div>
      <div className='flex w-full md:p-12 p-4 md:justify-center px-4 '>
        <div
          onClick={() => setIsOpen(true)}
          className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
        >
          Show all
        </div>
      </div>
      <div className='w-full bg-gray-100 h-40 transform -skew-y-2 translate-y-28 z-0'></div>
      <div className='w-full bg-gray-100 py-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-44 px-3 z-1'>
          {gallery && gallery.links.length > 1
            ? gallery.links.map((x, y) => (
                <iframe
                  width='100%'
                  key={y}
                  className='rounded-md bg-gray-300 w-full z-10 h-60'
                  title='video'
                  src={x}
                  frameBorder={0}
                  allowFullScreen
                />
              ))
            : Array(12)
                .fill(null)
                .map((x, y) => (
                  <div className='bg-gray-300 w-full h-60 rounded-md animate-pulse' />
                ))}
        </div>
      </div>
    </div>
  );
};
