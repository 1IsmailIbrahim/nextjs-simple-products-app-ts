const ProductsSkeleton = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div id="products" className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-700 h-40 w-40 rounded-lg mb-4"></div>
                  <div className="h-8 bg-gray-700 rounded w-4/5 mb-2"></div>
                  <div className="h-8 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-gray-700 rounded w-2/3 mb-2"></div>
                  <div className="h-8 bg-gray-700 rounded w-4/5 mb-2"></div>
                  <div className="h-12 bg-gray-700 rounded-lg w-2/3 mt-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default ProductsSkeleton;
