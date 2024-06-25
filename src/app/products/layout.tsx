import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elimr e-commerce | Products page",
  description:
    "Elimr is dedicated to providing high-quality products that meet your needs and exceed your expectations. Our commitment to excellence is reflected in everything we do",
};

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ProductsLayout;
