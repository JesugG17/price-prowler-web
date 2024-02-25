import { Product } from '@/common/types/products.interface';
import { FC, useState } from 'react';

export const ProductCard: FC<Props> = ({ product, removeProduct, addProduct }) => {
  const [isAddedToFavs, setIsAddedToFavs] = useState(false);

  const handleFav = () => {
    if (isAddedToFavs) {
      removeProduct(product.id);
    }

    if (!isAddedToFavs) {
      addProduct(product);
    }

    setIsAddedToFavs((prevState) => !prevState);
  };

  return (
    <li className='w-full max-w-xs p-4 flex gap-2 rounded shadow-lg sm:w-2/5 lg:w-2/6'>
      <img className='w-2/5 rounded-xl h-auto ' src={product.img} alt='Product image' />
      <div>
        <h4>
          <strong className='text-xl text-gray-600'>{product.name}</strong>
        </h4>
        <p className='text-sm opacity-60'>Store</p>
        <p>
          <strong className='text-gray-700'>${product.price}</strong>
        </p>
      </div>

      <div className='flex flex-col justify-between text-sm'>
        <a
          href={product.link}
          target='_blank'
          className='flex justify-center objet-contain w-8 h-8 rounded-full border-2 p-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-slate-200 transition-all duration-200'
        >
          <img src='/img/icon-web.svg' alt='' />
        </a>
        <button onClick={handleFav} className='rounded-full p-2'>
          {isAddedToFavs ? (
            <img src='/img/red-heart.png' alt='' />
          ) : (
            <img src='/img/heart.png' alt='' />
          )}
        </button>
      </div>
    </li>
  );
};

type Props = {
  product: Product;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
};
