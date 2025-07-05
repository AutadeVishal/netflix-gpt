import React from 'react';
import { CDNImageURL } from '../assets/images';

const MovieCard = ({ posterPath ,onClick}) => {
  return (
    <div className="w-36 flex-shrink-0 hover:scale-105 transition-transform duration-200" >
      <img onClick={onClick}
        src={CDNImageURL + posterPath}
        alt="Movie Poster"
        className="rounded-lg shadow-md w-full"
      />
    </div>
  );
};

export default MovieCard;
