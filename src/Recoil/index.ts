import { atom, RecoilValue, selector } from 'recoil';
import axiosInstance from 'src/axios';

// Search Component

export const searchIsOpen = atom({
  key: 'searchIsOpen',
  default: false,
});

// Fetch Data From Api Weather

export const searchCity = atom({
  key: 'searcCity',
  default: 'toulouse',
});

export const weather = selector({
  key: 'weather',
  get: ({ get }) => {
    const city = get(searchCity);

    return axiosInstance
      .get('/search/', {
        params: {
          query: city,
        },
      })
      .then((response) => response.data)
      .then(([data]) => data.woeid)
      .then((woeid) => axiosInstance.get(`/${woeid}`))
      .then((response) => response.data)
      .catch((error) => console.error(error));
  },
});
