import * as React from 'react';
import { ContactForm } from './../../components/contactForm';
import Image from '../../assets/img/contact.png';
import { Banner } from '../../components/banner';

interface IContactUsProps {}

export const ContactUs: React.FC<IContactUsProps> = (props) => {
  return (
    <>
      <Banner state={false} title='Contact Us' />
      <div className='w-full bg-white relative z-10'>
        <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto  md:flex-nowrap  py-8  mx-auto'>
          <div className='w-full md:w-2/4 md:p-12 p-2'>
            <img src={Image} alt='Contact' />
          </div>
          <div className='w-full md:w-2/4'>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
