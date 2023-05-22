import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { BasicUserInfo } from '../types/user.interface';


export const setActiveLocationOption = createAction<string>('register/changeLocationOption');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const redirectBack = createAction('main/redirectBack');
export const setUserId = createAction<string>('data/setUserId');
export const setUserBasicInfo = createAction<BasicUserInfo>('user/setBasicUserInfo'); // удалить?


