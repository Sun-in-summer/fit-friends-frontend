export const TRAINING_SERVICE_BACKEND_URL = 'http://localhost:3333/api';
export const USER_SERVICE_BACKEND_URL = 'http://localhost:3332/api';

export const DEFAULT_END_INDEX = 3;
export const DEFAULT_START_INDEX = 0;
export const DEFAULT_END_POPULAR_INDEX = 4;
export const DEFAULT_START_POPULAR_INDEX = 0;
export const DEFAULT_END_COMPANY_INDEX = 4;
export const DEFAULT_START_COMPANY_INDEX = 0;
export const DEFAULT_SPECIAL_OFFERS_LENGTH = 3;
export const DEFAULT_SPECIAL_OFFERS_MIDDLE = 1;
export const DEFAULT_DISCOUNT_SPECIAL_OFFER_TRAINING = 0.8;

export const DEFAULT_PAGE = 1;
export const MAX_TRAININGS_QTY_PER_PAGE = 12;
export const FILTER_QUERY_DELAY = 1500;

export enum AppRoute {
  Test ='/test',
  Root = '/',
  Login = '/login',
  Register = '/register',
  CoachQuestionnaire = '/questionnaire-coach',
  CoachProfile = '/profile-coach',
  UserProfile ='/profile-user',
  CreateTraining = '/create-training',
  CoachTrainings = '/coach-trainings',
  CoachOrders ='/coach-orders',
  MyFriends ='/my-friends',
  UserQuestionnaire = '/questionnaire-user',
  Main = '/main',
  TrainingsCatalogue = '/trainings',
  Training = '/trainings/:id',
  MyPurchases = '/user-purchases',
  MyGyms = '/user-gyms',
  TrainingsDiary = '/user/trainings-diary',
  FoodDiary = '/user/food-diary',
  GymsCatalogue = '/gyms',
  Gym = '/gyms/:id',
  GymLocation = '/gyms-location/:id',
  UsersCatalogue = '/users',
  User = '/user/:id',
  Notifications = '/notifications',
  Reviews = '/reviews/:id'
}

export enum APIRoute {
  Trainings = '/trainings',
  Auth = '/auth',
  Reviews = '/reviews',
  Login = '/login',
  Logout = '/logout',
  CheckAuth ='/checkAuth',
  Register = '/register',
  RegisterBasic = '/register-basic',
  Questionnaire = '/questionnaire',
  UpdateUser = '/update/:id',
  Gyms = '/gyms'

}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const enum UserRole {
  User = 'пользователь',
  Coach = 'тренер',
}

export const enum UserRoleEn {
  User = 'user',
  Coach = 'coach',
}

export const GenderNames = {
  Female: 'Женский',
  Male: 'Мужской',
  Unknown:'Неважно',
};


export const LocationTitles = {
  Pionerskaya: 'Пионерская',
  Petrogradskaya:  'Петроградская',
  Udelnaya:  'Удельная',
  Zvezdnaya:  'Звёздная',
  Sportivnaya: 'Спортивная',
};


export const LEVELS = ['Новичок' , 'Любитель' , 'Профессионал'];

export const NavItems : {[key: string]: string} = {
  Main : 'На главную',
  Profile : 'Личный кабинет',
  Friends : 'Друзья',
  Notificatios : 'Уведомления'
} ;

export const NavItemsEn = {
  Main : 'Main',
  Profile : 'Profile',
  Friends : 'Friends',
  Notificatios : 'Notificatios'
} ;

export const NavItemIcons: {[key: string]: string} = {
  Main:'home',
  Profile:'user',
  Friends :'friends',
  Notificatios : 'notification'
};

export const UserDetailsListboxes: {[key: string]: string} = {
  Place : 'Локация',
  Gender: 'Пол',
  Level: 'Уровень'
};

export const UserDetailsListboxesEn: {[key: string]: string} = {
  Place : 'Place',
  Gender: 'Gender',
  Level: 'Level'
};

export const SortOptions: {[key: string]: string} = {
  Cheaper : 'Дешевле',
  MoreExpensive: 'Дороже',
  FreeOfCharge: 'Бесплатно'
};
export const SortOptionsEn: {[key: string]: string} = {
  Cheaper : 'Cheaper',
  MoreExpensive: 'MoreExpensive',
  FreeOfCharge: 'FreeOfCharge'
};


export const TrainingCaloriesQty = {
  Min: 1000,
  Max: 5000
};

export const TrainingPrice = {
  Min: 0,
  Max: 100000000
};
