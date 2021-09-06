//Import React =>
import React from 'react';

//Import Style =>
import './styles.scss';

// Import Components =>
import OtherDay from 'src/components/Hightlights/OtherDay';

const dataOtherDays = [
  {
    date: 'tomorow',
    max: 16,
    min: 11,
  },
  {
    date: 'sunday',
    max: 16,
    min: 11,
  },
  {
    date: 'monday',
    max: 16,
    min: 11,
  },
  {
    date: 'monday',
    max: 16,
    min: 11,
  },
  {
    date: 'monday',
    max: 16,
    min: 11,
  },
  {
    date: 'monday',
    max: 16,
    min: 11,
  },
];

const Hightlights = () => (
  <section className="hightlights">
    <div className="otherDays">
      {' '}
      {dataOtherDays.map((day) => (
        <OtherDay key={day.date} {...day} />
      ))}
    </div>
  </section>
);

export default Hightlights;
