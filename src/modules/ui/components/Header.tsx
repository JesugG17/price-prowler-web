import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  return (
    <header className='w-full bg-gray-100 shadow'>
      <nav className='p-4 flex justify-between'>
        <ul className='hidden gap-3 md:flex'>
          <li>Inicio</li>
          <li>Buscador</li>
          <li>Monitoreo</li>
        </ul>
        <img onClick={toggleMobileMenu} className='md:hidden' src='/img/menu-icon.png' alt='' />
        <div className='hidden md:flex md:gap-4'>
          <button>Iniciar sesion</button>
          <button>Registrarse</button>
        </div>

        {openMobileMenu && (
          <div className='w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50'></div>
        )}

        <div
          className={`w-3/4 h-full fixed top-0 left-0 shadow z-10 bg-white p-4 transition-all duration-200 flex flex-col ${
            openMobileMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <img
            onClick={toggleMobileMenu}
            className='w-6 self-end'
            src='/img/close-icon.png'
            alt=''
          />
          <ul className='flex flex-col gap-4 mt-5 font-medium'>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/home-icon.png' alt='' />
              <Link to='/'>Inicio</Link>
            </li>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/search.png' alt='' />
              <Link to='/search'>Buscador</Link>
            </li>
            <li className='flex gap-4'>
              <img className='w-6' src='/img/eye.png' alt='' />
              <Link to='/tracking'>Productos agregados</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
