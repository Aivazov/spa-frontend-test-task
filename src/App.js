import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NewsApp from './components/NewsApp';
import NewsAppWithoutFilter from './components/NewsAppCopyWithoutFilter'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<NewsApp />}></Route> */}
      <Route path="/" element={<NewsAppWithoutFilter />}></Route>
    </Routes>
  );
}

export default App;
