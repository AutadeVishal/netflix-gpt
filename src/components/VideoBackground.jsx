import React from 'react';

const VideoBackground = ({ trailer }) => {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {trailer?.key ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&rel=0`}
          title="Trailer Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center animate-pulse">
          <span className="text-white text-xl">
            Video not available
          </span>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;