// src/components/ArticlePage.js
import React from 'react';
import ArticleCard from './ArticleCard';
import './ArticlePage.css';

const ArticlePage = () => {
  
  const relatedArticles = [
       { title: 'How to prepare the perfect fries in an air fryer', image: '/blog3.png' },
      { title: 'How to prepare the perfect fries in an air fryer', image: '/blog4.png' },
    { title: 'How to prepare the perfect fries in an air fryer', image: '/blog5.png' },
     { title: 'How to prepare the perfect fries in an air fryer', image: '/blog6.png' },
  ];

  return (
    <div className="article-page">
      <h1>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
      <img src="/detai.png" alt="Burger and Pizza" />
      <section>
        <h2>What do you need to prepare a home-made burger?</h2>
        <p>
          Creating a perfect burger is an art, combining ingredients, techniques, and craft that truly delight the palate. Well until some closely guarded secrets and insider tips for those believed staples of the culinary world. Today, salt is the key for some of quality beef...
        </p>
        <ol>
          <li>
            <strong>Quality Beef</strong> The heart of a perfect burger top notch beef. Opt for high-quality ground beef with at least 20% fat content...
          </li>
          <li>
            <strong>Seasoning</strong> Simplicity here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavor...
          </li>
          <li>
            <strong>Don't Overmix</strong> When forming patties, gentle. Overmixing can make the meat dense and tough...
          </li>
          <li>
            <strong>Preheat the Grill</strong> A hot grill or pan is crucial. Let it heat up for a few minutes before placing the patties to ensure a nice sear...
          </li>
          <li>
            <strong>Resting Time</strong> Allow cooked burgers to rest a few minutes before serving. This lets the juices redistribute throughout the meat...
          </li>
        </ol>
      </section>
      <img src="/detai2.png" alt="Fries and Salad" />
      <section>
        <h2>What are the right ingredients to make delicious?</h2>
        <p>
          Two answers are right when preparing memorable meals. Not just any ingredients are in constant flux, a fabulous cuisine, adding zest to your culinary world...
        </p>
      </section>
      <div className="read-more">
        <h3>Read More Articles</h3>
        <p>We consider the drivers of change gives you components you need to change to create a truly happens.</p>
        <div className="cards-container">
          {relatedArticles.map((article, index) => (
            <ArticleCard key={index} title={article.title} image={article.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;