import Image from "next/image";
import { Container } from "./container";
import { ActiveLink } from "./active-link";

const navOptions = [
  { text: "Inicio", path: "/" },
  { text: "Buscador", path: "/search" },
  { text: "Monitoreo", path: "/Tracking" },
];

export const Navbar = () => {
  return (
    <header className="shadow-lg">
      <Container className="flex justify-between">
        <nav className="flex items-center gap-5">
          <Image
            src="/img/logo-priceprowler.svg"
            alt="logo price-prowler"
            width={32}
            height={32}
          />
          <ul className="flex gap-7">
            {navOptions.map((navOption) => (
              <ActiveLink key={navOption.path} {...navOption} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <form className="flex gap-2 border-2 border-gray-400 p-1 rounded">
            <Image
              className="object-contain"
              src="/img/search.png"
              alt="search icon"
              width={24}
              height={24}
            />
            <input type="text" placeholder="Search" />
          </form>
          <button className="bg-black text-white p-2 rounded">Sign in</button>
        </div>
      </Container>
    </header>
  );
};
