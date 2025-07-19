import React from 'react';
import './Blog.css';

const articles = [
  {
    title:" The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    image: "/card4.png",
    date: "July 10, 2025",
    excerpt: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
    link: "/article/perfer"
  },
  {
    title: "How to prepare the perfect french fries in an air fryer",
    image: "/card5.png",
    date: "July 9, 2025",
    link: "/article/airfryer-fries"
  },
  {
    title: "How to prepare delicious chicken tenders",
    image: "/card6.png",
    date: "July 8, 2025",
    link: "/article/chicken-tenders"
  },
  {
    title: "7 delicious cheesecake recipes you can prepare",
    image: "/card7.png",
    date: "July 7, 2025",
    link: "/article/cheesecake-recipes"
  },
  {
    title: "5 great pizza restaurants you should visit this city",
    image: "card8.png",
    date: "July 6, 2025",
    link: "/article/best-pizza-spots"
  }
];

const Blog = () => {
  const featuredArticle = articles[0];
  const smallArticles = articles.slice(1, 5);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2 className="blog-title">Our Blog & Articles</h2>
        <a href="/all-articles" className="blog-read-all">Read All Articles</a>
      </div>
      <div className="blog-layout">
        <div className="featured-card">
          <img src={featuredArticle.image} alt={featuredArticle.title} />
          <div className="blog-content featured-content">
            <span className="blog-date">{featuredArticle.date}</span>
            <h3 className="blog-heading">{featuredArticle.title}</h3>
            <p>{featuredArticle.excerpt}</p>
          </div>
        </div>
        <div className="small-cards-grid">
          {smallArticles.map((article, index) => (
            <div key={index} className="blog-card small-card">
              <img src={article.image} alt={article.title} />
              <div className="blog-content">
                <span className="blog-date">{article.date}</span>
                <h3 className="blog-heading">{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;