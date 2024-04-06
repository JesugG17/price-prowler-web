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
              <img src='/img/logo-priceprowler.svg' />
            </li>
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
          <div className='buttons-container'>
            <div className='language-buttons-container'>
              <button>English</button>
              <button>Spanish</button>
            </div>
            <div className='auth-buttons-container'>
              <button>Iniciar sesion</button>
              <button>Registrarse</button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
