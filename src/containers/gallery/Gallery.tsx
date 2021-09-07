import * as React from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import { onGetData } from './../../api/index';
import { API } from '../../config';
import { Banner } from './../../components/banner';

interface IGalleyProps {}

export const Galley: React.FC<IGalleyProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [limitPhoto, setLimitPhoto] = React.useState(12);
  const [limitVideo, setLimitVideo] = React.useState(9);
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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Banner state={false} title='Gallery' />
      <div className='w-ful relative z-10 bg-white'>
        <ReactBnbGallery
          show={isOpen}
          photos={photos}
          activePhotoIndex={active}
          onClose={() => setIsOpen(false)}
        />
        <div className='flex w-full md:p-12 p-4 md:justify-center px-4 overflow-auto'></div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-44 px-3'>
          {gallery && gallery.images.length > 1
            ? gallery.images.map((x, y) => {
                if (y < limitPhoto) {
                  return (
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
                  );
                }
                return false;
              })
            : Array(12)
                .fill(null)
                .map((x, y) => (
                  <div
                    key={y}
                    className='bg-gray-200 w-full h-48 rounded-md animate-pulse'
                  />
                ))}
        </div>
        <div className='flex w-full md:p-12 p-4 md:justify-center px-4 '>
          <div
            onClick={() => setLimitPhoto(limitPhoto + 12)}
            className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
          >
            Load more
          </div>
        </div>
        <div className='w-full bg-gray-100 h-40 transform -skew-y-2 translate-y-28 z-0'></div>
        <div className='w-full bg-gray-100 py-24'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-44 px-3 z-1'>
            {gallery && gallery.links.length > 1
              ? gallery.links.map((x, y) => {
                  if (y < limitVideo) {
                    return (
                      <iframe
                        width='100%'
                        key={y}
                        className='rounded-md bg-gray-300 w-full z-10 h-60'
                        title='video'
                        src={x}
                        frameBorder={0}
                        allowFullScreen
                      />
                    );
                  }
                  return false;
                })
              : Array(12)
                  .fill(null)
                  .map((x, y) => (
                    <div
                      key={y}
                      className='bg-gray-300 w-full h-60 rounded-md animate-pulse'
                    />
                  ))}
          </div>
        </div>
        <div className='flex w-full md:p-12 p-4 md:justify-center px-4 bg-gray-100'>
          <div
            onClick={() => setLimitVideo(limitVideo + 6)}
            className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
          >
            Load more
          </div>
        </div>
      </div>
    </>
  );
};
