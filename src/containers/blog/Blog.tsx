import * as React from 'react';
import { onGetData } from './../../api/index';
import { ArticleCard } from '../../components/blog/ArticleCard';
import { IData } from '../../components/blog/ArticleCard';
import { Banner } from '../../components/banner';

interface IBlogProps {}

export const Blog: React.FC<IBlogProps> = (props) => {
  const [blog, setBlog] = React.useState([]);
  const [popular, setPopular] = React.useState<any>([]);
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
    // eslint-disable-next-line
  }, [limit]);

  React.useEffect(() => {
    loadDataPopular();
  }, []);

  return (
    <>
      <Banner state={false} title='Blog' />
      <div className='w-ful relative z-10 bg-white'>
        <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto bg-white relative z-10 py-4  mx-auto'>
          <h4 className='text-4xl mx-2 my-12'>Most popular</h4>
          <div className='w-full flex mb-8 flex-wrap md:flex-nowrap'>
            {popular.length > 1
              ? popular.map((x: IData, y: number) => (
                  <div className='w-full md:w-2/4 m-2 rounded-lg' key={y}>
                    <ArticleCard data={x} />
                  </div>
                ))
              : Array(2)
                  .fill(null)
                  .map((x, y) => (
                    <div className='w-full md:w-2/4 m-2 rounded-lg' key={y}>
                      <div className='w-full h-80 bg-gray-300 animate-pulse rounded-lg'></div>
                    </div>
                  ))}
          </div>
          <div className='w-full flex flex-wrap md:flex-nowrap'>
            <div className='w-full mx-2'>
              <h4 className='text-4xl mx-2 my-12'>Latest posts</h4>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {blog.length > 1
                  ? blog.map((x: IData, y: number) => (
                      <div className='w-full rounded-lg' key={y}>
                        <ArticleCard data={x} />
                      </div>
                    ))
                  : Array(6)
                      .fill(null)
                      .map((x, y) => (
                        <div className='w-full rounded-lg' key={y}>
                          <div className='w-full h-80 bg-gray-300 animate-pulse rounded-lg'></div>
                        </div>
                      ))}
              </div>
            </div>
          </div>
          <div className='flex container w-full items-center justify-center p-16'>
            <button
              onClick={() => {
                setLimit(limit + 6);
              }}
              className='rounded-full py-3 flex flex-nowrap justify-center items-center px-8 mx-3 cursor-pointer text-white bg-gray-900 hover:bg-yellow-500 active:bg-gray-500'
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
