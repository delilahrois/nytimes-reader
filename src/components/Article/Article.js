import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Article = ({ id, title, author, media, articleKey, displayArticle }) => {

  return (
    <div className="article">
      <div className="article-txt">
        <Link to={`/${id}`} className="title-link" onClick={() => displayArticle(articleKey)}>{title}</Link>
        <p>{author}</p>
      </div>
      <div className="img-container">
        {/* <img className="feed-img" src={media[0].url}/> */}
      </div>
    </div>
  )
}

export default Article;