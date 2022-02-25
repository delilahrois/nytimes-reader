import React from 'react';
import './FullPage.css';

const FullPage = ({ article }) => {

  const media = article.multimedia;

  const date = new Date(article.published_date).toDateString();

  const formatSections = () => {
    if(article.subsection) {
      return (
        <p className="section">{article.section}, {article.subsection}</p>
      )
    } else {
      return (
        <p className="section">{article.section}</p>
      )
    }
  }
  

  return (
    <div className="article-page">
      <div className="page-header">
        <img src={media[0].url} alt="photo from article" className="article-img"/>
        <header className="title">{article.title}</header>
        <p>{article.byline}</p>
        <p>Published {date}</p>
      </div>
      <div className="content">
        <p>{article.abstract}</p>
        <p>Read the full article <a href={article.url}>here.</a></p>
        {formatSections()}
      </div>
    </div>
  )
}

export default FullPage;