import { Link, useParams } from 'react-router-dom';
// import { getArticleByUrl } from '../api/fetchArticles.js';
// import React, { useState, useEffect } from 'react';
import { ArticleBtnArrow } from '../components/Icons/articleBtnArrow.js';
import { getProductById } from '../api/fakeAPI';
// import cards from '../components/Card/Card';
// import { fetchArticlesAPI } from '../api/fetchArticles.js';
import Button from '@mui/material/Button';
import '../App.css';
// import './';
import '../components/pages_styles/Article.scss';
// import { setInterval } from 'timers/promises';

export default function Article() {
  // const [articles2, setArticles2] = useState([]);

  const { id } = useParams();
  const article = getProductById(id);
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
    <div className="wrap">
      <div className="article__bg--img"></div>
      {/* <img src={article.urlToImage} alt="" className="article__image" /> */}

      <div style={{ margin: 15 }}>
        <div>
          <p>{article.title}</p>
        </div>
        <div>
          <p>{article.description}</p>
        </div>
        {/* {array &&
          array.map((el) => (
            <>
              <h1>{el.title}</h1>
              <p>{el.content}</p>
            </>
          ))} */}
        {/* <p>
          Hello
          {articles2.map(({ title }) => (
            <p style={{ display: 'block' }}>{title}</p>
          ))}
        </p> */}
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
