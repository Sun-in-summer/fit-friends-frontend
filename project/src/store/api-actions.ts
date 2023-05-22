import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, TRAINING_SERVICE_BACKEND_URL, USER_SERVICE_BACKEND_URL } from '../const';
import { Training } from '../types/training.interface';
import { dropAccessToken, dropRefreshToken, saveAccessToken, saveRefreshToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserAuthData } from '../types/user-data';
import {toast} from 'react-toastify';
import { AdditionalUserInfo, ExtendedUser, ExtendedUserWithPassword } from '../types/user.interface';
import { redirectBack } from './action';
import { Gym } from '../types/gym.interface';
import { getQueryString } from '../utils/utils';
import { TrainingQuery } from '../types/query/training-query';


const authServiceUrl = `${USER_SERVICE_BACKEND_URL}${APIRoute.Auth}`;
const updateUserUrl = 'http://localhost:3332/api/auth/update/:id';
const trainingsServiceUrl = `${TRAINING_SERVICE_BACKEND_URL}${APIRoute.Trainings}`;
const gymsServiceUrl = `${TRAINING_SERVICE_BACKEND_URL}${APIRoute.Gyms}`;

export const fetchTrainingsAction = createAsyncThunk<Training[], undefined, {
  dispacth: AppDispatch;
  state: State ;
  extra: AxiosInstance;
}>(
  'data/fetchTrainings',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Training[]>(`${trainingsServiceUrl}/all`);
    return data;
  }
);


export const fetchFilteredTrainingsAction = createAsyncThunk<Training[][], TrainingQuery | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilteredTrainingsAction',
  async (query, {dispatch, extra: api}) => {
    const queryString = getQueryString(query);
    const {data} = await api.get<Training[] >(`${trainingsServiceUrl}${queryString}`);
    const allTrainings = await api.get<Training[]>(`${trainingsServiceUrl}/all`);
    return [data, allTrainings.data];
  },
);

export const fetchGymsAction = createAsyncThunk<Gym[], undefined, {
  dispacth: AppDispatch;
  state: State ;
  extra: AxiosInstance;
}>(
  'data/fetchGyms',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Gym[]>(gymsServiceUrl);
    return data;
  }
);


export const checkAuthAction = createAsyncThunk<ExtendedUser | null, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  // eslint-disable-next-line camelcase
  async (access_token, {dispatch, extra: api}) => {
    try {
      // eslint-disable-next-line camelcase
      const {data} = await api.post<ExtendedUser | null>(`${authServiceUrl}${APIRoute.CheckAuth}`, {access_token});
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
    dispatch(redirectBack());


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
      return data;
    } catch {
      toast.warn('Unable to load  user detailed information, please try later');
    }
    throw new Error();
  }
);

export const fetchManyUsersAction = createAsyncThunk<ExtendedUser[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchManyUsers',
  async(_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ExtendedUser[]>(authServiceUrl);
      return data;
    } catch {
      toast.warn('Unable to load  users for company, please try later');
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
  } , {dispatch, extra: api}) => {
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
      return data;
    } catch {
      toast.warn('Unable to add information about user, please try later');
    }
    throw new Error();
  }
);


export const updateUserAction = createAsyncThunk<ExtendedUser, ExtendedUser, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/apdateUser',
  async({
    id,
    firstname,
    gender,
    place,
    trainingLevel,
    trainingType,
    isReadyToTrainPersonally,
    email,
    avatar,
    role,
    sentRequestForFriends
  }, {dispatch, extra: api}) => {
    try {
      const {data} = await api.patch<ExtendedUser>(updateUserUrl.replace(':id', id as string), {
        firstname,
        gender,
        place,
        trainingLevel,
        trainingType,
        isReadyToTrainPersonally
      } );
      return data;
    } catch {
      toast.warn('Unable to update user, please try later');
    }
    throw new Error();
  }
);


