import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import './Container.scss';

export const Container: FC<Props> = ({
  children,
  center,
  centerMain,
  centerCross,
  flex,
  flexColumn,
}) => {
  return (
    <div
      className={classNames('app-container', {
        center: center && 'center',
        'center-main': centerMain,
        'center-cross': centerCross,
        flex: flex,
        'flex-column': flexColumn,
      })}
    >
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  center?: boolean;
  centerMain?: boolean;
  centerCross?: boolean;
  flex?: boolean;
  flexColumn?: boolean;
};
