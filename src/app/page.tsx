import Image from 'next/image';

export default function Home() {
  return (
    <section className="h-screen flex-col-center">
      <h4 className="text-4xl text-center">
        Busca tus productos en un solo <br /> <strong>CLICK</strong>
      </h4>
      <Image
        src="/img/homepage.jpg"
        alt="home page photo"
        width={350}
        height={350}
      />
      <button className="p-3 bg-violet-500 text-white rounded-md hover:brightness-110 transition-all duration-200">Empezar a buscar</button>
    </section>
  );
}
