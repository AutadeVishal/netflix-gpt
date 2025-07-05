import React, { Suspense } from 'react';

const GPTSearchBar = React.lazy(() => import('./GPTSearchBar'));
const GPTMovieSuggestions = React.lazy(() => import('./GPTMovieSuggestions'));
import { netFlixBackground } from '../assets/images';

const GPTSearch = () => {
  return (
    <div className="relative w-screen h-screen overflow-y-auto">
      {/* full-screen background */}
      <img
        src={netFlixBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* content wrapper: flex-col h-full to allow scrolling of bottom */}
      <div className="relative z-10 flex flex-col h-full">
        <Suspense
          fallback={
            <div className="text-white text-center mt-20 text-xl">Loading…</div>
          }
        >
          <GPTSearchBar />
        </Suspense>

        {/* make suggestions area scrollable */}
        <div className="flex-grow overflow-y-auto">
          <Suspense
            fallback={
              <div className="text-white text-center mt-10 text-lg">
                Loading suggestions…
              </div>
            }
          >
            <GPTMovieSuggestions />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;