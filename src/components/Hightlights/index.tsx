//Import React =>
import React from 'react';

//Import Style =>
import './styles.scss';

// Import Components =>
import OtherDay from 'src/components/Hightlights/OtherDay';
import TodayHightlights from 'src/components/Hightlights/TodayHightlights';

//Import Recoil
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { indexWeather, isCelius } from 'src/Recoil/index';

interface Props {
  consolidated_weather: [
    {
      id: number;
      key: number;
      min_temp: number;
      max_temp: number;
      applicable_date: string;
      wind_speed: number;
      wind_direction: number;
      wind_direction_compass: string;
      humidity: number;
      visibility: number;
      air_pressure: number;
      weather_state_name: string;
    },
  ];
}

const Hightlights = ({ consolidated_weather }: Props) => {
  // day to display
  const index = useRecoilValue(indexWeather);
  const [celcius, setCelcius] = useRecoilState(isCelius);

  return (
    <section className="hightlights">
      <button
        className={`hightlights-button ${celcius && 'is-selected'}`}
        type="button"
        onClick={() => setCelcius(true)}
      >
        °C
      </button>
      <button
        className={`hightlights-button ${!celcius && 'is-selected'}`}
        type="button"
        onClick={() => setCelcius(false)}
      >
        °F
      </button>
      <div className="otherDays">
        {consolidated_weather.map((day, index) => (
          <OtherDay key={day.id} {...day} index={index} />
        ))}
      </div>
      <TodayHightlights {...consolidated_weather[index]} />
    </section>
  );
};

export default Hightlights;
