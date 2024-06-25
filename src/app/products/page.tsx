import React, { Suspense } from "react";
import ProductsList from "@/components/ProductsList";
import ProductsSkeleton from "@/components/ProductsSkeleton";
import { GET } from "../api/products/route";

// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const ProductsPage = async () => {
  const { products } = await GET();
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
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsList products={products} />
        </Suspense>
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
