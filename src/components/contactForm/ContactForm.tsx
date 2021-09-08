import * as React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import emailjs from 'emailjs-com';
interface IContactFormProps {}

export const ContactForm: React.FC<IContactFormProps> = (props) => {
  const [state, setState] = React.useState(false);
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = React.useState(false);

  const handelChange = (props: any) => (event: any) => {
    setState(false);
    setData({ ...data, [props]: event.target.value });
    console.log(event.target.value);
    console.log(props);
  };

  const handelSendMail = (data: any) => {
    setState(true);
    emailjs
      .send(
        'service_bf4c31a',
        'wakanda',
        {
          to_name: [`${data.firstName} ${data.lastName}`],
          to_email: data.email,
          fName: data.firstName,
          lName: data.lastName,
          message: data.message,
        },
        'user_znuvQY0eGXOxe4XelXHIH'
      )
      .then(
        (result: any) => {
          setState(false);
          setData({
            ...data,
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          console.log(result);
        },
        (error: any) => {
          setState(false);
          alert(error.text);
          console.log(error.text);
        }
      );
  };
  return (
    <div className='conatainer flex flex-col justify-center mx-auto h-full p-4 md:p-8'>
      <input
        type='text'
        placeholder='First Name'
        aria-label='First Name'
        name='firstName'
        onChange={handelChange('firstName')}
        className='rounded-lg p-5 my-2 border-2'
      />
      <input
        type='text'
        placeholder='Last Name'
        aria-label='Last Name'
        onChange={handelChange('lastName')}
        name='lastName'
        className='rounded-lg p-5 my-2 border-2'
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        aria-label='Email'
        onChange={handelChange('email')}
        className='rounded-lg p-5 my-2 border-2'
      />
      <textarea
        name='message'
        id='description'
        cols={3}
        rows={5}
        placeholder='Message'
        onChange={handelChange('message')}
        aria-label='Message'
        className='rounded-lg p-5 my-2 border-2'
      ></textarea>
      {success && (
        <div className='text-green-700 flex items-center justify-center w-32 rounded-md'>
          Success
        </div>
      )}
      <button
        aria-label='Send Message'
        disabled={state}
        onClick={() => handelSendMail(data)}
        className='rounded-lg w-40 bg-gray-800 hover:bg-yellow-400 text-white bold p-4 my-2'
      >
        <span className='flex items-center justify-around'>
          {state && <BiLoaderAlt className='animate-spin mx-3' />}
          Send
        </span>
      </button>
    </div>
  );
};
