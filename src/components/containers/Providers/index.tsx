import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useState } from 'react';
import { ILightboxProps } from 'components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';
import { handleLightboxMovieActions, LightboxContext } from 'context';

interface IProvidersProp {
  children?: JSX.Element | JSX.Element[];
}

export const Providers = ({ children }: IProvidersProp) => {
  const queryClient = new QueryClient();
  const [lightbox, setLightbox] = useState<ILightboxProps>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ReduxProvider store={store}>
          <LightboxContext.Provider
            value={{ lightbox, setLightbox, handleLightboxMovieActions }}
          >
            {children}
          </LightboxContext.Provider>
        </ReduxProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
