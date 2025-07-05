import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../assets/APIS";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const movie    = useSelector((store) => store.movies.showMovieVideo);

  useEffect(() => {
    if (!movie?.id) return;

    async function fetchTrailer() {
      try {
        const res  = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
          options
        );
        const data = await res.json();

        // pick the first YouTube trailer
        const trailer = data.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        ) || null;

        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Error fetching trailer:", err);
        dispatch(addTrailerVideo(null));
      }
    }

    fetchTrailer();
  }, [movie, dispatch]);
};

export default useMovieTrailer;