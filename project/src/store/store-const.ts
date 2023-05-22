import { Gym } from '../types/gym.interface';
import { Training } from '../types/training.interface';

export enum NameSpace {
  SelectedLocationOption = 'SelectedLocationOption',
  Data ='Data',
  User ='User',
  Trainings = 'Trainings',//детально или даты хватит?
  Gyms = 'Gyms',
  Orders = 'Orders',
}

export type TrainingData = {
  trainings: Training[];
  isTrainingsDataLoading: boolean;
  trainingsHasError: boolean;
  filteredTrainings: Training[];
};

export type GymsData = {
  gyms: Gym[];
  isGymsDataLoading: boolean;
  gymsHasError: boolean;
};

export type SelectLocationOptionProcess = {
  activeLocationOption: string;
}
