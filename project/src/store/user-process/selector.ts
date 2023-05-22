import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { ExtendedUser } from '../../types/user.interface';
import { NameSpace } from '../store-const';

export const getAuthorizationStatus = (state: State) : AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUser = (state: State): ExtendedUser | null => state[NameSpace.User].user;
export const getCompany = (state: State): ExtendedUser[] => state[NameSpace.User].usersForCompany;

export const getUserfFullInfoLoadingStatus = (state: State): boolean => state[NameSpace.User].isUserFullInfoLoading;

export const getQuestionnaireSendingResultStatus = (state: State): boolean => state[NameSpace.User].isQuestionnaireSent;

export const getCompanyUsersLoadingErrorStatus = (state: State): boolean => state[NameSpace.User].isCompanyUsersLoadingError;
export const getCompanyUsersLoadingStatus = (state: State): boolean => state[NameSpace.User].isCompanyUsersLoading;
