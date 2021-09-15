import { atom, RecoilValue, selector } from 'recoil';
import axiosInstance from 'src/axios';

// Search Component
export const searchIsOpen = atom({
  key: 'searchIsOpen',
  default: false,
});

// Fetch Data From Api Weather =>

interface searchParams {
  query?: string;
  lattlong?: string;
}
export const searchCity = atom({
  key: 'searcCity',
  default: <searchParams>{
    query: 'paris',
  },
});

/*export const dataWeatherApi = selector({
  key: 'dataWeatherApi',
  get: ({ get }) => {},
});
*/

export const weather = atom({
  key: 'weather',
  default: selector({
    key: 'weatherData',
    get: ({ get }) => {
      const paramsRequest = get(searchCity);

      return axiosInstance
        .get('/search/', {
          params: paramsRequest,
        })
        .then((response) => response.data)
        .then(([data]) => data.woeid)
        .then((woeid) => axiosInstance.get(`/${woeid}`))
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error);
        });
    },
  }),
});

// day to display
export const indexWeather = atom({
  key: 'indexWeather',
  default: 0,
});

// favorite cities
export const favoriteCities = atom({
  key: 'favoriteCities',
  default: ['London', 'Barcelona', 'Long Beach'],
});

// bool C° or F°
export const isCelius = atom({
  key: 'isCelcius',
  default: true,
});
