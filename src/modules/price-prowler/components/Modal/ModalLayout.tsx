import { FC, PropsWithChildren, useEffect, useRef } from 'react';

export const ModalLayout: FC<Props> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!modalRef.current) return;

      if (modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className='w-full cursor-pointer h-screen fixed top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center'
    >
      <div onClick={(e) => e?.stopPropagation()} className='bg-white rounded p-4 w-4/5 max-w-md'>
        {children}
      </div>
    </div>
  );
};

type Props = PropsWithChildren & {
  onClose: () => void;
};
