import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';
import { loadTrainings } from './action';
import { Training } from '../types/training.interface';


export const fetchTrainingssAction = createAsyncThunk<void, undefined, {
  dispacth: AppDispatch;
  state: State ;
  extra: AxiosInstance;
}>(
  'data/fetchTrainings',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Training[]>(APIRoute.Trainings);
    dispatch(loadTrainings(data));
  }
);
