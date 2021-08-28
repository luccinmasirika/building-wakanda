import * as React from 'react';
import { Link } from 'react-router-dom';

interface IWhoWeAreProps {}

export const WhoWeAre: React.FC<IWhoWeAreProps> = (props) => {
  return (
    <div className='w-full bg-gray-50 relative z-10 '>
      <div className='container flex flex-col md:mx-auto  p-4 md:px-32 py-4 items-center md:flex-no-wrap'>
        <h1 className='text-5xl'>Who we are?</h1>
        <p>
          After 500 years,{' '}
          <strong>
            Africa is ready to take its place in this world and be the force it
            is supposed to be
          </strong>
          . Our people are spread across the world and displaced within the
          motherland. From Kinshasa to Goma, from Capetown to Casablanca, Rio to
          New York, Paris to London. We are everywhere. With the development of
          direct communication, we are getting even closer to each other, able
          to team up as we take on the challenges of our time.
        </p>
        <p>
          When we say
          <a href='https://twitter.com/hashtag/BuildingWakanda?src=hashtag_click'>
            <strong>#BuildingWakanda</strong>
          </a>{' '}
          <a href='https://twitter.com/hashtag/ForUsByUs?src=hashtag_click'>
            <strong>#ForUsByUs</strong>
          </a>
          , it is first a message of self-love. We know our history and our
          worth. We use science to make Africa the paradise it is supposed to
          be. <strong>We first count on ourselves. </strong>We work together,
          ready to compete and to win. Baby steps after baby steps, we are
          building a temple through science, technology, engineering, art,
          mathematics, innovation, and love.
        </p>
        <p>
          You can be one of us, regardless of your origin, age, race, gender,
          religion, and political views, if you believe thatwe can build
          together a better Africa:
          <strong>
            {' '}
            the Africa that empowers its people to be solutions to their
            problems.
          </strong>
        </p>
        <p>
          While Africa is blessed in natural resources, we believe that{' '}
          <strong>
            our people are the best of Africa, and among our people, our women
            are the very best of Africa
          </strong>
          . When they drive, we all shine. We hate excuses; we judge ourselves
          by the quality of our results, the strength of our compassion, and the
          well-being of the less fortunate among us. We believe in
          <strong>
            {' '}
            mentorship that encourages critical thinking and self-determination
          </strong>
          . We nurture talents that turn dreams into reality;
        </p>
        <p>
          We insist on telling our own stories, introducing to the world the
          side of Africa that we love, the proud side, the problem-solving side,
          the creative side, the side that stands for itself. We are the few; we
          are determined; we dream big, do the work, make mistakes, learn from
          them, count our blessings, move forward, and make history. Started as
          an international online movement within the scientific and tech
          community, BuildingWakanda has produced{' '}
          <a href='https://twitter.com/hashtag/ForUsByUs?src=hashtag_click'>
            <strong>#ForUsByUs</strong>
          </a>{' '}
          solutions such as Covid19drc.com and its FaceShield project that used
          3D-Printers to equip more than 500 hospitals across the DRC with
          protective equipment. BuildingWakanda is now morphing into a nonprofit
          to simplify the deployment of its solutions.
        </p>
        <div className='w-full flex items-center justify-center px-4 py-8'>
          <Link
            to='/contact-us'
            title='Join Us'
            className='w-32 text-white flex items-center justify-center bg-black p-4'
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};
