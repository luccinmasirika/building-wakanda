import * as React from 'react';
import { ContactForm } from './../../components/contactForm';
import Image from '../../assets/img/contact.png';
import { Banner } from '../../components/banner';

interface IContactUsProps {}

export const ContactUs: React.FC<IContactUsProps> = (props) => {
  return (
    <>
      <Banner state={false} />
      <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto bg-white md:flex-nowrap relative z-10 py-8  mx-auto'>
        <div className='w-full md:w-2/4 md:p-12 p-2'>
          <img src={Image} alt='Contact' />
        </div>
        <div className='w-full md:w-2/4'>
          <ContactForm />
        </div>
      </div>
    </>
  );
};
