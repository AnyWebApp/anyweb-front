import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';

/* import Home from './pages/Home/Home'; */
import App from './App';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

