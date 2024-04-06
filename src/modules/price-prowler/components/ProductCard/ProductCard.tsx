import { Product } from '@/common/types/products.interface';
import { FC, useState } from 'react';
import './ProductCard.scss';

export const ProductCard: FC<Props> = ({ product }) => {
  const [isAddedToFavs, setIsAddedToFavs] = useState(false);

  const handleFav = () => {
    setIsAddedToFavs((prevState) => !prevState);
  };

  return (
    <li className='item-product'>
      <img className='product-img' src={product.img} alt='Product image' />
      <div className='product-info'>
        <h4>
          <strong>{product.name}</strong>
        </h4>
        <p className='product-info-store'>Store</p>
        <p>
          <strong>${product.price}</strong>
        </p>
      </div>

      <div className='container-actions-tracking'>
        <a href={product.link} target='_blank'>
          <img src='/img/icon-web.svg' alt='' />
        </a>
        <button onClick={handleFav}>
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
};
