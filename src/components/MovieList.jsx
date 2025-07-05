import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { updateNewMovieVideo } from '../utils/moviesSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const isGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
  if (!movies) return null;

  const handleCardClick = (movie) => {
    dispatch(updateNewMovieVideo(movie));
  if(isGPTSearch)  dispatch(toggleGPTSearchView());
  };

  return (
    <section className="px-6 mb-6">
      <h2 className="text-white text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
         movie.poster_path &&  <MovieCard /* to remove  non poster wale */
            key={movie.id}
            onClick={() => handleCardClick(movie)}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;