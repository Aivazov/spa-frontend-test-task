import axios from 'axios';
// import React from 'react';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

let articles = [];

export const fetchArticlesAPI = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 6,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => {
      articles = res.data.articles;
      console.log('articles', articles);

      return res.data.articles;
    });
};

export const getArticleByUrl = (articletUrl) => {
  return articles.find((article) => article.url === articletUrl);
};
