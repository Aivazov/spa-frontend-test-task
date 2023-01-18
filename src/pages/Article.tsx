import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
// import fetchArticlesAPI from '../api/fetchArticles.tsx';
import Button from '@mui/material/Button';
import '../App.css';
import '../components/pages_styles/Article.scss';

export default function Article({ articlesTitle, articlesContent }) {
  console.log('article page', articlesContent);
  const article = useParams();

  return (
    <div className="wrap">
      <div style={{ margin: 15 }}>
        <h1>{articlesTitle}</h1>
        <p>{articlesContent}</p>
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
