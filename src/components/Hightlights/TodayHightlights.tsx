// Import React
import React from 'react';

//Import React Icons
import { TiLocationArrowOutline } from 'react-icons/ti';
// Import Styles
import './styles.scss';

const TodayHightlights = () => (
  <section className="todayHightlights">
    <h2 className="todayHightlights_title"> Today's Hightlights </h2>
    <div className="todayHightlights_content">
      {/* Wind */}
      <div className="content-wind content-container content-container-big">
        <p>Wind status</p>
        <p className="content-container--value">
          <span>7</span>mph
        </p>
        <div className="direction">
          <div className="direction-arrow">
            <TiLocationArrowOutline color="fff" size="1.2em" />
          </div>
          <div>WSW</div>
        </div>
      </div>
      {/* Humidity */}
      <div className="content-humidity content-container content-container-big">
        <p>Humidity</p>
        <p className="content-container--value">
          <span>84</span>%
        </p>
        <div className="progressBar">
          <div className="progressBar-begin">0</div>
          <div className="progressBar-middle">50</div>
          <div className="progressBar-end">100</div>
          <div className="progressBar-purcent" style={{ width: '84%' }} />
        </div>
      </div>
      {/* Visibility*/}
      <div className="content-visibility content-container content-container-small">
        <p>visibility</p>
        <p className="content-container--value">
          <span>6.4</span>miles
        </p>
      </div>
      {/* Air Pressure */}
      <div className="contentPressure content-container content-container-small">
        <p>Air Pressure</p>
        <p className="content-container--value">
          <span>998</span>mb
        </p>
      </div>
    </div>
  </section>
);

export default TodayHightlights;
