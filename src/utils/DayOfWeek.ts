const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
@param date - String - Date in this format : yyyy-mm-dd
@returns - String - Day of the week in this format : Monday
 */

const daysWeek = (date = '2021-09-11') => days[new Date(date).getDay()];

export default daysWeek;
