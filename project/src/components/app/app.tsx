import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import IntroScreen from '../../pages/intro-screen/intro-screen';
import SignInScreen from '../../pages/sign-in-screen/sing-in-screen';
import SignUpScreen from '../../pages/sign-up-screen/sign-up-screen';
// import QuestionnaireCoachScreen from '../../pages/questionnaire-coach-screen/questionnaire-coach-screen';
// import QuestionnaireUserScreen from '../../pages/questionnaire-user-screen.tsx/questionnaire-user-screen';

// import IndexScreen from '../../pages/index-screen/index-screen';

import TrainingCatalogueScreen from '../../pages/training-catalogue-screen/training-catalogue-screen';
import QuestionnaireCoachScreen from '../../pages/questionnaire-coach-screen/questionnaire-coach-screen';
import QuestionnaireUserScreen from '../../pages/questionnaire-user-screen.tsx/questionnaire-user-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import IndexScreen from '../../pages/index-screen/index-screen';


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
}


function App({popularTrainingsQty, lookForCompanyUsersQty, specialForYouItemsQty, trainingCatalogueTrainingsQty, trainingsScreenReviewsQty, gymCatalogueScreenGymsQty , userCatalogueScreenUsersQty, userCardScreenTrainingsQty, myGymsGymsQty}: AppScreenProps): JSX.Element {
  return (

    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<IntroScreen />}
        />
        <Route
          path={AppRoute.Register}
          element = {<SignUpScreen />}
        />
        <Route
          path={AppRoute.Login}
          element = {<SignInScreen />}
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
          path={AppRoute.Main}
          element = {
            <IndexScreen
              popularTrainingsQty = {popularTrainingsQty}
              lookForCompanyUsersQty ={lookForCompanyUsersQty}
              specialForYouItemsQty={specialForYouItemsQty}
            />
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
    </BrowserRouter>

  );
}

export default App;
