// Import React =>
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';

// Import Style =>
import './styles.scss';

//Import UUID
import { UUID } from 'src/utils/randomUUID';

// Import React Icon =>
import { HiOutlineSearch } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

// Recoil =>
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { searchIsOpen, searchCity, favoriteCities } from '../../Recoil/index';

const Search = () => {
  // State =>
  const [isClosing, setIsClosing] = useState(false); // animation className
  const [city, setCity] = useState(''); // search City

  // state recoil
  const closeSearch = useSetRecoilState(searchIsOpen); // close Form Component
  const setSearchCity = useSetRecoilState(searchCity); // Input Value
  const cities = useRecoilValue(favoriteCities); // Favorite Cities

  //handlerSubmit Form =>
  const handlerOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    console.dir(evt);
    evt.preventDefault();
    setSearchCity(city);
  };

  const handlerOnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setSearchCity(evt.target.name);
    handlerOnClickCloseButton();
  };

  //close searchComponent
  const handlerOnClickCloseButton = () => {
    // add className to close with animation
    setIsClosing(true);
    // close Form component
    setTimeout(() => {
      closeSearch(false);
    }, 1000);
  };

  return (
    <div
      className={`search-section animation-entrance ${
        isClosing && 'animation-exit'
      }`}
    >
      <button
        type="button"
        className="search-section_close"
        onClick={handlerOnClickCloseButton}
      >
        <CgClose color="#fff" size="1.5em" />
      </button>
      <form className="search-section_form" onSubmit={handlerOnSubmit}>
        <div className="input-container">
          <input
            className="input-container--input"
            type="text"
            name="localisation"
            placeholder="search location"
            value={city}
            onChange={(evt) => setCity(evt.target.value)}
          />
          <div className="input-container--image">
            <HiOutlineSearch size="1.2em" color="#616475" />
          </div>
        </div>
        <button className="search-form--button">Search</button>
      </form>
      {cities.map((city) => (
        <button
          type="button"
          className="search-section_favori"
          key={UUID()}
          name={city}
          onClick={handlerOnClick}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default Search;
