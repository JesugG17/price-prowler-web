import { Container } from '@/modules/ui/components/Container/Container';

export const NoProductsFound = () => {
  return (
    <Container>
      <div className='h-[400px] flex flex-col justify-center items-center mt-10'>
        <h4 className='text-3xl font-bold text-dark-primary'>¡Empieza a buscar tus productos!</h4>
        <img src='/img/logo-priceprowler.svg' />
      </div>
    </Container>
  );
};
