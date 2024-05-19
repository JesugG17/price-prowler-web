import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-light-gray-custom'>
      <div className='bg-white shadow rounded-md w-[90%] max-w-lg p-4'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2 border-b-2 border-b-transparent hover:border-b-black transition-all duration-300'>
            <img className='w-6' src='/img/left-arrow-icon.png' />
            <Link to='/'>Regresar</Link>
          </div>
          <img className='w-12 h-12' src='/img/logo-priceprowler.svg' />
        </div>
        {children}
      </div>
    </div>
  );
};

type Props = PropsWithChildren;
