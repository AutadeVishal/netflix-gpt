import React, { useState } from "react";
import { useSelector } from "react-redux";
import { lang } from "../assets/languageConstants";

const VideoTitle = ({ movie }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [playMsg, setPlayMsg]   = useState(false);
  const currLanguage = useSelector((store) => store.config.lang);

  if (!movie) return null;

  const {
    original_title,
    overview,
    original_language,
    popularity,
    vote_average,
  } = movie;

  const handleMoreInfo = () => {
    setPlayMsg(false);
    setMoreInfo(true);
    setTimeout(() => setMoreInfo(false), 5000);
  };

  const handlePlay = () => {
    setMoreInfo(false);
    setPlayMsg(true);
    setTimeout(() => setPlayMsg(false), 2000);
  };

  return (
    <div
      className="
        absolute top-0 left-0 h-full w-full
        flex flex-col justify-center px-12
        bg-gradient-to-r from-black via-black/60 to-transparent
        text-white z-20
      "
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
        {original_title}
      </h1>

      <p className="text-lg max-w-xl mb-6">{overview}</p>

      {playMsg && (
        <h2 className="font-bold my-6 text-2xl">
          {lang[currLanguage].playButtonMessage}
        </h2>
      )}

      {moreInfo && (
        <div className="rounded-lg mb-6 max-w-md backdrop-blur-sm p-4 bg-white/10">
          <ul className="space-y-2 text-base">
            <li>
              <strong>{lang[currLanguage].language}:</strong>{" "}
              {original_language.toUpperCase()}
            </li>
            <li>
              <strong>{lang[currLanguage].popularity}:</strong>{" "}
              {popularity.toFixed(1)}M
            </li>
            <li>
              <strong>{lang[currLanguage].rating}:</strong> ⭐{" "}
              {vote_average}
            </li>
          </ul>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={handlePlay}
          className="
            bg-white text-black px-6 py-3 rounded
            hover:bg-gray-200 text-lg font-semibold
          "
        >
          {lang[currLanguage].playButton}
        </button>
        <button
          onClick={handleMoreInfo}
          className="
            bg-gray-700 text-white px-6 py-3 rounded
            hover:bg-gray-600 text-lg font-semibold
          "
        >
          ℹ {lang[currLanguage].moreInfoButton}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;