// src/components/ArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ title, date, image,to }) => {
  return (
    <div className="article-card">
        <Link to={to}>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">{date}</span>
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      </Link>
    </div>
  );
};

export default ArticleCard;