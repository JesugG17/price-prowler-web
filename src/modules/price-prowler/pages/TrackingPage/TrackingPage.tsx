import { Container } from '@/modules/ui/components/Container/Container';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ProductTrackingList } from '../../components/ProductTrackingList';
import { api } from '@/common/services/api/api';
import { TrackingProduct } from '@/common/types/tracking.response';
import { Loading } from '@/modules/ui/components/Loading';

const TABS = {
  FIRST: 0,
  SECOND: 1,
};

export const TrackingPage = () => {
  const [selectedtab, setSelectedtab] = useState(0);
  const [products, setProducts] = useState<TrackingProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleTab = (tab: number) => {
    setSelectedtab(tab);
  };

  const handleOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'Menor precio') {
      const newProducts = products.sort((a, b) => a.currentPrice - b.currentPrice);
      setProducts([...newProducts]);
      return;
    }

    if (event.target.value === 'Mayor precio') {
      const newProducts = products.sort((a, b) => b.currentPrice - a.currentPrice);
      setProducts([...newProducts]);
      return;
    }
  };

  const removeFromWishList = (id: string) => {
    const newWishListProducts = products.filter((product) => product.id !== id);
    setProducts(newWishListProducts);
  };

  useEffect(() => {
    api
      .get('/tracking/get-by-user')
      .then((resp) => setProducts(resp.data.data))
      .catch(() => setIsLoading(false))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <div className='w-full bg-white rounded shadow min-h-70 border-2 mt-[100px] relative'>
        <div className='grid grid-cols-2'>
          <div
            onClick={() => handleTab(TABS.FIRST)}
            className={classNames(
              'text-center p-2 border-b-2 rounded border-r-2 hover:brightness-90 transition-all duration-300 cursor-pointer',
              selectedtab === TABS.FIRST ? 'bg-primary text-white' : 'bg-white'
            )}
          >
            Productos
          </div>
          <div
            onClick={() => handleTab(TABS.SECOND)}
            className={classNames(
              'text-center p-2 border-b-2 rounded border-r-2 pointer-events-none brightness-50 hover:brightness-90 transition-all duration-300 cursor-pointer',
              selectedtab === TABS.SECOND ? 'bg-primary text-white' : 'bg-white'
            )}
          >
            Historico (NO DISPONIBLE)
          </div>
        </div>
        {products.length === 0 && (
          <div className='flex flex-col justify-center items-center mt-4'>
            <h4 className='text-xl text-primary font-bold'>
              Aun no tienes nada agregado, ¡Empieza a agregar!
            </h4>
            <img className='w-24 h-24' src='/img/logo-priceprowler.svg' alt='priceprowler logo' />
          </div>
        )}
        {isLoading && <Loading />}
        {selectedtab === TABS.FIRST && !isLoading && products.length !== 0 && (
          <ProductTrackingList
            products={products}
            orderBy={handleOrderBy}
            remove={removeFromWishList}
          />
        )}
      </div>
    </Container>
  );
};
