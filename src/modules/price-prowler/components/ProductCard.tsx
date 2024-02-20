import { FC, useState } from 'react';
import { Product } from '../pages/HomePage';

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
    <li className='w-4/5 p-2 flex flex-col gap-3 rounded shadow-lg'>
      <img className='w-full rounded h-auto' src={product.img} alt='Product image' />
      <h4>
        <strong>{product.name}</strong>
      </h4>
      <p className='text-sm opacity-60'>Product description goes here</p>
      <p>
        Price: <strong className='text-violet-500'>${product.price}</strong>
      </p>
      <div className='flex justify-between text-sm'>
        <a
          href={product.link}
          target='_blank'
          className='rounded-full border-2 p-2 border-violet-600 text-violet-500 hover:bg-violet-600 hover:text-slate-200 transition-all duration-200'
        >
          Visit product
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
