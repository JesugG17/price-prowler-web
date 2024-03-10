import { Link } from 'react-router-dom';
import { FC } from 'react';

export const Sidebar: FC<Props> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      {isMobileMenuOpen && (
        <div className='w-full h-full fixed top-0 left-0 bg-black bg-opacity-50'></div>
      )}

      <div
        className={`w-3/4 h-full fixed top-0 left-0 z-20 shadow bg-black p-4 transition-all duration-200 flex flex-col justify-between ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col gap-4'>
          <img
            onClick={toggleMobileMenu}
            className='w-6 self-end'
            src='/img/close-icon.png'
            alt=''
          />
          <ul className='flex flex-col gap-4 mt-5 font-medium'>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/home-icon.png' alt='' />
              <Link onClick={toggleMobileMenu} to='/'>
                Inicio
              </Link>
            </li>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/search.png' alt='' />
              <Link onClick={toggleMobileMenu} to='/search'>
                Buscador
              </Link>
            </li>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/eye.png' alt='' />
              <Link onClick={toggleMobileMenu} to='/tracking'>
                Productos agregados
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <button className='bg-black py-1 px-4 text-white rounded'>Iniciar sesion</button>
          <button className='bg-black py-1 px-4 text-white rounded'>Registrarse</button>
        </div>
      </div>
    </>
  );
};

type Props = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};
