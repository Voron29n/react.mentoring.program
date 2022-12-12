import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@fontsource/montserrat';
import { Providers } from 'components';

require('normalize-css');
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
