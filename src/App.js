import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NewsAppHooks from './components/Main';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsAppHooks />}></Route>
        <Route path="/:idx" element={<Article />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
