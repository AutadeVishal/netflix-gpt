import { useDispatch, useSelector } from "react-redux";
import { options } from "../assets/APIS";
import { useEffect } from "react";
import { addPopularMovies} from "../utils/moviesSlice";
const usePopularMovies=()=>{
      const dispatch=useDispatch();
    
  //this options is the options having api key and other details given by TMDB
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }
  useEffect(() => {
    
    getPopularMovies();
  }, [])
}
export default usePopularMovies;