import * as React from 'react';
import { Banner } from '../../components/banner';
import { WhoWeAre } from './../../components/whoWeAre';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <main className='w-full bg-gray-100'>
      {/* <Banner state={true} /> */}
      <WhoWeAre />
    </main>
  );
};
