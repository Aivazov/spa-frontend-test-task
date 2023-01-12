import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
import './FilterForm.scss'

export default function FilterForm({ onSubmit }) {
  const [searchRequest, setSearchRequest] = useState('');

  const handleNameChange = (event) => {
    setSearchRequest(event.currentTarget.value.toLowerCase());
    // this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchRequest);
    if (searchRequest.trim() === '') {
      return toast.error('Please enter an article name');
    }
    console.log(searchRequest);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <label>Filter by keywords</label>
        <button type="submit" className="button">
          <BiSearch size="32" className="react-icons-search" />
          <span className="button-label">Search</span>
        </button>

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
