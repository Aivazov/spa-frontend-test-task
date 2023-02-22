import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import NotFound from './pages/NotFound.tsx';
import Article from './pages/Article.js';

function App() {
  return (
    <div>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path=":idx" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
