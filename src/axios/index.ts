import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location',
  timeout: 3000,
});

export default axiosInstance;
