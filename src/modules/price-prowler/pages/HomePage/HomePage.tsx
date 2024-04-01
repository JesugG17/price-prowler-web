import { Container } from '@/modules/ui/components/Container/Container';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <section className='container-homepage'>
      <Container flexColumn centerCross>
        <p className='main-paragraph'>
          Busca tus productos en un solo <br />
          <strong>CLICK</strong>
        </p>
        <img src='/img/homepage.jpg' />
        <button className='start-button'>¡Empieza a buscar!</button>
      </Container>
    </section>
  );
};
