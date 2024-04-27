import { FC, PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

export const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={twJoin("w-[85%] max-w-7xl m-auto", className)}>
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  className?: string;
};
