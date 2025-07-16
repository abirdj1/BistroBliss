// src/components/BlogPage.js
import React from 'react';
import ArticleCard from './ArticleCard';
import './BlogPage.css';

const BlogPage = () => {
  const articles = [
    { title: 'How to prepare a delicious gluten free sushi', date: 'January 5, 2025', image: '/blog1.png',to:'/Blogdetaills' },
    { title: 'Exclusive baking lessons from the pastry king', date: 'January 10, 2025', image: '/blog2.png',to:'/Blogdetaills'  },
    { title: 'How to prepare the perfect fries in an air fryer', date: 'January 15, 2025', image: '/blog3.png',to:'/Blogdetaills'  },
    { title: 'How to prepare delicious chicken tenders', date: 'January 20, 2025', image: '/blog4.png',to:'/Blogdetaills'  },
    { title: '5 great cooking gadgets you can buy to save time', date: 'July 1, 2025', image: '/blog6.png',to:'/Blogdetaills'  },
    { title: 'The secret tips & tricks to prepare a perfect burger', date: 'July 10, 2025', image: '/blog7.png' ,to:'/Blogdetaills' },
    { title: 'Gluten-free sushi delights', date: 'July 12, 2025', image: '/blog8.png' },
    { title: 'Desserts for kids to prepare quickly', date: 'July 14, 2025', image: '/blog5.png' },
    { title: '5 great restaurants you should visit this city', date: 'July 15, 2025', image: '/blog9.png',to:'/Blogdetaills'  },
    { title: 'Try 20 delicious and quick desserts for kids', date: 'July 15, 2025', image: '/blog10.png',to:'/Blogdetaills'  },
    { title: '5 great restaurants you should visit this city', date: 'July 15, 2025', image: '/blog11.png' ,to:'/Blogdetaills' },
    { title: 'Try 20 delicious and quick desserts for kids', date: 'July 15, 2025', image: '/blog12.png',to:'/Blogdetaills'  },
];

  return (
    <div className="blog-page">
      <h1>Our Blog & Articles</h1>
      <p>We consider the variety of changes you can prepare yourself to truly change your components you need.</p>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;