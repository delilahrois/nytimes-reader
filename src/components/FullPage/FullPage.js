import React from 'react';
import './FullPage.css';

const FullPage = ({ article }) => {

  console.log(article)
  const media = article.multimedia;

  const date = new Date(article.published_date).toDateString()
  console.log(date)

  return (
    <div className="article-page">
      <div className="page-header">
        <img src={media[0].url} />
        <header className="title">{article.title}</header>
        <p>{article.byline}</p>
        <p>Published {date}</p>
      </div>
      <div className="content">
        <p>{article.abstract}</p>
        <p>Read the full article <a href={article.url}>here.</a></p>
      </div>
    </div>
  )
}

export default FullPage;