import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import Feed from '../src/components/Feed/Feed';
import FullPage from '../src/components/FullPage/FullPage';

const App = () => {

  return (
    <div className="App">
      <div>
        <Menu/>
      </div>
      <div className="main">
        <Header/>
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/:id" element={<FullPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
