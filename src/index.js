import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './Components/Home';

const GlobalStyle =createGlobalStyle`
  body {
    background-color: black;
  }
`;

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
