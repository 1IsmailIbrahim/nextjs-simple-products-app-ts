export const dynamic = "force-dynamic";

export async function GET(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
