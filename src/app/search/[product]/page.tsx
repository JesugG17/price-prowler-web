import { ProductsList } from '@/components/products/products-list';
import { Product } from '@/interfaces/product.interface';
import { Suspense } from 'react';

const getProducts = async (productName: string): Promise<Product[]> => {
  const resp = await fetch(`http://localhost:3002/api/search/products/${productName}`);
  const { data: products } = await resp.json();
  return products;
};

export default async function Search({ params }: Props) {
  const products = await getProducts(params.product);
  return (
    <Suspense fallback={<div className="w-full h-screen bg-black bg-opacity-25 absolute top-0 right-0">LOADING</div>}>
      <div>
        <h1>Search page</h1>
        <ProductsList products={products} />
      </div>
    </Suspense>
  );
}

type Props = {
  params: { product: string };
};
