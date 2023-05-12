import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import IntroScreen from '../../pages/intro-screen/intro-screen';
import SignInScreen from '../../pages/sign-in-screen/sing-in-screen';
import SignUpScreen from '../../pages/sign-up-screen/sign-up-screen';
import TrainingCatalogueScreen from '../../pages/training-catalogue-screen/training-catalogue-screen';
import QuestionnaireCoachScreen from '../../pages/questionnaire-coach-screen/questionnaire-coach-screen';
import QuestionnaireUserScreen from '../../pages/questionnaire-user-screen.tsx/questionnaire-user-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import IndexScreen from '../../pages/index-screen/index-screen';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import { Training } from '../../types/training.interface';
import { ExtendedUser } from '../../types/user.interface';
import { Review } from '../../types/review.interface';
import { Gym } from '../../types/gym.interface';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
// import { ChangeEvent, useState } from 'react';


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
}


function App({popularTrainingsQty, lookForCompanyUsersQty, specialForYouItemsQty, trainingCatalogueTrainingsQty, trainingsScreenReviewsQty, gymCatalogueScreenGymsQty , userCatalogueScreenUsersQty, userCardScreenTrainingsQty, myGymsGymsQty,
  trainings,
  users,
  gyms,
  reviews
}: AppScreenProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  // const isTrainingsDataLoading = useAppSelector((state) => state.isTrainingsDataLoading);

  // if(authorizationStatus === AuthorizationStatus.Unknown ||)


  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element = {<IntroScreen />}
          />
          <Route
            path={AppRoute.Register}
            element = {
              <SignUpScreen />
            }
          />
          <Route
            path={AppRoute.CoachQuestionnaire}
            element = {<QuestionnaireCoachScreen />}
          />
          <Route
            path={AppRoute.UserQuestionnaire}
            element = {<QuestionnaireUserScreen />}
          />
          <Route
            path={AppRoute.Login}
            element = {<SignInScreen />}
          />
          <Route
            path={AppRoute.Main}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <IndexScreen
                  popularTrainingsQty = {popularTrainingsQty}
                  lookForCompanyUsersQty ={lookForCompanyUsersQty}
                  specialForYouItemsQty={specialForYouItemsQty}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.TrainingsCatalogue}
            element = {
              <TrainingCatalogueScreen
                trainingCatalogueTrainingsQty={trainingCatalogueTrainingsQty}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  );
}

export default App;
