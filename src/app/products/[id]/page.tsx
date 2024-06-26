import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

interface IProps {
  params: { id: string };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const id = params.id;
  const { title, description, images } = await fetch(
    `https://dummyjson.com/products/${id}`
  ).then((res) => res.json());

  return {
    title,
    description,
    openGraph: {
      images,
    },
  };
}

async function getProducts(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ProductPage = async ({ params }: IProps) => {
  const { title, category, description, price, thumbnail } = await getProducts(
    params.id
  );
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 p-16 text-center">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-gray-400">
          Discover the best products at Elimr
        </p>
      </header>

      <div className="flex-grow">
        <div className="max-w-5xl my-8 mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-2 text-gray-400">
                  Category: {category}
                </p>
                <p className="text-base mb-4">{description}</p>
                <p className="text-2xl font-semibold mb-4">${price}</p>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 p-4 text-center text-gray-400">
        <p>&copy; 2024 Elimr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
