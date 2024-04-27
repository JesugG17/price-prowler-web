"use server";

export async function getProduct(productName: string) {
  const resp = await fetch(`http://localhost:3002/api/search/products/${productName}`);
  const data = await resp.json();
  console.log(data);
  return data;
}