// Import React =>
import React from 'react';

// Import Style =>
import './styles.scss';

// Import React Icon =>
import { HiOutlineSearch } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Search = () => (
  <div className="search-section">
    <div className="searchClose">
      <CgClose />
    </div>
    <form className="search-form">
      <div className="input-container">
        <input
          className="input"
          type="text"
          name="localisation"
          placeholder="search location"
        />
        <div className="input-image">
          <HiOutlineSearch />
        </div>
      </div>
      <button className="search-form--button">Search</button>
    </form>
    <div className="search-favori">London</div>
    <div className="search-favori">Barcelona</div>
    <div className="search-favori">Long Beach</div>
  </div>
);

export default Search;
