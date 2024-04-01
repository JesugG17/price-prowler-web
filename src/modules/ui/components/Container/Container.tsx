import { FC, PropsWithChildren } from 'react';

export const Container: FC<Props> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

type Props = PropsWithChildren;
