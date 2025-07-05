import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const  Browse =React.lazy(()=>import('./Browse')) 
const  Login = React.lazy(()=>import('./Login'));
import { Suspense } from 'react';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Suspense fallback={<h1>Loading...</h1>} ><Login /></Suspense>,
  },
  {
    path: '/browse',
    element: <Suspense fallback={<h1>Loading....</h1>}><Browse /></Suspense>,
  },
]);

const Body = () => {
  return (
    <div className="font-sans">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
