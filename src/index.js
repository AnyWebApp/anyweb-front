import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';


ReactDOM.render(
  <Provider store={store} >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);

