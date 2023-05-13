import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';


export const setActiveLocationOption = createAction<string>('register/changeLocationOption');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const setUserId = createAction<string>('data/setUserId');
