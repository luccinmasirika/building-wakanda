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
      <Banner state={false} title='Our projects' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:py-12 md:mx-auto md:px-32 py-4 '>
          {data.title ? (
            <h1>{data.title}</h1>
          ) : (
            <div className='w-full mt-10 h-8 rounded-3xl bg-gray-300 animate-pulse'></div>
          )}
          {data.image ? (
            <div className='w-full bg-gray-300' style={{ minHeight: 700 }}>
              <img
                src={`${API}/${data.image}`}
                alt='Ima'
                className='w-full mt-10'
              />
            </div>
          ) : (
            <div className='w-full mt-10 h-96 bg-gray-300 animate-pulse'></div>
          )}
          {data.content ? (
            <span
              className='md:px-28'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          ) : (
            <>
              <div className='w-full md:w-8/12 my-6 h-6 mx-auto rounded-3xl bg-gray-300 animate-pulse'></div>
              {Array(7)
                .fill(null)
                .map((x, y) => (
                  <div
                    key={y}
                    className='w-full my-2 h-4 rounded-3xl bg-gray-300 animate-pulse'
                  ></div>
                ))}
            </>
          )}
          <div className='w-full flex items-center justify-center px-4 py-8'>
            <Link
              to='/our-projects'
              title='Join Us'
              className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
