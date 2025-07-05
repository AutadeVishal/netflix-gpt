import React from 'react';

const ShimmerHero = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full px-12 bg-gradient-to-r from-black via-black/60 to-transparent text-white z-20 flex flex-col justify-center">
      <div className="w-2/3 h-12 bg-gray-700 rounded mb-6 animate-pulse" />
      <div className="w-1/2 h-6 bg-gray-600 rounded mb-4 animate-pulse" />
      <div className="flex gap-4 mt-2">
        <div className="w-28 h-10 bg-gray-700 rounded animate-pulse" />
        <div className="w-32 h-10 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default ShimmerHero;