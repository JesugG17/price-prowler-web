import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import './Header.scss';

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Buscador</li>
          <li>Monitoreo</li>
        </ul>
        <img onClick={toggleMobileMenu} className='md:hidden' src='/img/menu-icon.png' alt='' />
        <div className='container-nav-button'>
          <button>Iniciar sesion</button>
          <button>Registrarse</button>
        </div>
        <Sidebar isMobileMenuOpen={openMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      </nav>
    </header>
  );
};

