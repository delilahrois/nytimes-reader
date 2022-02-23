import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getHomeData } from './apiCalls';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';

const App = () => {
  const [homeData, setHomeData] = useState('');

  const getHomePg = async () => {
    const homeData = await getHomeData()
    setHomeData(homeData.results)
    return homeData;
  }




  useEffect(() => {
    getHomePg()
  }, [])



  return (
    <div className="App">
     <Menu/>
     <Header/>
    </div>
  )
}

export default App;
