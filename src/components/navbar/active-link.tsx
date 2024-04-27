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
        "py-6 border-b-2 transition-all duration-200 hover:border-b-gray-500",
        isActive ? "border-b-blue-500" : "border-b-transparent"
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
