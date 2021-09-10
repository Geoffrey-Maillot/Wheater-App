// Import React =>
import React from 'react';
// Import Style =>
import './styles.scss';
// Import React-icons =>
import { MdGpsFixed } from 'react-icons/md';

//Import Image =>
import wheaterImage from '/src/assets/images/LightCloud.png';
import Form from 'src/components/Form';

// Import Recoil =>
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchIsOpen, weather } from '../../Recoil/index';

const TodayWeater = () => {
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
        <img src={wheaterImage} alt="wheater-image" />
      </div>
      {/* Temp */}
      <div className="temp">
        <span className="temp-number">15</span>{' '}
        <span className="temp-unity">°C</span>
      </div>
      {/* Description */}
      <div className="weaterDescription"> shower </div>
      {/* Date */}
      <div className="weaterDate">
        <div className="weaterDate-day">Today</div> .{' '}
        <div className="weaterDate-date">Fri. 5 Jun</div>
      </div>
      {/* Localisation */}
      <div className="localisation"> Carcassonne </div>
    </section>
  );
};

export default TodayWeater;
