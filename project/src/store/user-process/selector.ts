import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { ExtendedUser } from '../../types/user.interface';
import { NameSpace } from '../store-const';

export const getAuthorizationStatus = (state: State) : AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUser = (state: State): ExtendedUser | null => state[NameSpace.User].user;

export const getUserfFullInfoLoadingStatus = (state: State): boolean => state[NameSpace.User].isUserFullInfoLoading;


