import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/montserrat';
import { App } from 'App';
import { Providers } from 'Providers';

require('normalize-css');
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
