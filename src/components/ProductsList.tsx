// components/ProductsList.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/interfaces";

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  if (!products) return <div>No products available</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(
        ({ id, title, category, description, price, thumbnail }: IProduct) => (
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
  );
};

export default ProductsList;
