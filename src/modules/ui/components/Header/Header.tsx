import { Container } from '../Container/Container';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/search'>Buscador</Link>
            </li>
            <li>
              <Link to='/tracking'>Monitoreo</Link>
            </li>
          </ul>
          {/* <img onClick={toggleMobileMenu} className='md:hidden' src='/img/menu-icon.png' alt='' /> */}
          <div className='container-nav-button'>
            <button>Iniciar sesion</button>
            <button>Registrarse</button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
