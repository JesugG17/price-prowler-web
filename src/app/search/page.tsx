"use client";

import { Product } from "@/interfaces/product.interface";
import { getProduct } from "@/server-actions/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const productName = searchParams.get("q");

  useEffect(() => {
    getProduct(productName!).then(({ data }) => setProducts(data));
  }, [productName]);

  return (
    <div>
      <h1>Search page</h1>
      {products.map((product) => (
        <h4 key={product.link}>{product.name}</h4>
      ))}
    </div>
  );
}
