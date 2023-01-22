import { Link, useParams } from 'react-router-dom';
import { getArticleByUrl } from '../api/fetchArticles.js';
import React, { useState } from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import cards from '../components/Card/Card';
import { fetchArticlesAPI } from '../api/fetchArticles.js';
import Button from '@mui/material/Button';
import '../App.css';
import '../components/pages_styles/Article.scss';

export default function Article() {
  const [articles, setArticles] = useState([]);
  const query: string = 'nasa';
  const page: number = 1;
  const size: number = 6;

  setTimeout(() => {
    fetchArticlesAPI(query, page, size).then((el) => {
      console.log(el);
      // setArticles(el);
    });
  }, 300);
  // console.log('article page', articlesContent);
  // const { url } = useParams();
  // const getArticle = getArticleByUrl(url);
  // console.log('going to the article page');
  // console.log('url: ', url);
  console.log('get article: ', articles);
  // console.log('cards', cards);

  return (
    <div className="wrap">
      <div style={{ margin: 15 }}>
        {/* {getArticle &&
          getArticle.map((el) => (
            <>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
            </>
          ))} */}
        <p>
          Hello
          {/* {cards.map(({ title }) => (
            <p>{title}</p>
          ))} */}
        </p>
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
