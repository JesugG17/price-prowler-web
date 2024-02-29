import { useState } from 'react';
import { Sidebar } from './Sidebar';
export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  return (
    <header className='w-full bg-gray-100 shadow h-[50px]'>
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
        <Sidebar isMobileMenuOpen={openMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </nav>
    </header>
  );
};
