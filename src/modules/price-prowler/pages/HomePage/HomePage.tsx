import { Link } from 'react-router-dom';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className='container-homepage'>
      <p>
        Busca tus productos en un solo <br />
        <strong>CLICK</strong>
      </p>
      <img src='/img/homepage.jpg' alt='' />
      <Link to='/search' className=''>
        Comenzar
      </Link>
      <div className='bg-circle-top'></div>
      <div className='bg-circle-bottom'></div>
    </div>
  );
};
