import { TEST_PRODUCTS } from '@/common/constants/products';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  link: string;
}

export const HomePage = () => {
  const [productsAdded, setProductsAdded] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProductsAdded((prevState) => [product, ...prevState]);
  };

  const removeProduct = (productId: string) => {
    const newProductsAdded = productsAdded.filter((product) => product.id !== productId);
    setProductsAdded(newProductsAdded);
  };

  return (
    <div className='flex flex-col gap-3 p-4'>
      <div className='flex items-center justify-between'>
        <div className='w-10 objet-contain'>
          <img src="/img/logo-priceprowler.svg" alt="" />
        </div>
        <h1 className='text-center text-3xl font-custom font-bold flex-1'>Price Prowler</h1>
        <div className='p-2 relative border-2 border-black rounded'>
          <img className='w-6' src='/img/eye.png' alt='Hear icon' />
          {productsAdded.length !== 0 && (
            <div className='w-6 h-6 flex absolute bottom-7 left-7 justify-center rounded-full bg-red-600 text-white'>
              {productsAdded.length}
            </div>
          )}
        </div>
      </div>
      <form className='flex p-2 bg-stone-100 rounded-3xl'>
        <input
          className='flex-1 bg-transparent pl-3 italic focus:outline-none'
          type='text'
          placeholder='Search a product'
        />
        <img className='mr-2' src='/img/search.png' alt='search icon' />
      </form>
      <ul className='flex flex-wrap gap-5 justify-center '>
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
