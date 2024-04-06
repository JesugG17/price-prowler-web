import { Container } from '@/modules/ui/components/Container/Container';
import './NoProductsFound.scss';

export const NoProductsFound = () => {
  return (
    <Container>
      <div className='no-product-container'>
        <h4 className='no-product-title'>Nada que mostrar...</h4>
      </div>
    </Container>
  );
};
