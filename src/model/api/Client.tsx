import axios from 'axios';
import { ENV } from '../../config/env';

export const apiClient = axios.create({
  baseURL: ENV.BASE_URL,
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  console.log('API Request:', config.url);
  return config;
});