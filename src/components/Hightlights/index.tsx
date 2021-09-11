//Import React =>
import React from 'react';

//Import Style =>
import './styles.scss';

// Import Components =>
import OtherDay from 'src/components/Hightlights/OtherDay';
import TodayHightlights from 'src/components/Hightlights/TodayHightlights';

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

const Hightlights = ({ consolidated_weather }: Props) => (
  <section className="hightlights">
    <button className="hightlights-button" type="button">
      °C
    </button>
    <button className="hightlights-button" type="button">
      °F
    </button>
    <div className="otherDays">
      {consolidated_weather.map((day) => (
        <OtherDay key={day.id} {...day} />
      ))}
    </div>
    <TodayHightlights {...consolidated_weather[0]} />
  </section>
);

export default Hightlights;
