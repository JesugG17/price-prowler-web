import { createContext } from 'react';
import { Product } from '../../types/products.interface';

type ContextSchema = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
};

export const ProductsAddedContext = createContext<ContextSchema>({} as ContextSchema);
