import { Product } from '@/common/types/products.interface';
import { FC, useEffect, useState } from 'react';
import './ProductCard.scss';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { TrackingProduct, TrackingResponse } from '@/common/types/tracking.response';
import { api } from '@/common/services/api/api';
import toast from 'react-hot-toast';

export const ProductCard: FC<Props> = ({ product, openModal, tracks }) => {
  const slicedProductName = product.name.length > 50 ? product.name.slice(0, 50) : product.name;
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [productState, setProductState] = useState(product);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const checkIfIsProductAdded = () => {
    if (tracks.length === 0) return;

    const tracksLink = tracks.map((track) => track.link.split('?')[0]);

    const newIsProductAdded = tracksLink.includes(product.link.split('?')[0]);

    const track = tracks.find(
      (track) => track.link.split('?')[0] === product.link.split('?')[0]
    ) as TrackingProduct;

    if (!track) return;

    const newProductState = {
      ...product,
      id: track.id as string,
    };

    setProductState(newProductState);
    setIsProductAdded(newIsProductAdded);
  };

  const addProductToWishList = async () => {
    const newTrackingProduct = {
      link: product.link,
      img: product.img,
      currentPrice: product.price,
    };

    const { data } = await api.post<TrackingResponse>('/tracking/add', newTrackingProduct);

    if (!data.ok) return;

    const trackingProduct = data.data as TrackingProduct;

    const newProductState = {
      ...productState,
      id: trackingProduct.id,
    };

    toast.success(data.message!);
    setProductState(newProductState);
    setIsProductAdded((prevState) => !prevState);
  };

  const removeProductFromWishList = async () => {
    const { data } = await api.delete<TrackingResponse>(`/tracking/remove/${productState.id}`);

    if (!data.ok) {
      toast.error(data.message!);
      return;
    }

    toast.success(data.message!);
    setIsProductAdded(false);
  };

  useEffect(() => {
    checkIfIsProductAdded();
  }, []);

  const productImg = product.img.includes('localhost') ? '/img/default-image.webp' : product.img;

  return (
    <li className='item-product border-2'>
      <div className='product-info-container'>
        <figure className='item-img-container'>
          <img src={productImg} alt='Product image' />
        </figure>
        <div className='product-info'>
          <h4>{slicedProductName}</h4>
          <div className='product-price-container'>
            <p>
              <strong>${product.price}</strong>
            </p>
            <p>
              <span>
                Vendido por <strong>{product.shop}</strong>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='accesibility-container bg-primary'>
        <a
          href={product.link}
          target='_blank'
          className=' bg-dark-primary border-2 border-white rounded-full px-4 text-white hover:brightness-110 transition-all duration-300'
        >
          Visitar
        </a>
        {isProductAdded ? (
          <img
            onClick={removeProductFromWishList}
            src='/img/filled-heart-icon.png'
            alt='filled heart icon'
          />
        ) : (
          <img
            onClick={() => {
              if (!isAuthenticated) {
                openModal();
                return;
              }
              addProductToWishList();
            }}
            src='/img/heart.png'
            alt='Heart icon'
          />
        )}
      </div>
    </li>
  );
};

type Props = {
  product: Product;
  openModal: () => void;
  tracks: TrackingProduct[];
};
