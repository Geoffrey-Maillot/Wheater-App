import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://perso-proxy-server.herokuapp.com/www.metaweather.com/api/location',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods':
      'GET,PUT,POST,DELETE,PATCH,OPTIONS, Authorization',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    // withCredentials: true,
    mode: 'cors',
    credentials: 'include',
  },
});

export default axiosInstance;
