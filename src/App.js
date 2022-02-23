import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { getData } from './apiCalls';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import Feed from '../src/components/Feed/Feed';

const App = () => {
  // const [homeData, setHomeData] = useState([]);

  // const getHomePg = async () => {
  //   const data = await getData('home')
  //   setHomeData(data.results)
  //   return homeData;
  // }
  
  
  
  
  // useEffect(() => {
  //   getHomePg()
  // }, [])

  // useEffect(() => {
  //   console.log(homeData)
  // }, [homeData])



  return (
    <div className="App">
      <div>
        <Menu/>
      </div>
      <div className="main">
        <Header/>
        <Feed />
      </div>
    </div>
  )
}

export default App;
