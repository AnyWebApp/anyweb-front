import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';

/* import Home from './pages/Home/Home'; */
import App from './App';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

