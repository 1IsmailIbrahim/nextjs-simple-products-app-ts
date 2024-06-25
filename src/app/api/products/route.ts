export const dynamic = "force-dynamic";

export async function GET() {
  const res = await (await fetch("https://dummyjson.com/products")).json();
  return res;
}
