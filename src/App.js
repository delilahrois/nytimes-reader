import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getHomeData } from './apiCalls';

const App = () => {

  const getHomePg = async () => {
    const homeData = await getHomeData()
    console.log(homeData.results)
    return homeData;
  }


  useEffect(() => {
    getHomePg()
  }, [])



  return (
    <div className="App">
     
    </div>
  )
}

export default App;
