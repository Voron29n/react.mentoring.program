import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Redirect, SearchMovie, UnknownPage } from 'components';

export type SearchParams = {
  searchQuery: string;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect redirectPath={'search'} />,
    errorElement: <UnknownPage />
  },
  {
    path: '/search',
    element: <SearchMovie />,
    children: [
      {
        path: ':searchQuery'
      }
    ]
  }
]);
