import * as React from 'react';
import { ContactForm } from './../../components/contactForm';

interface IContactUsProps {}

export const ContactUs: React.FC<IContactUsProps> = (props) => {
  return (
    <div className='flex container w-full px-32 h-auto bg-white flex-wrap md:flex-nowrap relative z-10 py-20  mx-auto'>
      <div className='w-2/4 h-full p-4'>
        <h1 className='text-7xl m-8'>Contact Us</h1>
        <p className='m-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          quidem, tenetur officiis veniam inventore dolorum. Facilis sunt velit
          reiciendis autem quibusdam error a, at voluptatem voluptatibus omnis
          placeat, blanditiis pariatur.
        </p>
        <h1 className='text-4xl m-8'>Lorem Ipsum</h1>
        <p className='m-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          quidem, tenetur officiis veniam inventore dolorum. Facilis sunt velit
          reiciendis autem quibusdam error a, at voluptatem voluptatibus omnis
          placeat, blanditiis pariatur.
        </p>
      </div>
      <div className='w-2/4 h-full'>
        <ContactForm />
      </div>
    </div>
  );
};
