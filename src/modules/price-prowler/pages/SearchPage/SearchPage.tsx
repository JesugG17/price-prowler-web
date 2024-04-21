import { FormEvent, useEffect, useState } from 'react';
import { Container } from '@/modules/ui/components/Container/Container';
import { Product } from '@/common/types/products.interface';
import { api } from '@/common/services/api/api';

import './SearchPage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { SkeletonProductCard } from '../../components/SkeletonProductCard/SkeletonProductCard';

export const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formState, setFormState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = async (event: FormEvent) => {
    event.preventDefault();
    if (formState.length === 0) return;
    setIsLoading(true);

    const splittedProductName = formState.split(' ');
    const formattedProductName = splittedProductName.join('-');

    const { data } = await api.get(`/search/products/${formattedProductName}`);

    setFormState('');
    setProducts(data.data);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  return (
    <section className='search-container'>
      <Container flexColumn>
        <h1 className='search-title'>Search page</h1>
        <div>
          <form onSubmit={onSearch} className='search-form'>
            <div className='form-input-container'>
              <input
                disabled={isLoading}
                value={formState}
                onChange={(event) => setFormState(event.target.value)}
                placeholder='Busca tus productos aqui'
              />
              <button disabled={isLoading}>
                <img src='/img/search.png' alt='search icon' />
              </button>
            </div>
            <div className='search-select-container'>
              <label>Mostrar los primeros: </label>
              <select>
                {[10, 15, 20, 30].map((number) => (
                  <option key={number}>{number}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <ul className='list-product-card'>
          {isLoading &&
            [...Array(9).fill(null)].map((_, index) => <SkeletonProductCard key={index} />)}
          {/* {products.length === 0 && <NoProductsFound />} */}
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
