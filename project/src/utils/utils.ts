import { UserRole, UserRoleEn } from '../const';
import { TrainingLevel, TrainingLevelEn } from '../types/training-level.enum';
import { TrainingTime, TrainingTimeEn } from '../types/training-time.enum';
import { TrainingType, TrainingTypeEn } from '../types/training-type.enum';

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

