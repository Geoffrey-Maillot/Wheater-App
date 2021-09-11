/**
  Return date in this format: Jan. 5 Jun
  @param date object
  @returns string - Date
 */

const day = (date: string) =>
  new Date(date)
    .toDateString()
    .slice(0, 10)
    .split(' ')
    .map((item, index, array) => {
      if (index === 0) return `${item}.`;
      if (index === 1) return array[2];
      if (index === 2) return array[1];
    })
    .join(' ');

export default day;
