"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { twJoin } from "tailwind-merge";

export const ActiveLink: FC<Props> = ({ path, text }) => {
  const currentPathname = usePathname();

  const isActive = currentPathname === path;

  return (
    <li
      className={twJoin(
        "py-4 border-b-2 transition-all duration-200",
        isActive && "border-b-blue-500"
      )}
      key={path}
    >
      <Link href={path}>{text}</Link>
    </li>
  );
};

type Props = {
  text: string;
  path: string;
};
