import * as React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Image2 from '../../assets/img/leaders/leader2.jpg';
import { Banner } from './../../components/banner';
import { CardUn } from './CardUn';
import { onGetData } from './../../api/index';

interface IOurLeaderProps {}
export interface ICardBody {
  image: string;
  content: string;
  role: string | null;
  name: string;
  type: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export const OurLeaders: React.FC<IOurLeaderProps> = (props) => {
  const [data, setData] = React.useState<[]>([]);
  const [isShow, setIsShow] = React.useState({
    people: false,
    organisation: false,
    team: false,
    anonyme: false,
    peopleWeLove: false,
  });

  const onLoadData = async () => {
    const data = await onGetData('/get/all/people');
    data.map((x: ICardBody) => {
      if (x.type === 'People') {
        console.log(x.type === 'People');
        setIsShow({ ...isShow, people: true });
      }
      if (x.type === 'Organisation') {
        console.log(x.type === 'Organisation');
        setIsShow({ ...isShow, organisation: true });
      }
      if (x.type === 'People we love') {
        console.log(x.type === 'People we love');
        setIsShow({ ...isShow, peopleWeLove: true });
      }
      if (x.type === 'Team Member') {
        console.log(x.type === 'Team Member', 'team');
        setIsShow({ ...isShow, team: true });
      }
      if (x.type === 'Anonyme') {
        console.log(x.type === 'Anonyme');
        setIsShow({ ...isShow, anonyme: true });
      }
    });
    setData(data);
  };

  React.useEffect(() => {
    onLoadData();
  }, []);
  return (
    <>
      <Banner state={false} title='Our Leaders' />
      <div className='w-ful relative z-10 bg-white py-10 md:px-16'>
        {isShow.people && (
          <>
            <h1>People</h1>
            <div className='container flex p-4 flex-wrap justify-center'>
              {data &&
                data.map((x: ICardBody, y: number) => {
                  if (x.type === 'People') {
                    return (
                      <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                        <CardUn key={y} data={x} />
                      </div>
                    );
                  }
                  return (
                    <div className='w-full md:w-4/12 flex items-center my-8 justify-center'></div>
                  );
                })}
            </div>
          </>
        )}

        {isShow.organisation && (
          <>
            <h1>Organisation</h1>
            <div className='container flex p-4 flex-wrap justify-center'>
              {data &&
                data.map((x: ICardBody, y: number) => {
                  if (x.type === 'Organisation') {
                    return (
                      <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                        <CardUn key={y} data={x} />
                      </div>
                    );
                  }
                  return (
                    <div className='w-full md:w-4/12 flex items-center my-8 justify-center'></div>
                  );
                })}
            </div>
          </>
        )}

        {isShow.peopleWeLove && (
          <>
            <h1>People we love</h1>
            <div className='container flex p-4 flex-wrap justify-center'>
              {data &&
                data.map((x: ICardBody, y: number) => {
                  if (x.type === 'People We Love') {
                    return (
                      <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                        <CardUn key={y} data={x} />
                      </div>
                    );
                  }
                  return (
                    <div className='w-full md:w-4/12 flex items-center my-8 justify-center'></div>
                  );
                })}
            </div>
          </>
        )}

        {isShow.team && (
          <>
            <h1>TEAM</h1>
            <div className='container flex p-4 flex-wrap justify-center'>
              {data &&
                data.map((x: ICardBody, y: number) => {
                  if (x.type === 'Team Member') {
                    return (
                      <div className='w-full md:w-4/12 flex items-center my-8 justify-center '>
                        <CardUn key={y} data={x} />
                      </div>
                    );
                  }
                  return (
                    <div className='w-full md:w-4/12 flex items-center my-8 justify-center'></div>
                  );
                })}
            </div>
          </>
        )}

        {isShow.anonyme && (
          <>
            <h1>Anonyme</h1>
            <div className='container flex p-4 flex-wrap justify-center'>
              {data &&
                data.map((x: any, y: number) => {
                  if (x.type === 'Anonyme') {
                    return (
                      <div className='w-full md:w-4/12 flex items-center my-8 justify-center'>
                        <FaUserCircle key={y} size={96} />
                      </div>
                    );
                  }
                  return (
                    <div className='w-full md:w-4/12 flex items-center my-8 justify-center'></div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
