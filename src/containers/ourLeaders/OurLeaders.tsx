import * as React from 'react';
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
  const [people, setPeople] = React.useState<[]>([]);
  const [organisation, setOrganisation] = React.useState<[]>([]);
  const [peopleWeLove, setpeopleWeLove] = React.useState<[]>([]);
  const [anonyme, setAnonyme] = React.useState<[]>([]);
  const [team, setTeam] = React.useState<[]>([]);

  const onLoadData = async () => {
    const people = await onGetData('/get/all/people?type=People');
    setPeople(people);
    const peopleWeLove = await onGetData('/get/all/people?type=People We Love');
    setpeopleWeLove(peopleWeLove);
    const team = await onGetData('/get/all/people?type=Team Member');
    setTeam(team);
    const organisation = await onGetData('/get/all/people?type=Organisation');
    setOrganisation(organisation);
    const anonyme = await onGetData('/get/all/people?type=Anonyme');
    setAnonyme(anonyme);
  };

  React.useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <Banner state={false} title='Our Team' />
      <div className='w-ful relative z-10 bg-white py-10 md:px-16'>
        {people.length > 0 ||
        organisation.length > 0 ||
        peopleWeLove.length > 0 ||
        team.length > 0 ||
        anonyme.length > 0 ? (
          <>
            {people.length > 0 && (
              <>
                <h4 className='text-4xl text-center my-4'>People</h4>
                <div className='container flex p-4 flex-wrap justify-center'>
                  {people &&
                    people.map((x: ICardBody, y: number) => (
                      <div
                        key={y}
                        className='w-full md:w-4/12 flex items-center my-8 justify-center'
                      >
                        <CardUn data={x} />
                      </div>
                    ))}
                </div>
              </>
            )}

            {organisation.length > 0 && (
              <>
                <h4 className='text-4xl text-center my-4'>Organisation</h4>
                <div className='container flex p-4 flex-wrap justify-center'>
                  {organisation.map((x: ICardBody, y: number) => (
                    <div
                      key={y}
                      className='w-full md:w-4/12 flex items-center my-8 justify-center'
                    >
                      <CardUn data={x} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {peopleWeLove.length > 0 && (
              <>
                <h4 className='text-4xl text-center my-4'>People we love</h4>
                <div className='container flex p-4 flex-wrap justify-center'>
                  {peopleWeLove.map((x: ICardBody, y: number) => (
                    <div
                      key={y}
                      className='w-full md:w-4/12 flex items-center my-8 justify-center'
                    >
                      <CardUn data={x} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {team.length > 0 && (
              <>
                <h4 className='text-4xl text-center my-4'>Team Members</h4>
                <div className='container flex p-4 flex-wrap justify-center'>
                  {team.map((x: ICardBody, y: number) => (
                    <div
                      key={y}
                      className='w-full md:w-4/12 flex items-center my-8 justify-center'
                    >
                      <CardUn data={x} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {anonyme.length > 0 && (
              <>
                <h4 className='text-4xl text-center my-4'>Anonyme</h4>
                <div className='container flex p-4 flex-wrap justify-center'>
                  {anonyme.map((x: ICardBody, y: number) => (
                    <div
                      key={y}
                      className='w-full md:w-4/12 flex items-center my-8 justify-center'
                    >
                      <CardUn data={x} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className='w-8/12 mt-6 h-6 mx-auto rounded-3xl bg-gray-300 animate-pulse'></div>
            <div className='container flex p-4 flex-wrap justify-center'>
              {Array(3)
                .fill(null)
                .map((x: any, y: number) => (
                  <div
                    key={y}
                    className='w-full md:w-4/12 flex items-center my-8 justify-center'
                  >
                    <div className='w-full animate-pulse m-4 bg-gray-200 rounded-lg'>
                      <div className='h-96 my-20 w-full'></div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
