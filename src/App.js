import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News/News';
import TopHeadLine from './components/TopHeadLine/TopHeadLine';
import Fragment from './components/Fragment/Fragment';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <h2>React Bootstrap </h2>
      <Header></Header>
      <News> </News>
      <Fragment></Fragment>
      <TopHeadLine></TopHeadLine>
    </div>
  );
}

export default App;
