// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Elimr
        </Link>
        <div>
          <Link href="/" className="mx-2 text-white hover:underline">
            Home
          </Link>
          <Link href="/products" className="mx-2 text-white hover:underline">
            Products
          </Link>
          <Link href="/about" className="mx-2 text-white hover:underline">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
