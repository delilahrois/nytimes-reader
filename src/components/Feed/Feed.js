import React, { useState, useEffect } from 'react';
import './Feed.css';
import Article from '../Article/Article';
import { getData } from '../../apiCalls';

const Feed = () => {

  const [homeData, setHomeData] = useState([]);

  const getHomePg = async () => {
    const data = await getData('home');
    setHomeData(data.results);
    return homeData;
  }

  useEffect(() => {
    getHomePg();
  }, [])

  const createFeed = () => {
    return homeData.map((article) => {
      // console.log(article)
      return (
        <Article 
          key={article.uri}
          id={article.uri}
          title={article.title}
          author={article.byline}
          section={article.section}
          abstract={article.abstract}
          media={article.multimedia}
          url={article.url}
          updated={article.updated_date}
        />
      )
    })
  }



  // useEffect(() => {
  //   console.log(homeData)
  //   // createFeed()
  // }, [homeData])

  return (
    <div className="feed">
      {createFeed()}
    </div>
  )
}

export default Feed;