import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Article = ({ id, title, author, section, abstract, media, url, updated }) => {
  console.log(id)

  return (
    <div className="article">
      <Link to={`/${id}`} className="title-link">{title}</Link>
      <div>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default Article;