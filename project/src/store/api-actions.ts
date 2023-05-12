import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, TRAINING_SERVICE_BACKEND_URL, USER_SERVICE_BACKEND_URL } from '../const';
import { loadTrainings, requireAuthorization, setError, setTrainingsDataLoadingStatus } from './action';
import { Training } from '../types/training.interface';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchTrainingssAction = createAsyncThunk<void, undefined, {
  dispacth: AppDispatch;
  state: State ;
  extra: AxiosInstance;
}>(
  'data/fetchTrainings',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setTrainingsDataLoadingStatus(true));
    const {data} = await api.get<Training[]>(`${TRAINING_SERVICE_BACKEND_URL}${APIRoute.Trainings}`);
    dispatch(setTrainingsDataLoadingStatus(false));
    dispatch(loadTrainings(data));
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(`${USER_SERVICE_BACKEND_URL}${APIRoute.Login}`);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(`${USER_SERVICE_BACKEND_URL}${APIRoute.Login}`, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
