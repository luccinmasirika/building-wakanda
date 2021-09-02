import * as React from 'react';
import { Banner } from './../../components/banner';

interface IProjectPageProps {}

export const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  return (
    <>
      <Banner state={false} title='Our projects' />
    </>
  );
};
