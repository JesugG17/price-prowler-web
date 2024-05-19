import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
// import './Header.scss';
import { ActiveLink } from './ActiveLink';
import { useAuthStore } from '@/store/auth/useAuthStore';

const paths = [
  { path: '/', text: 'Inicio' },
  { path: '/search', text: 'Buscador' },
  { path: '/tracking', text: 'Monitorear' },
];

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userName = useAuthStore((state) => state.user);

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
                  <ActiveLink key={item.path} {...item} />
                ))}
              </ul>
            </li>
          </ul>
          <div className='flex items-center gap-5 text-white'>
            {isAuthenticated ? (
              <p>Bievenido, {userName}</p>
            ) : (
              <>
                <Link
                  to='/auth/login'
                  className='border-2 p-2 rounded hover:text-dark-primary hover:bg-white transition-all duration-200'
                >
                  Iniciar sesion
                </Link>
                <Link
                  to='/auth/register'
                  className='border-2 p-2 rounded hover:text-dark-primary hover:bg-white transition-all duration-200'
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
