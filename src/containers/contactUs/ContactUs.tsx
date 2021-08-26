import * as React from 'react';
import { ContactForm } from './../../components/contactForm';

interface IContactUsProps {}

export const ContactUs: React.FC<IContactUsProps> = (props) => {
  return (
    <div className='container w-full flex flex-wrap p-4 md:px-32 h-auto bg-white md:flex-nowrap relative z-10 py-20  mx-auto'>
      <div className='w-full md:w-2/4 p-4'>
        <h1 className='text-5xl md:text-7xl my-8'>Contact Us</h1>
        <p className='m-8y'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          quidem, tenetur officiis veniam inventore dolorum. Facilis sunt velit
          reiciendis autem quibusdam error a, at voluptatem voluptatibus omnis
          placeat, blanditiis pariatur.
        </p>

        <h1 className='text-3xl md:text-4xl my-8'>Lorem Ipsum</h1>
        <p className='my-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          quidem, tenetur officiis veniam inventore dolorum. Facilis sunt velit
          reiciendis autem quibusdam error a, at voluptatem voluptatibus omnis
          placeat, blanditiis pariatur.
        </p>
      </div>
      <div className='w-full md:w-2/4'>
        <ContactForm />
      </div>
    </div>
  );
};
