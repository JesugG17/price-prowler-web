import { useNavigate } from 'react-router';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { TEST_PRODUCTS } from '@/common/constants/products';
import { useProducts } from '../../../../common/context/price-prowler/ProductsAddedProvider';
import './SearchPage.scss'

export const SearchPage = () => {
  const navigate = useNavigate();
  const { products, addProduct, removeProduct } = useProducts();

  return (
    <div className='main-container'>
      <div className='header-container'>
        <div className='container-logo'>
          <img src='/img/logo-priceprowler.svg' alt='' />
        </div>
        <h1 className='title'>Price Prowler</h1>
        <div
          onClick={() => products.length !== 0 && navigate('/tracking')}
          className='button-tracking'
        >
          <img src='/img/eye.png' alt='Hear icon' />
          {products.length !== 0 && (
            <div className='circle-tracking'>
              {products.length}
            </div>
          )}
        </div>
      </div>
      <div>
        <form className='search-container'>
          <input
            type='text'
            placeholder='Search a product'
          />
          <img src='/img/search.png' alt='search icon' />
        </form>
      </div>
      <ul className='list-product-card'>
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
