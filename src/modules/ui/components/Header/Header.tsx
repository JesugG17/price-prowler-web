import { Container } from '../Container/Container';
// import './Header.scss';
import { ActiveLink } from './ActiveLink';

const paths = [
  { path: '/', text: 'Inicio' },
  { path: '/search', text: 'Buscador' },
  { path: '/tracking', text: 'Monitorear' },
];

export const Header = () => {
  return (
    <header className='bg-dark-primary shadow-md'>
      <Container>
        <nav className='flex justify-between p-2'>
          <ul className='flex items-center gap-5'>
            <li>
              <img className='invert w-12 h-12' src='/img/logo-priceprowler.svg' />
            </li>
            <li>
              <ul className='flex items-center gap-5'>
                {paths.map((item) => (
                  <ActiveLink {...item} />
                ))}
              </ul>
            </li>
          </ul>
          <div className='flex items-center gap-5 text-white'>
            <button className='border-2 p-2 rounded hover:text-dark-primary hover:bg-white transition-all duration-200'>
              Iniciar sesion
            </button>
            <button className='border-2 p-2 rounded hover:text-dark-primary hover:bg-white transition-all duration-200'>
              Registrarse
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
