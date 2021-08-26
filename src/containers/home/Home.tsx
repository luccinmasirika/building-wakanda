import * as React from 'react';
import { Banner } from '../../components/banner';
import { Personne } from '../../components/persones';
import { Vison } from '../../components/vision';
import { Description } from './../../components/decription';
import { Mission } from './../../components/mission';
import { Objectif } from './../../components/objectif';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <main className='z-10 relative  bg-gray-100'>
      <Banner />
      <Description />
      <Personne />
      <Vison />
      <Mission />
      <Objectif />
    </main>
  );
};
