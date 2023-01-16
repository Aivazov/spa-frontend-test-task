import axios from 'axios';
// import React from 'react';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

export default function fetchArticlesAPI({
  searchQuery = '',
  currentPage = 1,
  pageSize = 6,
}) {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
}
