import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import { getArticleById } from '../api/fetchArticles.js';
import Button from '@mui/material/Button';
import Main from '../components/Main';
import NotFound from './NotFound.tsx';
import '../App.css';
import '../components/pages_styles/Article/Article.css';

export default function Article() {
  const { idx } = useParams();
  const articleData = getArticleById(idx);
  console.log(articleData);
  if (articleData) {
    return (
      <div>
        <div className="article__container">
          <img
            src={articleData.urlToImage}
            alt=""
            className="article__image"
            style={{ backgroundPosition: 'center', height: 245 }}
          />
          <div className="wrap article__body">
            <div className="container">
              <div>
                <h1 className="article__title">{articleData.title}</h1>
              </div>
              <div className="wrap">
                <p className="article__content">{articleData.description}</p>
              </div>
              <div className="wrap">
                <p className="article__content">{articleData.description}</p>
              </div>
              <Link to="/spa-frontend-test-task" className="link">
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
        </div>
      </div>
    );
  } else {
    // throw new Error('Mistake for the undefined of "articleData"');
    return (
      <div style={{ marginLeft: 15 }}>
        {/* <h1>Oops... Something went wrong</h1> */}
        {/* <Main /> */}
        <NotFound />
      </div>
    );
  }
}
