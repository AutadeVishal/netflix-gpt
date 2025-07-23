import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  useMovieTrailer();
  const movie   = useSelector((store) => store.movies.showMovieVideo);
  const trailer = useSelector((store) => store.movies.trailerVideo);

  
  return (
    <div className="relative w-full h-screen">
      <VideoBackground trailer={trailer} />
      <VideoTitle movie={movie} />
       <div className="relative z-50">
  
</div>
    </div>
  );
};

export default MainContainer;