import * as React from 'react';
import { Banner } from './../../components/banner';
import { Link, Route, Switch } from 'react-router-dom';
import { onGetData } from './../../api/index';
import { API } from '../../config';
import { ProjectsPage } from './ProjectsPage';

interface IOurProjectsProps {
  match: {
    url: string;
  };
}

export const OurProjects: React.FunctionComponent<IOurProjectsProps> = ({
  match,
}) => {
  const [projects, setProjects] = React.useState([]);
  const [limit, setLimit] = React.useState(9);
  const [loading, setLoading] = React.useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await onGetData(`/get/all/project?limit=${limit}`);
    if (data && !data.error) {
      setProjects(data);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Banner state={false} title='Our projects' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container p-4 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {projects.map((x: any, y) => (
            <Link to={`${match.url}/${x._id}`} key={y}>
              <div className='w-full cursor-pointer shadow-lg'>
                <div className='bg-gray-900 w-full h-72 relative'>
                  <img
                    key={y}
                    src={`${API}/${x.image}`}
                    alt='img'
                    className='object-cover h-full w-full hover:opacity-60 rounded-lg'
                  />
                  <div className='absolute bottom-5 left-5'>
                    <span className='bg-yellow-400 px-4  py-2 rounded-md shadow-lg'>
                      {x.status}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {projects.length > 9 && (
          <div className='flex container w-full items-center justify-center p-10'>
            <button
              onClick={() => {
                setLimit(limit + 6);
              }}
              className='p-4 bg-gray-900 text-white'
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
