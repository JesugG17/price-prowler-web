import { useProducts } from '@/common/context/price-prowler/ProductsAddedProvider';
import { ProductCard } from '../../components/ProductCard';
import { useNavigate } from 'react-router';
import './TrackingPage.scss';

export const TrackingPage = () => {
  const { products, addProduct, removeProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <div className='header-tracking-page'>
        <button onClick={() => navigate('/search')} className=''>
          Back
        </button>
        <h1>Tracking page</h1>
      </div>
      <hr />

      <ul className='list-tracking'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            addProduct={addProduct}
            removeProduct={removeProduct}
            product={product}
          />
        ))}
      </ul>
    </>
  );
};
