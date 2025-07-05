import React, { useEffect } from 'react';
import Header from './Header';
import { Suspense } from 'react';
const MainContainer = React.lazy(() => import('./MainContainer'));
const SecondaryContainer = React.lazy(() => import('./SecondaryContainer'));
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
const GPTSearch = React.lazy(() => import('./GPTSearch'));
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();

  return (
    <div >
      <Header />
      {showGPTSearch ? <div>
        <Suspense>
          <GPTSearch />
        </Suspense>
      </div> :
        (<>
          <Suspense fallback={<div>Loading...</div>}>
            <MainContainer />

            <SecondaryContainer />
          </Suspense>
        </>
        )
      }
    </div>
  );
};

export default Browse;
