import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import IntroScreen from '../../pages/intro-screen/intro-screen';
import SignInScreen from '../../pages/sign-in-screen/sing-in-screen';
import SignUpScreen from '../../pages/sign-up-screen/sign-up-screen';
import TrainingCatalogueScreen from '../../pages/training-catalogue-screen/training-catalogue-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import IndexScreen from '../../pages/index-screen/index-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Training } from '../../types/training.interface';
import { ExtendedUser } from '../../types/user.interface';
import { Review } from '../../types/review.interface';
import { Gym } from '../../types/gym.interface';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import QuestionnaireScreen from '../../pages/questionnaire-screen/questionnaire-screen';
import PersonalAccountCoachScreen from '../../pages/personal-account-coach-screen/personal-account-coach-screen';
import MyTrainingsScreen from '../../pages/my-trainings-screen/my-trainings-screen';
import MyOrdersScreen from '../../pages/my-orders-screen/my-orders-screen';
import FriendsListScreen from '../../pages/friends-list-screen/friends-list-screen';
import CreateTrainingScreen from '../../pages/create-training-screen/create-training-screen';
import UsersCatalogueScreen from '../../pages/users-catalogue-screen/users-catalogue-screen';


type AppScreenProps = {
  popularTrainingsQty: number;
  lookForCompanyUsersQty: number;
  specialForYouItemsQty: number;
  trainingCatalogueTrainingsQty: number;
  trainingsScreenReviewsQty: number;
  gymCatalogueScreenGymsQty: number;
  userCatalogueScreenUsersQty: number;
  userCardScreenTrainingsQty: number;
  myGymsGymsQty: number;
  trainings: Training[];
  users: ExtendedUser[];
  reviews: Review[];
  gyms: Gym[];
};

function App({
  popularTrainingsQty,
  lookForCompanyUsersQty,
  specialForYouItemsQty,
  trainingCatalogueTrainingsQty,
  trainingsScreenReviewsQty,
  gymCatalogueScreenGymsQty,
  userCatalogueScreenUsersQty,
  userCardScreenTrainingsQty,
  myGymsGymsQty,
  trainings,
  users,
  gyms,
  reviews,
}: AppScreenProps): JSX.Element {

  // const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<IntroScreen />} />
          <Route path={AppRoute.Register} element={<SignUpScreen />} />
          <Route
            path={AppRoute.CoachQuestionnaire}
            element={<QuestionnaireScreen />}
          />
          <Route
            path={AppRoute.UserQuestionnaire}
            element={<QuestionnaireScreen />}
          />
          <Route path={AppRoute.Login} element={<SignInScreen />} />
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute >
                <IndexScreen
                  popularTrainingsQty={popularTrainingsQty}
                  lookForCompanyUsersQty={lookForCompanyUsersQty}
                  specialForYouItemsQty={specialForYouItemsQty}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.CoachProfile}
            element={
              <PrivateRoute >
                <PersonalAccountCoachScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.CoachTrainings}
            element={
              <PrivateRoute >
                <MyTrainingsScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.CoachOrders}
            element={
              <PrivateRoute >
                <MyOrdersScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.MyFriends}
            element={
              <PrivateRoute >
                <FriendsListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.CreateTraining}
            element={
              <PrivateRoute >
                <CreateTrainingScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.TrainingsCatalogue}
            element={
              <PrivateRoute >
                <TrainingCatalogueScreen
                  trainingCatalogueTrainingsQty={trainingCatalogueTrainingsQty}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.UsersCatalogue}
            element={
              <PrivateRoute >
                <UsersCatalogueScreen />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
