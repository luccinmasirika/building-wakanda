import * as React from 'react';
import { Banner } from './../../components/banner';
import Carousel from 'react-material-ui-carousel';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Image1 from '../../assets/img/bg/bg.jpg';
import Image2 from '../../assets/img/galley/bg-01.jpg';
interface IOurProjectsProps {}

export const OurProjects: React.FunctionComponent<IOurProjectsProps> = (
  props
) => {
  const items = [Image1, Image2];
  return (
    <>
      <Banner state={false} title='Our projects' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:p-12'>
          {Array(5)
            .fill(null)
            .map((x, y) => (
              <div className='w-full flex-wrap md:flex-nowrap flex md:h-96 my-10 shadow-lg'>
                <div className='w-full md:w-5/12 h-96 bg-gray-100 relative'>
                  <Carousel
                    className='h-full'
                    NextIcon={<ArrowRightIcon />}
                    PrevIcon={<ArrowLeftIcon />}
                  >
                    {items.map((x, i) => (
                      <img
                        src={x}
                        key={i}
                        alt='Img'
                        className='object-cover h-96 w-full'
                      />
                    ))}
                  </Carousel>
                  <div className='absolute bottom-5 right-5'>
                    <span className='bg-yellow-400 px-4  py-2 rounded-md shadow-lg'>
                      {y % 2 === 0 ? 'En cours' : 'Future'}
                    </span>
                  </div>
                </div>
                <div className='w-full md:w-7/12 pb-4 md:p-10 '>
                  <div className='md:overflow-y-auto md:max-h-72 px-2'>
                    <h2>
                      Project Title Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    Short description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde iste voluptate accusantium illum
                    eligendi? Short description Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde iste voluptate
                    accusantium illum eligendi? Short description Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Unde iste
                    voluptate accusantium illum eligendi? Short description
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde iste voluptate accusantium illum eligendi? Short
                    description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde iste voluptate accusantium illum
                    eligendi? Short description Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde iste voluptate
                    accusantium illum eligendi? Short description Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Unde iste
                    voluptate accusantium illum eligendi? Short description
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde iste voluptate accusantium illum eligendi? Short
                    description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Unde iste voluptate accusantium illum
                    eligendi? Short description Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde iste voluptate
                    accusantium illum eligendi?
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
