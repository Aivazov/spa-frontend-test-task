import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';
// import Button from '@mui/material/Button';

import FilterForm from '../components/FilterForm/FilterForm.tsx';
import ResultsBar from '../components/ResultsBar/ResultsBar.tsx';
import Card from './Card/Card.js';
// import Article from './Article/Article.tsx';
import Loader from './Loader/Loader.tsx';
import { fetchArticlesAPI } from '../api/fetchArticles.js';

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

  // componentDidUpdate(prevProps, prevState) {
    // if (prevState.searchQuery !== this.state.searchQuery) {
    // this.fetchArticles();
    // }
  // }

  // onChangeQuery = (query) => {
  //   this.setState({
  //     searchQuery: query,
  //     currentPage: 1,
  //     articles: [],
  //     error: null,
  //   });
  // };

  onChangeFilterValue = (e) => {
    this.setState({ filteringValue: e.currentTarget.value });
    // console.log(this.state.stateFilter);
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    setTimeout(() => {
      // setInterval(() => {
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
      // }, 5000);
    }, 300);
  };

  render() {
    const { articles, isLoading, error, filteringValue } = this.state;
    const normalizedFilteringValue = filteringValue.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(normalizedFilteringValue)
    );

    // console.log(articles);
    // const highlightedFilter = filteredArticles.replace(
    //   /[.*+?^${}()|[\]\\]/g,
    //   '\\$&'
    // );
    const shouldRenderLoadMoreButton =
      filteredArticles.length > 0 && !isLoading;
    return (
      <div className="App">
        <div className="wrap">
          <div style={{ margin: 15 }}>
            {error && <h1>This is a mistake</h1>}

            <FilterForm
              value={filteringValue}
              onChange={this.onChangeFilterValue}
            />
            <p>
              <mark>{normalizedFilteringValue}</mark>
            </p>
            <ResultsBar total={filteredArticles.length} />

            {/* Rendering Cards */}

            <ul className="card__list">
              <Card cards={filteredArticles} />
              {/* {filteredArticles.map(
                ({
                  title,
                  url,
                  description,
                  publishedAt,
                  urlToImage,
                  content,
                }) => (
                  <Card
                    filterArr={filteredArticles}
                    key={url}
                    title={title}
                    description={description}
                    date={publishedAt}
                    image={urlToImage}
                    url={url}
                  />
                )
              )} */}
            </ul>

            {/* Load More Button */}

            {/* {shouldRenderLoadMoreButton && (
              <Button
                variant="contained"
                disabled={false}
                type="button"
                className="load-more__btn"
                onClick={this.fetchArticles}
              >
                Load More
              </Button>
            )} */}

            {/* No matches check */}

            {!shouldRenderLoadMoreButton && !isLoading && !error && (
              <p>No matches. Please try again</p>
            )}

            {/* Loading */}

            {isLoading && <Loader />}
          </div>
        </div>
        {/* <div className="wrap">
          {filteredArticles.map(({ title, content, url }) => (
            <Article
              key={url}
              articlesTitle={title}
              articlesContent={content}
            />
          ))}
        </div> */}
      </div>
    );
  }
}
