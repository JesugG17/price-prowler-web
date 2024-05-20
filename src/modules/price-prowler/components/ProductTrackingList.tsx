import { api } from '@/common/services/api/api';
import { TrackingProduct, TrackingResponse } from '@/common/types/tracking.response';
import { FC } from 'react';
import toast from 'react-hot-toast';

export const ProductTrackingList: FC<Props> = ({ products, orderBy, remove }) => {
  const handleRemove = async (id: string) => {
    const { data } = await api.delete<TrackingResponse>(`/tracking/remove/${id}`);

    if (!data.ok) {
      toast.error(data.message!);
      return;
    }

    remove(id);
    toast.success(data.message!);
  };

  return (
    <div>
      <div className='flex justify-end p-4'>
        <div className='flex flex-col'>
          <label className='font-bold' htmlFor='order'>
            Ordenar por precio
          </label>
          <select onChange={orderBy} className='border-2 p-2 rounded'>
            <option disabled value=''>
              Seleccione
            </option>
            <option>Menor precio</option>
            <option>Mayor precio</option>
          </select>
        </div>
      </div>
      <ul className='grid grid-cols-5 gap-5  p-2'>
        {products.map((product) => (
          <li
            className='bg-white shadow rounded-tr rounded-t border-2 border-light-gray-custom p-2'
            key={product.id}
          >
            <figure className='flex justify-center'>
              <img
                className='rounded h-32 w-32 object-contain'
                src={product.img.includes('localhost') ? '/img/default-image.webp' : product.img}
              />
            </figure>
            <div className='flex flex-col gap-4 p-2'>
              <h4>{product.name}</h4>
              <span className='font-bold'>${product.currentPrice}</span>
              <a
                className='bg-white border-2 border-dark-primary p-1 rounded text-dark-primary text-center hover:bg-dark-primary hover:text-white transition-all duration-200'
                href={product.link}
                target='_blank'
              >
                Visitar
              </a>
              <button
                onClick={() => handleRemove(product.id)}
                className='bg-red-500 p-1 rounded border-2 border-white text-white hover:brightness-110 transition-all duration-300'
              >
                Eliminar
              </button>
              <span>Ultima vez monitoreado: {new Date().toISOString().split('T')[0]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  products: TrackingProduct[];
  orderBy: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  remove: (id: string) => void;
};
