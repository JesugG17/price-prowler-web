import { FormEvent, useEffect, useState } from 'react';
import { Container } from '@/modules/ui/components/Container/Container';
import { Product } from '@/common/types/products.interface';
import { api } from '@/common/services/api/api';

import { ProductCard } from '../../components/ProductCard/ProductCard';
import { SkeletonProductCard } from '../../components/SkeletonProductCard/SkeletonProductCard';
import { ModalNeedAuth } from '../../components/Modal/ModalNeedAuth';
import { NoProductsFound } from '../../components/NoProductsFound/NoProductsFound';
import { Loading } from '@/modules/ui/components/Loading';
import { TrackingProduct } from '@/common/types/tracking.response';

export const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [trackingProducts, setTrackingProducts] = useState<TrackingProduct[]>([]);
  const [formState, setFormState] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalNeedAuthIsOpen, setModalNeedAuthIsOpen] = useState(false);

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

  const toggleModalNeedAuth = () => {
    setModalNeedAuthIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  useEffect(() => {
    api.get('/tracking/get-by-user').then((resp) => setTrackingProducts(resp.data.data));
  }, []);

  return (
    <section className='mt-16'>
      <Container flexColumn>
        <form onSubmit={onSearch}>
          <div className='flex justify-between items-center w-full border-2 mt-10 rounded'>
            <input
              className='p-2 flex-1 focus:outline-none'
              type='text'
              value={formState}
              disabled={isLoading}
              onChange={(event) => setFormState(event.target.value)}
              placeholder='Busca tus produtos aqui'
            />
            <button disabled={isLoading} className='bg-dark-primary p-2 rounded-r'>
              {isLoading ? (
                <Loading />
              ) : (
                <img className='w-8 h-8 invert' src='/img/search.png' alt='search icon' />
              )}
            </button>
          </div>
        </form>
        {products.length === 0 && !isLoading && <NoProductsFound />}
        <ul className='grid grid-cols-4 gap-4 mt-10'>
          {isLoading &&
            [...Array(9).fill(null)].map((_, index) => <SkeletonProductCard key={index} />)}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              openModal={toggleModalNeedAuth}
              tracks={trackingProducts}
            />
          ))}
        </ul>
        {modalNeedAuthIsOpen && <ModalNeedAuth toggleModal={toggleModalNeedAuth} />}
      </Container>
    </section>
  );
};
