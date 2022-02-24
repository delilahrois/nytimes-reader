import React from 'react';
import './Feed.css';
import Article from '../Article/Article';

const Feed = ({ homeData, displayArticle }) => {


  const createFeed = () => {
    let counter = 0;
    return homeData.map((article) => {
      if(article.title) {
        counter++;
        return (
          <Article 
            key={article.uri}
            id={counter}
            title={article.title}
            author={article.byline}
            media={article.multimedia}
            articleKey={article.uri}
            displayArticle={displayArticle}
          />
        )
      } else {
        return;
      }
    })
  }

  return (
    <div className="feed">
      {createFeed()}
    </div>
  )
}

export default Feed;