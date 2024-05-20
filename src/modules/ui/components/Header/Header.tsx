import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ActiveLink } from './ActiveLink';
import { useAuthStore } from '@/store/auth/useAuthStore';

const paths = [
  { path: '/', text: 'Inicio', needAuth: false },
  { path: '/search', text: 'Buscador', needAuth: false },
  { path: '/tracking', text: 'Monitorear', needAuth: true },
];

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className='bg-dark-primary shadow-md fixed w-full top-0 z-10'>
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
              <div className='flex items-center gap-3'>
                <p>Bievenido, {user?.name}</p>
                {user?.photo && (
                  <img className='w-12 rounded-full' src={user.photo} alt={`${user.name} photo`} />
                )}
                <button
                  onClick={logout}
                  className='border-2 border-red-500 p-1 px-3 rounded hover:bg-red-500 transition-all duration-300'
                >
                  Logout
                </button>
              </div>
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
