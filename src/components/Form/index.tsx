// Import React =>
import React from 'react';

// Import Style =>
import './styles.scss';

// Import React Icon =>
import { HiOutlineSearch } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Search = () => (
  <div className="search-section">
    <button type="button" className="search-section_close">
      <CgClose color="#fff" size="1.5em" />
    </button>
    <form className="search-section_form">
      <div className="input-container">
        <input
          className="input-container--input"
          type="text"
          name="localisation"
          placeholder="search location"
        />
        <div className="input-container--image">
          <HiOutlineSearch size="1.2em" color="#616475" />
        </div>
      </div>
      <button className="search-form--button">Search</button>
    </form>
    <button type="button" className="search-section_favori">
      London
    </button>
    <button type="button" className="search-section_favori">
      Barcelona
    </button>
    <button type="button" className="search-section_favori">
      Long Beach
    </button>
  </div>
);

export default Search;
