import * as React from 'react';
import { Banner } from '../../components/banner';

interface IHomeProps {}

export const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Banner />
    </>
  );
};
