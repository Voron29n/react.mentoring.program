import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/montserrat';
import App from './App';

require('normalize-css');

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
