import { Product } from '@/common/types/products.interface';
import { FC } from 'react';
import './ProductCard.scss';
import { useAuthStore } from '@/store/auth/useAuthStore';

export const ProductCard: FC<Props> = ({ product, openModal }) => {
  const slicedProductName = product.name.length > 50 ? product.name.slice(0, 50) : product.name;
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <li className='item-product border-2'>
      <div className='product-info-container'>
        <figure className='item-img-container'>
          <img src={product.img} alt='Product image' />
        </figure>
        <div className='product-info'>
          <h4>{slicedProductName}</h4>
          <div className='product-price-container'>
            <p>
              <strong>${product.price}</strong>
            </p>
            <p>
              <span>
                Vendido por <strong>{product.shop}</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='accesibility-container'>
        <a href={product.link} target='_blank' className='product-link'>
          Visitar
        </a>
        <img
          onClick={() => {
            if (!isAuthenticated) {
              openModal();
            }
          }}
          src='/img/heart.png'
          alt='Heart icon'
        />
      </div>
    </li>
  );
};

type Props = {
  product: Product;
  openModal: () => void;
};
