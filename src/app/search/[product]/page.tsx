import { ProductsList } from '@/components/products/products-list';
import { Product } from '@/interfaces/product.interface';
import { Suspense } from 'react';
import Loading from './loading';

const getProducts = async (productName: string): Promise<Product[]> => {
  const resp = await fetch(`http://localhost:3002/api/search/products/${productName}`, { cache: 'no-store' });
  const { data: products } = await resp.json();
  return products;
};

export default async function Search({ params }: Props) {
  const products = await getProducts(params.product);
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-2">
        <ProductsList products={products} />
      </div>
    </Suspense>
  );
}

type Props = {
  params: { product: string };
};
