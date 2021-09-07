import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import { FaGlobe } from 'react-icons/fa';
import '../../App.css';
import Logo from '../../assets/img/logoNoir.png';

interface IMenuProps {}

const useActivetPath = (props: string): string => {
  const location = useLocation();
  if (props === `/${location.pathname.split('/')[1]}`) {
    return 'text-gray-900 active font-bold';
  }
  return 'text-gray-500';
};

export const Menu: React.FC<IMenuProps> = (props) => {
  const [state, setState] = React.useState(false);
  const onShowMenu = () => {
    return setState(!state);
  };
  return (
    <nav className='bg-white shadow fixed w-full z-50' role='navigation'>
      <div className='container md:mx-auto md:px-10 px-4 py-2 flex flex-wrap items-center md:flex-no-wrap'>
        <div className='mr-4 md:mr-8'>
          <Link to='/' className={` cursor-pointer ${useActivetPath('/')}`}>
            <img
              src={Logo}
              className='w-auto h-16 md:h-20'
              alt='Logo Building Wakanda'
            />
          </Link>
        </div>
        <div className='ml-auto flex md:hidden'>
          <div className='flex px-4 py-1 items-center text-gray-500 cursor-pointer lang-bar'>
            <FaGlobe size='18' className='mr-1' />
            En {/* Eng <FaAngleDown className='mt-1' /> */}
          </div>
          <button
            className='flex items-center py-2 rounded cursor-pointer active:bg-gray-50'
            aria-label='Show menu'
            onClick={onShowMenu}
            type='button'
          >
            <CgMenuRight size='32' className='active:tex-red-500' />
          </button>
        </div>
        <div className='w-full md:w-auto md:flex-grow md:flex md:items-center'>
          <ul
            className={`${
              !state && 'hidden'
            } md:flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0`}
          >
            <li>
              <Link
                to='/'
                className={`${useActivetPath('/')}`}
                onClick={onShowMenu}
                title='Who we are'
              >
                <span className='block px-4 py-1 md:p-2 lg:px-4'>
                  Who we are
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to='/our-projects'
                className={`${useActivetPath('/our-projects')}`}
                title='Our Projects'
                onClick={onShowMenu}
              >
                <span className='flex items-center px-4 py-1 md:p-2 lg:px-4'>
                  Projects
                </span>
              </Link>
            </li>

            <li>
              <Link
                to='/our-team'
                className={`${useActivetPath('/our-team')}`}
                title='Our team'
                onClick={onShowMenu}
              >
                <span className='block px-4 py-1 md:p-2 lg:px-4'>Our team</span>
              </Link>
            </li>
            <li>
              <Link
                to='/blog'
                className={`${useActivetPath('/blog')}`}
                title='Blog'
                onClick={onShowMenu}
              >
                <span className='block px-4 py-1 md:p-2 lg:px-4'>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to='/gallery'
                className={`${useActivetPath('/gallery')}`}
                title='Gallery'
                onClick={onShowMenu}
              >
                <span className='block px-4 py-1 md:p-2 lg:px-4'>Gallery</span>
              </Link>
            </li> */}
            <li>
              <Link
                to='/contact-us'
                className={`${useActivetPath('/contact-us')}`}
                title='Contact Us'
                onClick={onShowMenu}
              >
                <span className='block px-4 py-1 md:p-2 lg:px-4'>
                  Contact Us
                </span>
              </Link>
            </li>
            <li className='md:block hidden ml-4 relative'>
              <div className='flex px-4 py-1 items-center text-gray-500 cursor-pointer lang-bar'>
                <FaGlobe size='18' className='mr-1' />
                En {/* En <FaAngleDown className='mt-1' /> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
