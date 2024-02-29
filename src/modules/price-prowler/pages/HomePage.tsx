import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className='w-full px-4 h-screen flex flex-col justify-center items-center'>
      <p className='text-3xl opacity-70 text-center'>
        Busca tus productos en un solo <br />
        <strong>CLICK</strong>
      </p>
      <img className='w-40' src='/img/homepage.jpg' alt='' />
      <Link
        to='/search'
        className='bg-black rounded text-white py-1 px-4 shadow-lg hover:brightness-110 transition-all duration-200'
      >
        Comenzar
      </Link>
      <div className='bg-slate-200 w-40 h-40 -z-10 opacity-30 rounded-full absolute -top-12 -right-12'></div>
      <div className='bg-slate-200 w-40 h-40 opacity-30 rounded-full absolute -bottom-12 -left-12'></div>
    </div>
  );
};
