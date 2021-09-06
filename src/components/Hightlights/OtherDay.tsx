// Import React
import React from 'react';

//Import style =>
import './styles.scss';

// Import Image =>
import weaterImage from '/src/assets/images/Shower.png';

interface Props {
  date: string;
  max: number;
  min: number;
}

const OtherDay = ({ date, max, min }: Props) => (
  <div className="otherDay">
    <div className="otherDay-date">{date}</div>
    <div className="otherDay-image">
      <img src={weaterImage} alt="wheater" />
    </div>
    <div className="otherDay_temp">
      <div className="otherDay_temp-max">{max}°c</div>
      <div className="otherDay_temp-min">{min}°c</div>
    </div>
  </div>
);

export default OtherDay;
