import { Link, useParams } from 'react-router-dom';
// import { getArticleByUrl } from '../api/fetchArticles.js';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
// import fetchArticlesAPI from '../api/fetchArticles.tsx';
import Button from '@mui/material/Button';
import '../App.css';
import '../components/pages_styles/Article.scss';

export default function Article() {
  // console.log('article page', articlesContent);
  const { url } = useParams();
  // const article = getArticleByUrl(url);
  console.log('going to the article page');

  return (
    <div className="wrap">
      <div style={{ margin: 15 }}>
        {/* <h1>{article.title}</h1>
        <p>{article.content}</p> */}
        <Link to="/" className="link">
          <Button color="secondary" disabled={false} className="card__button">
            <span style={{ marginRight: 6, display: 'block' }}>
              <ArticleBtnArrow />
            </span>
            Back to homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
