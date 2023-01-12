import './App.css';
import React, { useState } from 'react';
import FilterForm from './components/FilterForm/FilterForm';
import ResultsBar from './components/ResultsBar/ResultsBar';
import Card from './components/Card/Card';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchName = (value) => {
    setSearchQuery(value);
  };
  return (
    <div className="App">
      <div className="wrap">
        <FilterForm onSubmit={handleSearchName} />
        <ResultsBar />
        <Card />
      </div>
    </div>
  );
}

export default App;
