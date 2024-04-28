import { Product } from '@/interfaces/product.interface';
import React, { FC } from 'react';
import { ProductCard } from '../product-card';
import { Container } from '../container';

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <Container>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.link}
            product={product}
          />
        ))}
      </ul>
    </Container>
  );
};

type Props = {
  products: Product[];
};
