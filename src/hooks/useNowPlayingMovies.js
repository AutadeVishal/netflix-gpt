import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../assets/APIS";
import { addNowPlayingMovies, updateNewMovieVideo } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  

  async function fetchNowPlaying() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await res.json();

      // Store the list
      dispatch(addNowPlayingMovies(data.results));

      // Select the first movie by default
      if (data.results.length > 0) {
        dispatch(updateNewMovieVideo(data.results[0]));
      }
    } catch (err) {
      console.error("Error fetching now playing movies:", err);
    }
  }
  useEffect(() => {
     fetchNowPlaying();
  }, [dispatch]);
};

export default useNowPlayingMovies;