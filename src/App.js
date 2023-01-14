import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NewsApp from './components/NewsApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsApp />}></Route>
    </Routes>
  );
}

export default App;
