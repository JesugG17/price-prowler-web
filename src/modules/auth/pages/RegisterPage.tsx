import { Loading } from '@/modules/ui/components/Loading';
import { useAuthStore } from '@/store/auth/useAuthStore';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const RegisterPage = () => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newErrorState: { [key: string]: string } = {};

    if (formState.name.length === 0) {
      newErrorState.name = 'El nombre es obligatorio';
    }

    if (formState.email.length === 0) {
      newErrorState.email = 'El correo electronico es obligatorio';
    }

    if (!EMAIL_REGEX.test(formState.email)) {
      newErrorState.email = 'Correo electronico invalido';
    }

    if (formState.password.length === 0) {
      newErrorState.password = 'La contraseña es obligatoria';
    }

    if (Object.keys(newErrorState).length > 0) {
      setFormErrors((prevState) => ({
        ...prevState,
        ...newErrorState,
      }));
      return;
    }

    setIsLoading(true);

    try {
      await register(formState);
      navigate('/auth/login', {
        replace: true,
      });
    } catch (error) {
      console.log('here');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormErrors((prevState) => ({
      ...prevState,
      email: '',
    }));
  }, [formState.email]);

  useEffect(() => {
    setFormErrors((prevState) => ({
      ...prevState,
      password: '',
    }));
  }, [formState.password]);

  useEffect(() => {
    setFormErrors((prevState) => ({
      ...prevState,
      name: '',
    }));
  }, [formState.name]);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Nombre completo</label>
          <input
            className={classNames(
              'border-2 p-2 rounded',
              formErrors.name.length > 0 ? 'border-red-500' : 'border-gray-custom'
            )}
            name='name'
            value={formState.name}
            onChange={handleChange}
            id='name'
            placeholder='John doe'
            type='text'
          />
          {formErrors.name.length > 0 && <p className='text-red-500'>{formErrors.name}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Correo electronico</label>
          <input
            className={classNames(
              'border-2 p-2 rounded',
              formErrors.email.length > 0 ? 'border-red-500' : 'border-gray-custom'
            )}
            name='email'
            value={formState.email}
            onChange={handleChange}
            id='email'
            placeholder='example@gmail.com'
            type='email'
          />
          {formErrors.email.length > 0 && <p className='text-red-500'>{formErrors.email}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Contraseña</label>
          <input
            className={classNames(
              'border-2 p-2 rounded',
              formErrors.password.length > 0 ? 'border-red-500' : 'border-gray-custom'
            )}
            name='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
            placeholder='Tu contraseña'
            type='password'
          />
          {formErrors.password.length > 0 && <p className='text-red-500'>{formErrors.password}</p>}
        </div>
        <button
          disabled={isLoading}
          className='bg-dark-primary flex justify-center text-white p-3 rounded text-lg hover:brightness-110 duration-200 transition-all'
        >
          {isLoading ? <Loading /> : 'Iniciar sesion'}
        </button>
      </form>
      <p className='mt-5 text-right'>
        ¿Ya tienes cuenta?,{' '}
        <Link className='text-blue-500 underline' to='/auth/login'>
          ¡Inicia sesion!
        </Link>
      </p>
      <div className='flex items-center my-4'>
        <div className='flex-grow border-t border-gray-300'></div>
        <span className='flex-shrink mx-4 text-gray-500'>O</span>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
      <div className='flex justify-center'>
        <button className='flex shadow-md w-full justify-center items-center gap-2 border-2 p-2 rounded-md'>
          <img className='w-8' src='/img/google-icon.svg' />
          Google
        </button>
      </div>
    </AuthLayout>
  );
};
