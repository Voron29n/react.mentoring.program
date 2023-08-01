import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Lightbox } from 'components';
import { useLightboxContext } from 'hooks';
import { router } from 'utils/router';
import './style.scss';

export const App = () => {
  const {
    state: { lightbox }
  } = useLightboxContext();

  return (
    <>
      <RouterProvider router={router} />
      {!!lightbox && <Lightbox {...lightbox} />}
    </>
  );
};
