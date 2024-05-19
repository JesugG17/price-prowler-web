import classNames from 'classnames';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ActiveLink: FC<Props> = ({ path, text }) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <li>
      <Link
        className={classNames(
          'text-white text-xl',
          isActive
            ? 'border-b-2 border-b-light-gray-custom'
            : 'after:content-[""] after:block after:m-auto after:transition-all after:duration-200 after:border-b-2 after:border-b-white after:scale-0 hover:after:scale-100'
        )}
        to={path}
      >
        {text}
      </Link>
    </li>
  );
};

type Props = {
  path: string;
  text: string;
};
