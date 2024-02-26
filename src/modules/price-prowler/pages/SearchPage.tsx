import { useNavigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { TEST_PRODUCTS } from '@/common/constants/products';
import { useProducts } from '../../../common/context/price-prowler/ProductsAddedProvider';

export const SearchPage = () => {
  const navigate = useNavigate();
  const { products, addProduct, removeProduct } = useProducts();

  return (
    <div className='flex flex-col gap-3 p-4'>
      <div className='flex items-center justify-between'>
        <div className='w-10 objet-contain'>
          <img src='/img/logo-priceprowler.svg' alt='' />
        </div>
        <h1 className='text-center text-3xl font-custom font-bold flex-1'>Price Prowler</h1>
        <div
          onClick={() => products.length !== 0 && navigate('/tracking')}
          className='p-2 relative border-2 border-black rounded'
        >
          <img className='w-6' src='/img/eye.png' alt='Hear icon' />
          {products.length !== 0 && (
            <div className='w-6 h-6 flex absolute bottom-7 left-7 justify-center rounded-full bg-red-600 text-white'>
              {products.length}
            </div>
          )}
        </div>
      </div>
      <div>
        <form className='flex p-2 bg-stone-100 rounded-3xl'>
          <input
            className='flex-1 bg-transparent pl-3 italic focus:outline-none'
            type='text'
            placeholder='Search a product'
          />
          <img className='mr-2' src='/img/search.png' alt='search icon' />
        </form>
      </div>
      <ul className='grid grid-cols-1 gap-2 justify-center sm:grid-cols-2 lg:grid-cols-3'>
        {TEST_PRODUCTS.map((product, index) => (
          <ProductCard
            product={product}
            addProduct={addProduct}
            removeProduct={removeProduct}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};
