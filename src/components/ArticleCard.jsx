// src/components/ArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ title, date, image, to }) => {
  return (
    <Link to={to} className="article-card-link">
      <div className="article-card">
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-meta">
            <span className="card-date">{date}</span>
          </div>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;