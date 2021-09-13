// Import React =>
import React, { useState } from 'react';
// Import Style =>
import './styles.scss';
// Import React-icons =>
import { MdGpsFixed } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
//Import Utils
import date from 'src/utils/todayDate';

//Import Image =>
import Form from 'src/components/Form';

// Import Recoil =>
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchIsOpen, indexWeather, favoriteCities } from '../../Recoil/index';

interface Props {
  title: string;
  consolidated_weather: [
    { weather_state_name: string; applicable_date: string; max_temp: number },
  ];
}

const TodayWeater = ({ title, consolidated_weather }: Props) => {
  const index = useRecoilValue(indexWeather);

  const { weather_state_name, applicable_date, max_temp } =
    consolidated_weather[index];

  const weatherImg = weather_state_name.split(' ').join('');

  // state recoil =>
  const [isOpen, setIsOpen] = useRecoilState(searchIsOpen);
  const [cities, setCities] = useRecoilState(favoriteCities);

  // local State =>
  let [message, setMessage] = useState(''); // Message when add city in favorite
  let [displayMessage, setDisplayMessage] = useState(false); // Display message

  const addFavorite = () => {
    //I check that the city is not already in favorite
    const findCity = cities.find((city) => city === title);
    if (findCity) {
      setMessage('This city is already in favorite');
      setDisplayMessage(true);
      setTimeout(() => {
        setDisplayMessage(false);
      }, 1500);
    } else {
      setCities([...cities, title]);
      setMessage('Add to favorite');
      setDisplayMessage(true);
      setTimeout(() => {
        setDisplayMessage(false);
      }, 1500);
    }
  };

  // Return ==>
  return (
    <section className="todayWeater left">
      {/*Form*/}
      {isOpen && <Form />}
      {/* Search */}
      <div className="search">
        <button
          className="search-city"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Search for places
        </button>
        <button type="button" className="search-locate">
          <MdGpsFixed color="e7e7eb" size="1.8em" />
        </button>
      </div>
      {/* Wheater Image */}
      <div className="weater-image">
        <img
          src={require(`/src/assets/images/${weatherImg}.png`).default}
          alt="wheater"
        />
      </div>
      {/* Temp */}
      <div className="temp">
        <span className="temp-number">{Math.floor(max_temp)}</span>{' '}
        <span className="temp-unity">°C</span>
      </div>
      {/* Description */}
      <div className="weaterDescription"> {weather_state_name} </div>
      {/* Date */}
      <div className="weaterDate">
        <div className="weaterDate-day">Today</div>
        <div className="weaterDate-date">{date(applicable_date)}</div>
      </div>
      {/* Localisation */}
      <div className="localisation">
        {title}
        <button
          type="button"
          className="localisation_button"
          title="Add to favorite"
          onClick={addFavorite}
        >
          <IoIosAddCircleOutline
            className="localisation_button-svg"
            size="1.8em"
          />
        </button>
        <div className={`localisation_message ${displayMessage && 'isActive'}`}>
          {message}
        </div>
      </div>
    </section>
  );
};

export default TodayWeater;
