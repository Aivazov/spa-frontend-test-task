import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import Highlighter from 'react-highlight-words';
import Button from '@mui/material/Button';
// import { ThreeDots, BallTriangle } from 'react-loading-icons';
import { InfinitySpin } from 'react-loader-spinner';

import FilterForm from '../components/FilterForm/FilterForm';
import ResultsBar from '../components/ResultsBar/ResultsBar';
import Card from '../components/Card/Card';

axios.defaults.headers.common['Authorization'] =
  'Bearer 48e54ca0458d4c07a6db808cddd7a419';

const fetchArticlesAPI = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 18,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((res) => res.data.articles);
};

export default class NewsApp extends Component {
  state = {
    articles: [],
    filteringValue: '',
    currentPage: 1,
    searchQuery: 'nasa',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    // fetchArticlesAPI();
    this.fetchArticles();

    // if (this.state.articles !== null) {
    //   const gettingArticles = localStorage.getItem('articles');
    //   if (gettingArticles !== null) {
    //     const parsedArticles = JSON.parse(gettingArticles);
    //     this.setState({ gettingArticles: parsedArticles });
    //   }
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.searchQuery !== this.state.searchQuery) {
    // this.fetchArticles();
    // }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  onChangeFilterValue = (e) => {
    this.setState({ filteringValue: e.currentTarget.value });
    // console.log(this.state.stateFilter);
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    setTimeout(() => {
      fetchArticlesAPI(options)
        .then((articles) => {
          this.setState((prevState) => ({
            // articles: [...prevState.articles, ...articles],
            articles: articles,
            currentPage: prevState.currentPage + 1,
          }));
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }, 1000);
  };

  render() {
    const { articles, isLoading, error, filteringValue } = this.state;
    // console.log(articles);
    const normalizedFilteringValue = filteringValue.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(normalizedFilteringValue)
    );
    // const highlightedFilter = filteredArticles.replace(
    //   /[.*+?^${}()|[\]\\]/g,
    //   '\\$&'
    // );
    const shouldRenderLoadMoreButton =
      filteredArticles.length > 0 && !isLoading;
    console.log('normalizedFilteringValue', normalizedFilteringValue);
    console.log('filteredArticles', filteredArticles);
    // console.log('articles', articles);
    return (
      <div className="App">
        <div className="wrap">
          <div style={{ margin: 15 }}>
            {error && <h1>This is a mistake</h1>}

            <FilterForm
              // onSubmit={this.onChangeQuery}
              value={filteringValue}
              onChange={this.onChangeFilterValue}
            />
            <p>
              <mark>{normalizedFilteringValue}</mark>
            </p>
            <ResultsBar total={filteredArticles.length} />

            <ul className="card__list">
              {filteredArticles.map(
                ({ title, url, description, publishedAt, urlToImage }) => (
                  <Card
                    filterArr={filteredArticles}
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

            {!shouldRenderLoadMoreButton && !isLoading && (
              <p>No matches. Please try again</p>
            )}

            {/* Loading */}

            {isLoading && (
              <p style={{ fontSize: 24 }}>
                <InfinitySpin
                  height={200}
                  width={200}
                  radius={10}
                  color="#363636"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
