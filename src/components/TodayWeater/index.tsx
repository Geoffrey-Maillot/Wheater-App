// Import React =>
import React from 'react';
// Import Style =>
import './styles.scss';
// Import React-icons =>
import { MdGpsFixed } from 'react-icons/md';
//Import Utils
import date from 'src/utils/todayDate';

//Import Image =>
import Form from 'src/components/Form';

// Import Recoil =>
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchIsOpen, indexWeather } from '../../Recoil/index';

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

  // state recoil
  const [isOpen, setIsOpen] = useRecoilState(searchIsOpen);
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
      <div className="localisation"> {title} </div>
    </section>
  );
};

export default TodayWeater;
