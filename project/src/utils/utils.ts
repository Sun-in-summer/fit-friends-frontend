import { AppRoute, NavItemsEn, UserRole, UserRoleEn } from '../const';
import { TrainingQuery } from '../types/query/training-query';
import { UsersQuery } from '../types/query/users-query';
import { TrainingLevel, TrainingLevelEn } from '../types/training-level.enum';
import { TrainingTime, TrainingTimeEn } from '../types/training-time.enum';
import { TrainingType, TrainingTypeEn } from '../types/training-type.enum';
import { ExtendedUser } from '../types/user.interface';

export const validateSignInForm = (email: HTMLInputElement, password: HTMLInputElement) => {
  const validPassword = /^[a-zA-Z0-9]{6,12}/;
  const validLogin = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !!(password.value.match(validPassword) && email.value.match(validLogin));
};


export const translateRole = (userRole: string) => {
  if (userRole === UserRole.Coach) {
    return UserRoleEn.Coach;
  }
  return UserRoleEn.User;
};

export const translateTrainignLevel = (level: string) => {
  switch (level) {
    case TrainingLevelEn.Newbee :
      level = TrainingLevel.Newbee;
      break;
    case TrainingLevelEn.Amateur:
      level = TrainingLevel.Amateur;
      break;
    case TrainingLevelEn.Pro:
      level = TrainingLevel.Pro;
      break;
  }

  return level;
};


export const translateEnToRu = (word: string) => {
  switch(word) {
    case TrainingTimeEn.TenToThirty:
      word = TrainingTime.TenToThirty;
      break;
    case TrainingTimeEn.ThirtyToFifty:
      word = TrainingTime.ThirtyToFifty;
      break;
    case TrainingTimeEn.FiftyToEighty:
      word = TrainingTime.FiftyToEighty;
      break;
    case TrainingTimeEn.OverEighty:
      word = TrainingTime.OverEighty;
      break;
    case TrainingTypeEn.Yoga:
      word = TrainingType.Yoga;
      break;
    case TrainingTypeEn.Running:
      word = TrainingType.Running;
      break;
    case TrainingTypeEn.Boxing:
      word = TrainingType.Boxing;
      break;
    case TrainingTypeEn.Stretching:
      word = TrainingType.Stretching;
      break;
    case TrainingTypeEn.Crossfit:
      word = TrainingType.Crossfit;
      break;
    case TrainingTypeEn.Aerobics:
      word = TrainingType.Aerobics;
      break;
    case TrainingTypeEn.Pilates:
      word = TrainingType.Pilates;
      break;
  }
  return word;
};


export const getNavRoute = (item: string, role: string | undefined): string => {
  switch (item) {
    case NavItemsEn.Main:
      return AppRoute.Root;
      break;
    case NavItemsEn.Profile:
      if (role === UserRole.Coach) {
        return AppRoute.CoachProfile;
        break;
      }
      return AppRoute.UserProfile;
      break;
    case NavItemsEn.Friends:
      return AppRoute.MyFriends;
      break;
    case NavItemsEn.Notificatios:
      return AppRoute.Notifications;
      break;
    default:
      return AppRoute.Root;
  }
};


export const getQueryString = (queryArgs?: TrainingQuery & UsersQuery) => {
  if (!queryArgs) {return '';}

  const queryParams = [
    `${queryArgs.minPrice !== undefined ? `minPrice=${queryArgs.minPrice}` : ''}`,
    `${queryArgs.maxPrice !== undefined ? `maxPrice=${queryArgs.maxPrice}` : ''}`,
    `${queryArgs.minCaloriesQty ? `minCaloriesCount=${queryArgs.minCaloriesQty}` : ''}`,
    `${queryArgs.maxCaloriesQty ? `maxCaloriesCount=${queryArgs.maxCaloriesQty}` : ''}`,
    `${queryArgs.minRating ? `minRating=${queryArgs.minRating}` : ''}`,
    `${queryArgs.maxRating ? `maxRating=${queryArgs.maxRating}` : ''}`,
    `${queryArgs.duration ? `duration=${queryArgs.duration}` : ''}`,
    `${queryArgs.trainingTypes ? `trainingType=${queryArgs.trainingTypes}` : ''}`,
    `${queryArgs.sortOption ? `sortOrder=${queryArgs.sortOption}` : ''}`,
    `${queryArgs.page ? `page=${queryArgs.page}` : ''}`,
    `${queryArgs.limit ? `limit=${queryArgs.limit}` : ''}`,
    // `${queryArgs.place ? `place=${queryArgs.place}` : ''}`,
    `${queryArgs.role ? `role=${queryArgs.role}` : ''}`,
    `${queryArgs.level ? `level=${queryArgs.level}` : ''}`,
  ];

  const isNotEmptyString = queryParams.filter((param) => param !== '').join('') !== '';

  const queryString = isNotEmptyString ? `?${queryParams.filter((param) => param !== '').join('&')}` : '';

  return queryString;
};

export const getSortedUsers = ( users: ExtendedUser[], role: string): ExtendedUser[] => {
  const usersCopy = users.slice();
  const usersByRole = usersCopy.filter((user) => user.role === role);
  const usersOfOtherRole = usersCopy.filter((user) => user.role !== role);
  const finalUsers = usersByRole.concat(usersOfOtherRole);
  return finalUsers;
};


export const debounce = <T>(callback: (arg: T) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (arg: T) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(arg), delay);
  };
};
