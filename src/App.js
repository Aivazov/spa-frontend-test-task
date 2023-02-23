import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.js';
import ArticlePage from './pages/ArticlePage.js';

function App() {
  return (
    <div>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route path=":idx" element={<Article />} /> */}
        </Route>
        <Route path="/article" element={<ArticlePage />}>
          <Route path=":idx" element={<Article />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
