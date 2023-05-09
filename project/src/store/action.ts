import { createAction } from '@reduxjs/toolkit';
import { Training } from '../types/training.interface';
import { AuthorizationStatus } from '../const';


export const setActiveLocationOption = createAction<string>('register/changeLocationOption');


export const loadTrainings = createAction<Training[]>('data/loadTrainings');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
