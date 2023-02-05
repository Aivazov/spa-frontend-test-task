import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import NewsApp from './components/NewsApp';
import NewsAppHooks from './components/NewsAppHooks';
import { getArticles } from './api/fakeAPI';
// import NewsAppWithoutFilter from './components/NewsAppCopyWithoutFilter';
// import Card from './components/Card/Card';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.js';

const articles = getArticles();
console.log('articles', articles);

const fetchArticlesAPI = ({
  searchQuery = 'nasa',
  currentPage = 1,
  pageSize = 6,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => {
      // console.log(res);
      // articles = res.data.articles;
      // console.log('articles after init:', articles);

      return res.data.articles;
    });
};

function App() {
  // const [articles, setArticles] = useState([]);
  const query = 'nasa';
  const page = 1;
  const size = 6;

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchArticlesAPI(query, page, size).then((article) => {
  //       setArticles(article);
  //     });

  //     console.log('articles in the Article.tsx', articles);
  //   }, 300);
  // }, [articles]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsAppHooks items={articles} />}></Route>
        {/* <Route path="/" element={<NewsApp items={articles} />}></Route> */}
        {/* <Route path="/:article" element={<Article />}></Route> */}
        <Route path="/:id" element={<Article items={articles} />}></Route>
        {/* <Route path="/onquery" element={<NewsAppWithoutFilter />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
