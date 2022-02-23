import React from 'react';
import './Article.css';

const Article = ({ title }) => {

  return (
    <div className="article">
      <h2>{title}</h2>
    </div>
  )
}

export default Article;