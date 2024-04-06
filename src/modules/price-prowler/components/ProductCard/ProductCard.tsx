import { Product } from '@/common/types/products.interface';
import { FC } from 'react';
import './ProductCard.scss';

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <li className='item-product'>
      <div className='product-info-container'>
        <figure className='item-img-container'>
          <img src={product.img} alt='Product image' />
        </figure>
        <div className='product-info'>
          <h4>{product.name}</h4>
          <div className='product-price-container'>
            <p>
              <strong>${product.price}</strong>
            </p>
            <p>
              <span>Vendido por mercado libre</span>
            </p>
          </div>
        </div>
      </div>
      <div className='accesibility-container'>
        <a href={product.link} target='_blank' className='product-link'>
          Visitar
        </a>
        <img src='/img/heart.png' alt='Heart icon' />
      </div>
    </li>
  );
};

type Props = {
  product: Product;
};
