import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const getProducts = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://dummyjson.com";
  const res = await fetch(`${apiUrl}/products?limit=3`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Home = async () => {
  const { products } = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900 text-white p-8">
      <section className="flex flex-col items-center text-center mt-12">
        <h2 className="text-5xl font-bold mb-4">Welcome to Elimr</h2>
        <p className="text-lg mb-6 max-w-2xl">
          Discover our exclusive collection of premium products. Quality and
          satisfaction guaranteed.
        </p>
        <Link
          href="/products"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
        >
          Shop Now
        </Link>
      </section>

      <section id="products" className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(({ id, title, description, thumbnail }: IProduct) => (
            <div
              key={id}
              className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            >
              <Link href={`/products`} className="flex flex-col items-center">
                <Image
                  src={thumbnail}
                  alt={title}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-base mb-4 text-center">{description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Link
        href="/products"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
      >
        See more products
      </Link>

      <section id="contact" className="w-full max-w-5xl mx-auto mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-4">Email: support@elimr.com</p>
        <p className="text-lg mb-4">Phone: +123 456 7890</p>
        <p className="text-lg mb-4">Address: 123 Elimr St, City, Country</p>
      </section>

      <footer className="w-full max-w-5xl mx-auto py-4 text-center border-t border-gray-700">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Elimr. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Home;
