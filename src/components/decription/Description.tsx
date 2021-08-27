import * as React from 'react';
import Lave from '../../assets/img/lave.jpg';
import { ActivityReport } from './ActivityReport';
import { Geohazard } from './Geohazard';
import { ProjectTable } from './ProjectTable';

interface IDescriptionProps {}

export const Description: React.FC<IDescriptionProps> = (props) => {
  return (
    <div className='container flex flex-col md:mx-auto md:px-32 py-4 items-center md:flex-no-wrap p-4 w-full bg-gray-50 relative z-10'>
      <h1 className='text-5xl'>Who we are?</h1>
      <p>
        After 500 years,{' '}
        <b>
          Africa is ready to take its place in this world and be the force it is
          supposed to be{' '}
        </b>
        . Our people are spread across the world and displaced within the
        motherland. From Kinshasa to Goma, from Capetown to Casablanca, from Rio
        to New York, from Paris to London. We are everywhere. With the
        development of direct communication, we are getting even closer to each
        other, able to team up as we take on the challenges of our time.
      </p>
      <p>
        When we say <b>#BuildingWakanda #ForUsByUs</b> it is first a message of
        self-love. We know our history and our worth. We use science to make
        Africa the paradise it is supposed to be.{' '}
        <b>We first count on ourselves</b>. We work together, ready to compete
        and to win. Baby steps after baby steps, we are building a temple
        through science, technology, engineering, art, mathematics, innovation,
        and love.
      </p>

      <p>
        You are one of us, regardless of your origin, age, race, gender, and
        religion, if you believe that{' '}
        <b>
          we can build together a better Africa, the Africa that empowers its
          people to be solutions to their problems
        </b>
        .
      </p>

      <p>
        While Africa is blessed in natural resources, we believe that{' '}
        <b>
          our people are the best of Africa, and among our people, our women are
          the very best of Africa
        </b>
        . When they drive, we all shine. We hate excuses, we judge ourselves by
        the quality of our results, the strength of our compassion, and the
        well-being of the less fortunate among us. We believe in{' '}
        <b>
          mentorship that encourages critical thinking and self-determination
        </b>
        . We nurture talents that turn dreams into reality.
      </p>

      <p>
        We insist on telling our own stories, introducing to the world the side
        of Africa that we love, the proud side, the problem-solving side, the
        creative side, the side that stands for itself. We are the few, we are
        determined, we dream big, we do the work, we make mistakes, we learn
        from them, we count our blessings, we move forward, and we make history.{' '}
      </p>

      <h1 className='text-5xl'>Project: A safety net for OVG</h1>
      <div className='w-full flex flex-wrap md:flex-nowrap pt-6'>
        <div className='w-full md:w-2/4'>
          <img src={Lave} alt='Nyiragongo' className='h-2/12' />
        </div>
        <div className='w-full md:w-2/4 bg-gray-100 p-4'>
          <h2 className='text-4xl mx-4'>Assessment:</h2>
          <ul className='ml-5'>
            <li className='list-outside md:list-inside my-4 list-disc'>
              <span style={{ fontWeight: 400 }}>
                The Goma Volcano Observatory (GVO or OVG in French) has a&nbsp;
                network of{' '}
              </span>
              <strong>14 seismic and 10&nbsp; geodetic stations</strong>
              <span style={{ fontWeight: 400 }}>.&nbsp;</span>
            </li>
            <li className='list-outside md:list-inside my-4 list-disc'>
              <strong>
                OVG owns 7 of the seismic stations and none of the geodetic
                stations.
              </strong>
              <span style={{ fontWeight: 400 }}>
                {' '}
                The rest is owned by a consortium of researchers from&nbsp;
                Belgium and Luxembourg. OVG has three seismic currently in
                reserve. The Consortium is accused in Science Magazine of
                neocolonial practices. They strongly disagreed but were very
                publicly rejected by OVG researchers.
              </span>
            </li>
            <li className='list-outside md:list-inside my-4 list-disc'>
              <strong>
                OVG does not have the capacity to remotely control its equipment
                as the control center is via an M2M gateway located in
                Luxembourg
              </strong>
              <span style={{ fontWeight: 400 }}>
                . &nbsp; The Belux Consortium co-own the data and has to be
                consulted before sharing it. They impose{' '}
              </span>
              <strong>heavy data embargo periods</strong>
              <span style={{ fontWeight: 400 }}>
                {' '}
                that discourage other researchers.{' '}
              </span>
              <span style={{ fontWeight: 400 }}>
                Our recommendations:&nbsp;
              </span>
            </li>
            <li className='list-outside md:list-inside my-4 list-disc'>
              <span style={{ fontWeight: 400 }}>OVG should</span>
              <strong> own and fully control its core equipment </strong>
              <span style={{ fontWeight: 400 }}>
                (seismic and geodetic networks).
              </span>
            </li>
            <li className='list-outside md:list-inside my-4 list-disc'>
              <span style={{ fontWeight: 400 }}>OVG should be the </span>
              <strong>
                sole responsible for the distribution of data they collect
              </strong>
              <span style={{ fontWeight: 400 }}>.&nbsp;</span>
            </li>
            <li>
              <span style={{ fontWeight: 400 }}>OVG should </span>
              <strong>embrace open data research</strong>
              <span style={{ fontWeight: 400 }}>
                &nbsp; to allow the scientific community to freely study the
                Nyiragongo and Nyamuragira volcanoes as well as Lake Kivu in the
                best interest of the millions of people threatened by the risk
                of an eruption or a limnic explosion
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full overflow-x-auto md:overflow-x-visible'>
        <ProjectTable />
      </div>

      <p>
        Fundraising for the first seismic stations ($20,000) targeting scholars
        and professionals in the diaspora, touching grounds with big donors
        within the DRC landscape of private companies.
      </p>

      <div className='w-full overflow-x-auto md:overflow-x-visible'>
        <ActivityReport />
      </div>

      <Geohazard />
    </div>
  );
};
