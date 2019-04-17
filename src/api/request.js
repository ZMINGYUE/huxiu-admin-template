import axios from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true
});

// service.longandobviuslynotoverwrittenarg = new Date().toUTCString();

service.interceptors.request.use(
  req => {
    return req;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response;
    }
  },
  error => {
    console.log(error, 'axios interceptors error.response');
    return Promise.reject(error);
  });

export default service;
