import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import ResultsBar from './components/ResultsBar/ResultsBar';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <FilterForm />
        <ResultsBar />
      </div>
    </div>
  );
}

export default App;
