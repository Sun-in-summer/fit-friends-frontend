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
};

export type SelectLocationOptionProcess = {
  activeLocationOption: string;
}
