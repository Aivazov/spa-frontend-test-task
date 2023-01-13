import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Button from '@mui/material/Button';

import FilterForm from '../components/FilterForm/FilterForm';
import ResultsBar from '../components/ResultsBar/ResultsBar';
import Card from '../components/Card/Card';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 9 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
};

export default class NewsApp extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchArticles(options)
      .then((articles) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    console.log(articles);
    return (
      <div style={{ margin: 15 }}>
        {error && <h1>This is a mistake</h1>}

        <FilterForm onSubmit={this.onChangeQuery} />
        <ResultsBar total={articles.length} />

        <ul className="card__list">
          {articles.map(
            ({ title, url, description, publishedAt, urlToImage }) => (
              // <li key={title}>
              //   <a href={url} target="_blank" rel="noopener noreferrer">
              //     {title}
              //   </a>
              // </li>
              <Card
                key={url}
                title={title}
                description={description}
                data={publishedAt}
                image={urlToImage}
              />
            )
          )}
        </ul>

        {shouldRenderLoadMoreButton && (
          <Button
            variant="contained"
            disabled={false}
            type="button"
            className="load-more__btn"
            onClick={this.fetchArticles}
          >
            Load More
          </Button>
        )}

        {isLoading && <p style={{ fontSize: 24 }}>Loading...</p>}
      </div>
    );
  }
}