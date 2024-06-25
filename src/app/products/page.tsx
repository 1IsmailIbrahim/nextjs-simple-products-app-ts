import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductsPage = async () => {
  const { products } = await getProducts();
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Our Products</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Discover our wide range of premium products. Quality and satisfaction
          guaranteed.
        </p>
      </section>
      <section id="products" className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(
            ({
              id,
              title,
              category,
              description,
              price,
              thumbnail,
            }: IProduct) => (
              <div
                key={id}
                className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={thumbnail}
                    alt={title}
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p className="text-lg text-gray-400 mb-2">{category}</p>
                  <p className="text-base mb-4 text-center">{description}</p>
                  <p className="text-xl font-semibold mb-4">${price}</p>
                  <Link
                    href={`/products/${id}`}
                    className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto py-4 mt-16 text-center border-t border-gray-700">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Elimr. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default ProductsPage;
