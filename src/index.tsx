import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from '$components/App.tsx';

import * as styles from './style/style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
const { StrictMode } = React;

root.render(
  <StrictMode>
    <App style={styles} />
  </StrictMode>
);
