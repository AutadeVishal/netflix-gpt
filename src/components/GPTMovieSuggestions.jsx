import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((s) => s.gpt);
  if (!movieNames?.length) return null;

  return (
    <div className="px-4 pt-6 pb-12">
      <div
        className="
          mx-auto max-w-5xl space-y-8
          bg-white/20 backdrop-blur-lg
          border border-white/30 rounded-2xl
          shadow-xl p-6
        "
      >
        {movieNames.map((name, idx) =>
          movieResults[idx]?.length ? (
            <MovieList key={name} title={name} movies={movieResults[idx]} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;