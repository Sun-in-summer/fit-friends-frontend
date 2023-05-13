import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute, TRAINING_SERVICE_BACKEND_URL, USER_SERVICE_BACKEND_URL } from '../const';
import { Training } from '../types/training.interface';
import { dropAccessToken, dropRefreshToken, saveAccessToken, saveRefreshToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import {toast} from 'react-toastify';
import {ExtendedUser } from '../types/user.interface';
import { generatePath } from 'react-router-dom';
import { setUserId } from './action';


const authServiceUrl = `${USER_SERVICE_BACKEND_URL}${APIRoute.Auth}`;
const trainingsServiceUrl = `${TRAINING_SERVICE_BACKEND_URL}${APIRoute.Trainings}`;

export const fetchTrainingsAction = createAsyncThunk<Training[], undefined, {
  dispacth: AppDispatch;
  state: State ;
  extra: AxiosInstance;
}>(
  'data/fetchTrainings',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Training[]>(trainingsServiceUrl);
    return data;
  }
);


export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(`${authServiceUrl}${AppRoute.Login}`);
      return data;
    }
    catch {
      toast.warn('You are not authorized. Please log in');
    }
    throw new Error();
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {id, accessToken, refreshToken}} = await api.post<UserData>(`${authServiceUrl}${APIRoute.Login}`, {email, password});
    saveAccessToken(accessToken);
    saveRefreshToken(refreshToken);
    dispatch(setUserId(id));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropAccessToken();
    dropRefreshToken();

  },
);

export const fetchUser = createAsyncThunk<ExtendedUser, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchUser',
  async(id, { extra: api}) => {
    try {
      const {data} = await api.get<ExtendedUser>(generatePath(authServiceUrl, {id}));
      return data;
    } catch {
      toast.warn('Unable to load user detailed information, please try later');
    }
    throw new Error();
  }
);

