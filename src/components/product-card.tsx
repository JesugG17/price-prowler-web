import { Product } from '@/interfaces/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const DEFAULT_IMG = '/img/default-product.webp';

export const ProductCard: FC<Props> = ({ product }) => {
  const { name, link, price, img } = product;

  const isBase64Image = img.includes('base64');

  return (
    <li className="h-full">
      <div className="relative h-full flex w-96 flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div>
          <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <Image
              src={isBase64Image ? DEFAULT_IMG : img}
              alt={`${name} image`}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col gap-2">
            <p className="block text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">{name}</p>
            <p className="block font-bold text-base leading-relaxed text-blue-gray-900 antialiased">${price}</p>
            <Link
              href={link}
              target="_blank"
            >
              Visit product
            </Link>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  );
};

type Props = {
  product: Product;
};
