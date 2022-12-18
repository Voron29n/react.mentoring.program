import React, { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ILightboxProps } from 'components';
import { handleLightboxMovieActions, LightboxContext } from 'context';
import { store } from 'store';

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
