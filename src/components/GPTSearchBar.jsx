import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { lang } from '../assets/languageConstants';
import { useHandleGPTClick } from '../hooks/useHandleGPTClick';

const GPTSearchBar = () => {
  const inputRef = useRef(null);
  const handleGPTSearchClick = useHandleGPTClick();
  const currentLang = useSelector((s) => s.config.lang);

  return (
    <div className="flex justify-center pt-24 px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          w-full max-w-3xl flex gap-4
          bg-white/20 backdrop-blur-md
          border border-white/30 rounded-2xl
          shadow-lg p-4
        "
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={lang[currentLang].gptSearchPlaceholder}
          className="
            flex-1 p-3 rounded-lg
            bg-white/80 text-black
            focus:outline-none focus:ring-2
            focus:ring-red-500
          "
        />
        <button
          type="button"
          onClick={() => handleGPTSearchClick(inputRef)}
          className="
            px-6 py-3 bg-red-600 hover:bg-red-700
            text-white rounded-lg font-semibold
            transition
          "
        >
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;