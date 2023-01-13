import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import TextField from '@mui/material/TextField';
import { BiSearch } from 'react-icons/bi';
import './FilterForm.scss';

export default function FilterForm({ onSubmit }) {
  const [searchRequest, setSearchRequest] = useState('');

  const handleNameChange = (event) => {
    setSearchRequest(event.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchRequest);
    if (searchRequest.trim() === '') {
      return toast.error('Please enter an article name');
    }
    setSearchRequest('');
    console.log(searchRequest);
  };

  return (
    <header className="searchbar">
      <p>Filter by keywords</p>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <BiSearch size="20" className="react-icons-search" />
          <span className="button-label">Search</span>
        </button>
        {/* <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search articles"
          value={searchRequest}
          onChange={handleNameChange}
        /> */}

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search articles"
          value={searchRequest}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
