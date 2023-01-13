import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FilterForm from './components/FilterForm/FilterForm';
import ResultsBar from './components/ResultsBar/ResultsBar';
import Card from './components/Card/Card';

const API_KEY = '48e54ca0458d4c07a6db808cddd7a419';

const fetchArticles = ({ query = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&from=2022-12-12&sortBy=publishedAt`
    )
    .then((res) => {
      console.log(res);
      return res.data.articles;
    });
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log('before fetch', searchQuery);

    // fetchArticles({ query: searchQuery })
    //   .then((response) => {
    //     setArticles((prevArticles) => [...prevArticles, ...response]);
    //   })
    //   .catch((error) => setError(error.message))
    //   .finally(() => setIsLoading(false));

    console.log('after fetch', searchQuery);
  }, [searchQuery]);

  const handleSearchName = (value) => {
    setSearchQuery(value);
    setArticles([]);
    setError(null);
  };

  return (
    <div className="App">
      <div className="wrap">
        <FilterForm onSubmit={handleSearchName} />
        <ResultsBar />
        <Card />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>

        {isLoading && (
          <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
