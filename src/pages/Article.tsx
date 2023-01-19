import { Link, useParams } from 'react-router-dom';
import { getArticleByUrl } from '../api/fetchArticles.js';
import React from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
// import fetchArticlesAPI from '../api/fetchArticles.tsx';
import Button from '@mui/material/Button';
import '../App.css';
import '../components/pages_styles/Article.scss';

export default function Article() {
  // console.log('article page', articlesContent);
  const { url } = useParams();
  const getArticle = getArticleByUrl(url);
  console.log('going to the article page');
  console.log('url: ', url);
  console.log(
    'get article: ',
    getArticle
  );
  

  return (
    <div className="wrap">
      <div style={{ margin: 15 }}>
        {getArticle &&
          getArticle.map((el) => (
            <>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
            </>
          ))}
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
