import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002/api',
  validateStatus: () => true,
});

api.interceptors.request.use((config) => {

  const data = JSON.parse(localStorage.getItem('data') || '{}');
  const token = data.token;

  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
})
