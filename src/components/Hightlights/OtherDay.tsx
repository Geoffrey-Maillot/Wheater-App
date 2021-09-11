// Import React
import React from 'react';

//Import style =>
import './styles.scss';

// Import Utils
import days from 'src/utils/DayOfWeek';

interface Props {
  applicable_date: string;
  max_temp: number;
  min_temp: number;
  weather_state_name: string;
  index: number;
}

// Import Recoil
import { useSetRecoilState } from 'recoil';
import { indexWeather } from '../../Recoil/index';

const OtherDay = ({
  applicable_date,
  max_temp,
  min_temp,
  weather_state_name,
  index,
}: Props) => {
  const weatherImg = weather_state_name.split(' ').join('');

  const setIndex = useSetRecoilState(indexWeather);

  return (
    <div className="otherDay" onClick={() => setIndex(index)}>
      <div className="otherDay-date">{days(applicable_date)}</div>
      <div className="otherDay-image">
        <img
          src={require(`/src/assets/images/${weatherImg}.png`).default}
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
