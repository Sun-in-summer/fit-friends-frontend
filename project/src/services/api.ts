import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';

const TRAINING_SERVICE_BACKEND_URL = 'http://localhost:3333/api/';
// const USER_SERVICE_BACKEND_URL = 'http://localhost:3332/api/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: TRAINING_SERVICE_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }
  );

  return api;
};


