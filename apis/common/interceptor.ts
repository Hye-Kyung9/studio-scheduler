import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:3000/api/v1`, //추후 api주소 변경필요
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    error(0, `에러 발생 ${error.toString()}`);
    return Promise.reject(error);
  },
);

export default instance;
