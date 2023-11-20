import './App.css';
import React from 'react';
import Router from './shared/Router';
import GlobalStyle from './GlobalStyle';

function App() {
  
  return (
    <>
  <GlobalStyle />
  <Router />
  </>

  ) // Ctrl + 클릭 하면 라우터로 이동
}

export default App;
