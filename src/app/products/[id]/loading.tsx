const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-200 bg-gray-700 rounded-lg animate-pulse"></div>
      <div className="max-w-5xl min-h-500 mx-auto p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="w-500 h-500 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="h-8 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-700 rounded mb-2 animate-pulse w-1/3"></div>
              <div className="h-4 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-8 bg-gray-700 rounded mb-4 animate-pulse w-1/4"></div>
            </div>
            <div className="h-12 mt-64 bg-blue-600 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingSkeleton;
