import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Components/Loading';
import Main from './Components/Pages/Main';
import Home from './Components/Home';
import { createGlobalStyle } from 'styled-components';

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
