import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { getToken } from './token';
import {processErrorHandle} from './process-error-handle';
import { StatusCodes } from 'http-status-codes';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];


const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
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

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};


