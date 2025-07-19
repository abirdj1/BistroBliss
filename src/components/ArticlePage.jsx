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
         <h2>What are the right ingredients to make it delicious?</h2>
        <p>
         Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
        </p>
        <ol>
          <li>
            <strong>Quality Beef</strong>The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
          </li>
          <li>
            <strong>Seasoning</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
          </li>
          <li>
            <strong>Dont Overwork the Meat</strong>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
          </li>
          <li>
            <strong>Cooking</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
          </li>
          <li>
            <strong>Resting </strong> : Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
          </li>
        </ol>
      </section>
      <img src="/devc.png" alt="Fries and Salad" />
      <section>
        <h2>What are the right ingredients to make delicious?</h2>
        <p>
         Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..
        </p>
      </section>
      <div className="read-more">
        <h2>Read More Articles</h2>
        <p>We consider the drivers of change gives you components you need<br/> to change to create a truly happens.</p>
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