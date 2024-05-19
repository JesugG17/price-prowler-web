import { useNavigate } from 'react-router';
import { Container } from '@/modules/ui/components/Container/Container';

import './HomePage.scss';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className='container-homepage'>
      <Container flexColumn centerCross>
        <p className='main-paragraph'>
          Busca tus productos en un solo <br />
          <strong>CLICK</strong>
        </p>
        <img src='/img/homepage.jpg' />
        <button
          onClick={() => navigate('/search')}
          className='p-4 bg-primary rounded text-light-gray-custom border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300'
        >
          ¡Empieza a buscar!
        </button>
      </Container>
    </section>
  );
};
