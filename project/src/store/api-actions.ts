import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute, TRAINING_SERVICE_BACKEND_URL, USER_SERVICE_BACKEND_URL } from '../const';
import { Training } from '../types/training.interface';
import { dropAccessToken, dropRefreshToken, saveAccessToken, saveRefreshToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserAuthData } from '../types/user-data';
import {toast} from 'react-toastify';
import { AdditionalUserInfo, ExtendedUser, ExtendedUserWithPassword } from '../types/user.interface';


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


export const checkAuthAction = createAsyncThunk<UserAuthData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserAuthData>(`${authServiceUrl}${AppRoute.Login}`);
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
    // eslint-disable-next-line camelcase
    const {data: {access_token, refresh_token}} = await api.post<UserAuthData>(`${authServiceUrl}${APIRoute.Login}`, {email, password});
    saveAccessToken(access_token);
    saveRefreshToken(refresh_token);
    dispatch(fetchUser());
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

export const fetchUser = createAsyncThunk<ExtendedUser, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchUser',
  async(_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ExtendedUser>(`${authServiceUrl}${APIRoute.CheckAuth}`);
      console.log('data v fetchUser', data);
      return data;
    } catch {
      toast.warn('Unable to load  user detailed information, please try later');
    }
    throw new Error();
  }
);

export const registerUserAction = createAsyncThunk<ExtendedUser, ExtendedUserWithPassword, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/registerUser',
  async({
    firstname,
    email,
    password,
    gender,
    avatar,
    dateBirth,
    role,
    place,
    trainingLevel,
    trainingType,
    sentRequestForFriends
  }, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ExtendedUser>(`${authServiceUrl}${APIRoute.RegisterBasic}`, {
        firstname,
        email,
        password,
        gender,
        avatar,
        dateBirth,
        role,
        place,
        trainingLevel,
        trainingType,
        sentRequestForFriends
      } );
      console.log('data v register user', data);
      return data;
    } catch {
      toast.warn('Unable to register  user, please try later');
    }
    throw new Error();
  }
);


export const sendQuestionnaireAction = createAsyncThunk<ExtendedUser, AdditionalUserInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendQuestionnaire',
  async({
    id,
    role,
    trainingLevel,
    trainingType,
    certificate,
    credits,
    isReadyToTrainPersonally,
    trainingTime,
    caloriesToDrop,
    caloriesToSpendPerDay


  }, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ExtendedUser>(`${authServiceUrl}${APIRoute.Questionnaire}`, {
        id,
        role,
        trainingLevel,
        trainingType,
        certificate,
        credits,
        isReadyToTrainPersonally,
        trainingTime,
        caloriesToDrop,
        caloriesToSpendPerDay
      } );
      console.log('data v sendQuestionnaire user', data);
      return data;
    } catch {
      toast.warn('Unable to add information about user, please try later');
    }
    throw new Error();
  }
);

