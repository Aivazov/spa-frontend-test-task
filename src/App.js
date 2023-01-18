import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NewsApp from './components/NewsApp';
import NewsAppWithoutFilter from './components/NewsAppCopyWithoutFilter';
import Card from './components/Card/Card';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsApp />}></Route>
      <Route path="article" element={<Article />}></Route>
      {/* <Route path="/onquery" element={<NewsAppWithoutFilter />}></Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;