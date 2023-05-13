import { createAction } from '@reduxjs/toolkit';
import { Training } from '../types/training.interface';
import { AppRoute, AuthorizationStatus } from '../const';


export const setActiveLocationOption = createAction<string>('register/changeLocationOption');


export const loadTrainings = createAction<Training[]>('data/loadTrainings');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');


export const setTrainingsDataLoadingStatus = createAction<boolean>('data/setTrainingsDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
