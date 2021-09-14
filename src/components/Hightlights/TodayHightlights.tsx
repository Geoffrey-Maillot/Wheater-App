// Import React
import React from 'react';

//Import React Icons
import { TiLocationArrowOutline } from 'react-icons/ti';
// Import Styles
import './styles.scss';

interface Props {
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  humidity: number;
  visibility: number;
  air_pressure: number;
  weather_state_name: string;
}

const TodayHightlights = ({
  wind_speed,
  wind_direction,
  wind_direction_compass,
  humidity,
  visibility,
  air_pressure,
}: Props) => {
  const direction = wind_direction - 42;
  return (
    <section className="todayHightlights">
      <h2 className="todayHightlights_title"> Today's Hightlights </h2>
      <div className="todayHightlights_content">
        {/* Wind */}
        <div className="content-wind content-container content-container-big">
          <p>Wind status</p>
          <p className="content-container--value">
            <span>{wind_speed.toFixed(1)}</span>mph
          </p>
          <div className="direction">
            <div
              className="direction-arrow"
              style={{
                transform: `rotate(${direction.toFixed(0).toString()}deg)`,
              }}
            >
              <TiLocationArrowOutline color="fff" size="1.2em" />
            </div>
            <div>{wind_direction_compass}</div>
          </div>
        </div>
        {/* Humidity */}
        <div className="content-humidity content-container content-container-big">
          <p>Humidity</p>
          <p className="content-container--value">
            <span>{humidity}</span>%
          </p>
          <div className="progressBar">
            <div className="progressBar-begin">0</div>
            <div className="progressBar-middle">50</div>
            <div className="progressBar-end">100</div>
            <div
              className="progressBar-purcent"
              style={{ width: `${humidity.toString()}% ` }}
            />
          </div>
        </div>
        {/* Visibility*/}
        <div className="content-visibility content-container content-container-small">
          <p>visibility</p>
          <p className="content-container--value">
            <span>{visibility.toFixed(1)}</span>miles
          </p>
        </div>
        {/* Air Pressure */}
        <div className="contentPressure content-container content-container-small">
          <p>Air Pressure</p>
          <p className="content-container--value">
            <span>{air_pressure}</span>mb
          </p>
        </div>
      </div>
    </section>
  );
};

export default TodayHightlights;
