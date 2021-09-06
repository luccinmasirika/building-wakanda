import * as React from 'react';
import { Link } from 'react-router-dom';
import { onGetData } from './../../api/index';
import { ArticleCard } from '../../components/blog/ArticleCard';
import { IData } from '../../components/blog/ArticleCard';

interface IBlogProps {}

export const Blog: React.FC<IBlogProps> = (props) => {
  const [blog, setBlog] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [limit, setLimit] = React.useState(9);
  const [loading, setLoading] = React.useState(false);

  const loadData = async () => {
    setLoading(true);
    const data = await onGetData(`/get/all/blog?limit=${limit}`);
    if (data && !data.error) {
      setBlog(data);
      setLoading(false);
    }
  };

  const loadDataPopular = async () => {
    const data = await onGetData(`/get/all/popular/blog`);
    if (data && !data.error) {
      setPopular(data);
    }
  };

  React.useEffect(() => {
    loadData();
  }, [limit]);

  React.useEffect(() => {
    loadDataPopular();
  }, []);

  return (
    <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto bg-white relative z-10 py-20  mx-auto'>
      <h2 className='text-4xl mx-2 mt-12'>Most popular</h2>
      <div className='w-full flex mb-8 flex-wrap md:flex-nowrap'>
        {popular.map((x: IData, y: number) => (
          <div className='w-full md:w-2/4 mx-2' key={y}>
            <Link to={`/blog/${x._id}`}>
              <ArticleCard data={x} />
            </Link>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-wrap md:flex-nowrap'>
        <div className='w-full mx-2'>
          <h2 className='text-4xl mx-2 mt-12'>Latest posts</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {blog.map((x: IData, y) => (
              <div className='w-full' key={y}>
                <Link to={`/blog/${x._id}`}>
                  <ArticleCard data={x} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {blog.length > 9 && (
        <div className='flex container w-full items-center justify-center p-16'>
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
  );
};
