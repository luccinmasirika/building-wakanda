import * as React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
interface IContactFormProps {}

export const ContactForm: React.FC<IContactFormProps> = (props) => {
  return (
    <div className='conatainer flex flex-col justify-center mx-auto h-full p-4 md:p-8'>
      <input
        type='text'
        placeholder='First Name'
        aria-label='First Name'
        name='firstName'
        className='rounded-lg p-5 my-2 border-2'
      />
      <input
        type='text'
        placeholder='Last Name'
        aria-label='Last Name'
        name='lastName'
        className='rounded-lg p-5 my-2 border-2'
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        Aria-label='Email'
        className='rounded-lg p-5 my-2 border-2'
      />
      <textarea
        name='message'
        id='description'
        cols={3}
        rows={5}
        placeholder='Message'
        aria-label='Message'
        className='rounded-lg p-5 my-2 border-2'
      ></textarea>
      <button
        aria-label='Send Message'
        className='rounded-lg w-40 bg-gray-800 hover:bg-yellow-400 text-white bold p-4 my-2 float-right'
      >
        <span className='flex items-center'>
          <BiLoaderAlt className='animate-spin mx-3' />
          Send
        </span>
      </button>
    </div>
  );
};
