import { useProducts } from '@/common/context/price-prowler/ProductsAddedProvider';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router';

export const TrackingPage = () => {
  const { products, addProduct, removeProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <>
      <div className='flex p-2'>
        <button onClick={() => navigate('/search')} className='px-3 bg-black text-white rounded'>
          Back
        </button>
        <h1 className='text-2xl font-bold flex-1 text-center'>Tracking page</h1>
      </div>
      <hr />

      <ul className='flex flex-wrap gap-5 justify-center '>
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
