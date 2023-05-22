import { Gym } from '../../types/gym.interface';
import { State } from '../../types/state';
import { NameSpace } from '../store-const';

export const getGymsData = (state: State): Gym[] => state[NameSpace.Gyms].gyms;
export const getGymsDataLoadingStatus = (state: State): boolean => state[NameSpace.Gyms].isGymsDataLoading;
export const getGymsErrorStatus = (state: State): boolean => state[NameSpace.Gyms].gymsHasError;
