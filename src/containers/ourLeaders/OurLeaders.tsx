import * as React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Image2 from '../../assets/img/leaders/leader2.jpg';
import { Banner } from './../../components/banner';
import { CardUn } from './CardUn';

interface IOurLeaderProps {}

export const OurLeaders: React.FC<IOurLeaderProps> = (props) => {
  return (
    <>
      <Banner state={false} title='Our Leaders' />
      <div className='w-ful relative z-10 bg-white py-10 md:px-16'>
        <h1>People</h1>
        <div className='container flex p-4 flex-wrap justify-center'>
          {Array(4)
            .fill(null)
            .map((x, y) => (
              <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                <CardUn />
              </div>
            ))}
        </div>

        <h1>Organisation</h1>
        <div className='container flex p-4 flex-wrap justify-center'>
          {Array(5)
            .fill(null)
            .map((x, y) => (
              <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                <CardUn />
              </div>
            ))}
        </div>

        <h1>People we love</h1>
        <div className='container flex p-4 flex-wrap justify-center'>
          {Array(3)
            .fill(null)
            .map((x, y) => (
              <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                <CardUn />
              </div>
            ))}
        </div>

        <h1>TEAM</h1>
        <div className='container flex p-4 flex-wrap justify-center'>
          {Array(3)
            .fill(null)
            .map((x, y) => (
              <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                <CardUn />
              </div>
            ))}
        </div>

        <h1>Anonyme</h1>
        <div className='container flex p-4 flex-wrap justify-center'>
          {Array(3)
            .fill(null)
            .map((x, y) => (
              <div className='flex items-center m-8'>
                <FaUserCircle size={96} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
