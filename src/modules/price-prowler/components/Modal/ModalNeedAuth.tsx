import { Link } from 'react-router-dom';
import { ModalLayout } from './ModalLayout';
import { useGoogle } from '../../../../common/hooks/useGoogle';
import { FC } from 'react';

export const ModalNeedAuth: FC<Props> = ({ toggleModal }) => {
  const googleSignIn = useGoogle();

  return (
    <ModalLayout onClose={toggleModal}>
      <h4 className='text-xl text-primary font-bold text-center'>
        ¡Necesitas iniciar sesion para usar esta caracteristica!
      </h4>
      <hr className='h-4' />
      <p className='text-center'>
        Para empezar a monitorear tus productos, necesitas registarte (si no lo has hecho) e iniciar
        sesion, esto con el fin de poder avisarte cuando un producto alcance el precio que tu desees
        por medio de correo electronico
      </p>
      <div className='grid grid-cols-2 gap-3 mt-4'>
        <Link
          className='p-2 text-center bg-dark-primary text-white rounded shadow hover:brightness-110 transition-all duration-200'
          to='/auth/login'
        >
          Iniciar sesion
        </Link>
        <Link
          className='p-2 text-center bg-white text-dark-primary border-2 border-dark-primary rounded shadow'
          to='/auth/register'
        >
          Registrarme
        </Link>
      </div>
      <div className='flex items-center my-4'>
        <div className='flex-grow border-t border-gray-300'></div>
        <span className='flex-shrink mx-4 text-gray-500'>O</span>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => googleSignIn()}
          className='flex shadow-md w-full justify-center items-center gap-2 border-2 p-2 rounded-md'
        >
          <img className='w-8' src='/img/google-icon.svg' />
          Google
        </button>
      </div>
    </ModalLayout>
  );
};

type Props = {
  toggleModal: () => void;
};
