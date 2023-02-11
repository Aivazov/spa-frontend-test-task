import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import { getArticleById } from '../api/fetchArticles.js';
import Button from '@mui/material/Button';
import '../App.css';
import '../components/pages_styles/Article/Article.css';

export default function Article() {
  const { idx } = useParams();
  const article = getArticleById(idx);

  return (
    <div>
      <div className="article__container">
        <img
          src={article.urlToImage}
          z
          alt=""
          className="article__image"
          style={{ backgroundPosition: 'center', height: 245 }}
        />
        <div className="wrap article__body">
          <div className="container">
            <div>
              <h1 className="article__title">{article.title}</h1>
            </div>
            <div className="wrap">
              <p className="article__content">{article.description}</p>
            </div>
            <div className="wrap">
              <p className="article__content">{article.description}</p>
            </div>
            <Link to="/" className="link">
              <Button
                color="secondary"
                disabled={false}
                className="card__button"
              >
                <span style={{ marginRight: 6, display: 'block' }}>
                  <ArticleBtnArrow />
                </span>
                Back to homepage
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <p>empty</p>
        </div>
      </div>
    </div>
  );
}
