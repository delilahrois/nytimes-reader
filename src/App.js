import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import Feed from '../src/components/Feed/Feed';
import FullPage from '../src/components/FullPage/FullPage';
import { getData } from './apiCalls';

const App = () => {

  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState([]);
  const [article, setArticle] = useState('');

  const getHomePg = async (selection) => {
    const data = await getData(selection);
    console.log(data)
    setHomeData(data.results);
    return homeData;
  }
  
  useEffect(() => {
    getHomePg('home');
  }, [])

  const displayArticle = (key) => {
    const chosenArticle = homeData.find(article => article.uri === key)
    setArticle(chosenArticle);
  }

  const filterNewsFeed = (e) => {
    getHomePg(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <Menu filterNewsFeed={filterNewsFeed}/>
      </div>
      <div className="main">
        <Header/>
        <Routes>
          <Route path="/" element={<Feed homeData={homeData} displayArticle={displayArticle} />}/>
          <Route path="/:id" element={<FullPage article={article} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
