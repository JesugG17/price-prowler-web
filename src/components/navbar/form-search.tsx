"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const FormSearch = () => {
  const [formState, setFormState] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const splittedFormState = formState.split(" ");
    const formattedFormState = splittedFormState.join("-");

    router.push(`/search?q=${formattedFormState}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="flex gap-2 border-2 border-gray-400 p-1 rounded"
    >
      <Image
        className="object-contain"
        src="/img/search.png"
        alt="search icon"
        width={24}
        height={24}
      />
      <input
        className="focus:outline-none"
        onChange={(e) => setFormState(e.target.value)}
        type="text"
        placeholder="¿Que producto quieres?"
      />
    </form>
  );
};
