import { PropsWithChildren, useState, useContext, FC } from 'react';
import { ProductsAddedContext } from './ProductsAddedContext';
import { Product } from '../../types/products.interface';

export const ProductsAddedProvider: FC<Props> = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProductsAdded((prevState) => [product, ...prevState]);
  };

  const removeProduct = (productId: string) => {
    const newProductsAdded = productsAdded.filter((product) => product.id !== productId);
    setProductsAdded(newProductsAdded);
  };

  return (
    <ProductsAddedContext.Provider
      value={{
        products: productsAdded,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsAddedContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsAddedContext);

type Props = PropsWithChildren;
