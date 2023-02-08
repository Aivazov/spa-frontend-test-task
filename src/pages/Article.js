import { Link, useParams } from 'react-router-dom';
// import { getArticleByUrl } from '../api/fetchArticles.js';
// import React, { useState, useEffect } from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
// import { getProductById } from '../api/fakeAPI';
// import cards from '../components/Card/Card';
import { fetchArticlesAPI } from '../api/fetchArticles.js';
import Button from '@mui/material/Button';
import '../App.css';
import './Article.css';

export default function Article() {
  // const [articles2, setArticles2] = useState([]);

  const { idx } = useParams();
  const article = fetchArticlesAPI(idx);
  // const article = getProductById(id);
  // let array = [];
  // const query: string = 'nasa';
  // const page: number = 1;
  // const size: number = 6;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setArticles2(items)
  //   fetchArticlesAPI(query, page, size).then((el) => {
  //     setArticles2(el);
  //     // array = el;
  //   });

  //   console.log('articles in the Article.tsx', array);
  //   }, 300);
  // }, []);

  // console.log('article page', articlesContent);
  // const { url } = useParams();
  // const getArticle = getArticleByUrl(url);
  // console.log('going to the article page');
  // console.log('url: ', url);
  // console.log('get article: ', articles2);
  // console.log('cards', cards);

  return (
    <div>
      <div className="article__container">
        <img
          src={article.urlToImage}
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
      </div>
    </div>
  );
}
