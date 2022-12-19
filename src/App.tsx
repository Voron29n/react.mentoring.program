import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Lightbox } from 'components';
import { ILightboxContext, LightboxContext } from 'context';
import { router } from 'utils/router';
import './style.scss';

export const App = () => {
  const { lightbox } = useContext<ILightboxContext>(LightboxContext);

  return (
    <>
      <RouterProvider router={router} />
      {!!lightbox && <Lightbox {...lightbox} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
