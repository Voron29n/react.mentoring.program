import React, { useEffect } from 'react';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { SearchMovie, UnknownPage } from 'components';

interface IRedirectProps {
  redirectPath: string;
}

export type SearchParams = {
  searchQuery: string;
};

const Redirect = ({ redirectPath }: IRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(redirectPath);
  }, []);

  return <div>Redirected</div>;
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
