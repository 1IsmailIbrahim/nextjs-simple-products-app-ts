"use client"; // Error components must be Client Components

import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <div className="max-w-5xl my-8 mx-auto p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg mb-6 max-w-2xl">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
        >
          Try again
        </button>
      </div>
    </main>
  );
};
export default Error;
