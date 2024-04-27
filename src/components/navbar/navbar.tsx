import Image from "next/image";
import { Container } from "../container";
import { ActiveLink } from "./active-link";
import Link from "next/link";
import { FormSearch } from "./form-search";

const navOptions = [
  { text: "Inicio", path: "/" },
  { text: "Buscador", path: "/search" },
  { text: "Monitoreo", path: "/tracking" },
];

export const Navbar = () => {
  return (
    <header className="shadow-lg fixed w-full bg-white">
      <Container className="flex justify-between">
        <nav className="flex items-center gap-5">
          <Link href="/">
            <Image
              src="/img/logo-priceprowler.svg"
              alt="logo price-prowler"
              width={48}
              height={48}
            />
          </Link>
          <ul className="flex gap-7">
            {navOptions.map((navOption) => (
              <ActiveLink key={navOption.path} {...navOption} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <FormSearch />
          <button className="bg-black text-white p-2 rounded">Sign in</button>
        </div>
      </Container>
    </header>
  );
};
