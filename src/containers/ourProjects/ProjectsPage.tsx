import * as React from 'react';
import { Banner } from '../../components/banner';
import { useLocation, Link } from 'react-router-dom';
import { onGetData } from '../../api';
import { API } from '../../config';

interface IProjectPageProps {}

export const ProjectsPage: React.FC<IProjectPageProps> = (props) => {
  const [data, setData] = React.useState<any>({});

  const location = useLocation();

  const onLoadData = async () => {
    const _id = location.pathname.split('/our-projects/')[1];
    const data = await onGetData(`/get/project/?_id=${_id}`);
    if (data && !data.error) {
      setData(data);
    }
  };

  React.useEffect(() => {
    onLoadData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Banner state={false} title={data.title} />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:py-12 md:mx-auto md:px-32 py-4 '>
          <img
            src={`${API}/${data.image}`}
            alt='Ima'
            className='mx-auto my-10'
          />
          <span dangerouslySetInnerHTML={{ __html: data.content }} />
          <div className='w-full flex items-center justify-center px-4 py-8'>
            <Link
              to='/our-projects'
              title='Join Us'
              className='w-32 text-white flex items-center justify-center bg-black p-4'
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
