// Import React
import React from 'react';

//Import style =>
import './styles.scss';

// Import Utils =>
import days from 'src/utils/DayOfWeek';

interface Props {
  applicable_date: string;
  max_temp: number;
  min_temp: number;
  weather_state_name: string;
  index: number;
}

// Import Recoil =>
import { useSetRecoilState } from 'recoil';
import { indexWeather } from '../../Recoil/index';

const OtherDay = ({
  applicable_date, // date on this format : yyyy-mmm-dd
  max_temp,
  min_temp,
  weather_state_name, // image name
  index, // array of day's index to choose data to display
}: Props) => {
  // Format the name of the api image to match the name of the asset image
  const weatherImg = weather_state_name.split(' ').join('');

  // Change the index according to the day click
  const setIndex = useSetRecoilState(indexWeather);

  // Return =>
  return (
    <div className="otherDay" onClick={() => setIndex(index)}>
      <div className="otherDay-date">{days(applicable_date)}</div>
      <div className="otherDay-image">
        <img
          src={require(`src/assets/images/${weatherImg}.png`).default}
          alt="wheater"
        />
      </div>
      <div className="otherDay_temp">
        <div className="otherDay_temp-max">{Math.floor(max_temp)}°c</div>
        <div className="otherDay_temp-min">{Math.floor(min_temp)}°c</div>
      </div>
    </div>
  );
};

export default OtherDay;
