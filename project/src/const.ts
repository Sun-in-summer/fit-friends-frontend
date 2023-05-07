export enum AppRoute {
  Root = '/',
  Login = '/login',
  Register = '/register',
  CoachQuestionnaire = '/questionnaire-coach',
  CoachProfile = '/coach-profile',
  CreateTraining = '/create-training',
  CoachTrainings = '/coach-trainings',
  CoachOrders ='/coach-orders',
  MyFriends ='/my-friends',
  UserQuestionnaire = '/questionnaire-user',
  Main = '/main',
  TrainingsCatalogue = '/trainings',
  Training = '/trainings/:id',
  UserProfile = '/user/profile',
  MyPurchases = '/user/purchases',
  MyGyms = '/user/my-gyms',
  TrainingsDiary = '/user/trainings-diary',
  FoodDiary = '/user/food-diary',
  GymsCatalogue = '/gyms',
  Gym = '/gyms/:id',
  GymLocation = '/gyms/location/:id',
  UsersCatalogue = '/users',
  User = '/user/:id'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
