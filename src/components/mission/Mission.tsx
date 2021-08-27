import * as React from 'react';

interface IMissionProps {}

export const Mission: React.FC<IMissionProps> = (props) => {
  return (
    <div className='container flex flex-col md:mx-auto md:px-32 px-4 py-4 items-center md:flex-no-wrap p-12 w-full h-96 bg-gray-50 relative z-10'>
      <h1 className='text-5xl p-4'>Mission</h1>
      <p className='p-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        voluptas similique quaerat dolorem? Itaque ipsam repellat quibusdam
        possimus iure dolores! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequuntur voluptas similique quaerat dolorem?
        Itaque ipsam repellat quibusdam possimus iure dolores! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequuntur voluptas similique
        quaerat dolorem? Itaque ipsam repellat quibusdam possimus iure dolores!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        voluptas similique quaerat dolorem? Itaque ipsam repellat quibusdam
        possimus iure dolores!
      </p>
    </div>
  );
};
