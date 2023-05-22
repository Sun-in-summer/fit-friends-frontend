import { Helmet } from 'react-helmet-async';
import QuestionnaireLevelBlock from '../../components/questionnaire-level-block/questionnaire-level-block';
import QuestionnaireSpecializationBlock from '../../components/questionnaire-specialization-block/questionaire-specialization-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestionnaireSendingResultStatus, getUser } from '../../store/user-process/selector';

import QuestionnaireHowMuchTimeBlock from '../../components/questionnaire-how-much-time-block/questionaire-how-much-time-block';
import QuestionnaireCertificateCaloriesBlock from '../../components/questionnaire-certificate-calories-block/questionaire-certificate-calories-block';
import { translateRole } from '../../utils/utils';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { TrainingLevel } from '../../types/training-level.enum';
import { TrainingTime } from '../../types/training-time.enum';
import { AdditionalUserInfo } from '../../types/user.interface';
import { sendQuestionnaireAction } from '../../store/api-actions';
import { AppRoute, UserRole } from '../../const';
import { useNavigate } from 'react-router-dom';


function QuestionnaireScreen(): JSX.Element {
  const user = useAppSelector(getUser);
  const role: string = user?.role ?? '';
  const roleEn: string = translateRole(role);
  const dispatch = useAppDispatch();


  const [formData, setFormData] = useState({
    level: TrainingLevel.Newbee,
    time: TrainingTime.TenToThirty,
    caloriesToLoose: 0,
    caloriesPerDay: 0,
    experience: '',
    isReadyToTrainPersonally: true,
    trainingTypes: [] as string[],
    certificate: '1.pdf'
  });

  const {
    level,
    time,
    caloriesToLoose,
    caloriesPerDay,
    experience,
    isReadyToTrainPersonally,
    trainingTypes,
    certificate
  } = formData;

  const fieldChangeHandle = useCallback((event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = event;
    const { value, name } = target;

    setFormData({ ...formData, [name]: value });
  }, [formData]);


  const fieldCheckboxChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, isReadyToTrainPersonally: !isReadyToTrainPersonally });
  };

  const manyCheckboxesChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    if (trainingTypes.includes(value)) {
      const indexOfTypeToRemove = trainingTypes.indexOf(value);
      if (indexOfTypeToRemove !== 0) {
        const indexToRemove = indexOfTypeToRemove - 1;
        const newTrainingTypes = trainingTypes.splice(indexToRemove, 1);
        setFormData({ ...formData, trainingTypes: newTrainingTypes });
      }
      else {
        trainingTypes.splice(indexOfTypeToRemove, 1);
        setFormData({ ...formData, trainingTypes: trainingTypes });
      }
    }
    else {
      trainingTypes.push(value);
      setFormData({ ...formData, trainingTypes: trainingTypes });
    }
  };

  const fileChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // handleAddCertificate(file);
      const downloadedFileUrl = URL.createObjectURL(file);
      setFormData({ ...formData, certificate: downloadedFileUrl });
    }
  };


  const onSubmit = useCallback((userData: AdditionalUserInfo) => {
    dispatch(sendQuestionnaireAction(userData));

  }, [dispatch]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ((caloriesToLoose !== 0 && caloriesPerDay !== 0 && trainingTypes.length !== 0) || (experience !== '' && trainingTypes.length !== 0)) {
      onSubmit({
        id: user?.id,
        role: user?.role,
        isReadyToTrainPersonally,
        trainingLevel: level,
        trainingType: trainingTypes,
        certificate: certificate,
        credits: experience,
        caloriesToDrop: caloriesToLoose,
        caloriesToSpendPerDay: caloriesPerDay
      });

    }
  };

  const isQuestionnaireSent = useAppSelector(getQuestionnaireSendingResultStatus);
  // const isQuestionnaireSending = useAppSelector(getQuestionnaireSendingStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (isQuestionnaireSent === true) {
      if (user?.role === UserRole.Coach) {
        navigate(AppRoute.CoachProfile);
      }
      if (user?.role === UserRole.User) {
        navigate(AppRoute.UserProfile);
      }
    }
  }, [isQuestionnaireSent, navigate, user]);


  return (
    <div className="wrapper">
      <main>
        <Helmet>
          <title>FitFriends. Добро пожаловать!</title>
        </Helmet>
        <div className="background-logo">
          <svg
            className="background-logo__logo"
            width="750"
            height="284"
            aria-hidden="true"
          >
            <use xlinkHref="/sprites.svg#logo-big"></use>
          </svg>
          <svg
            className="background-logo__icon"
            width="343"
            height="343"
            aria-hidden="true"
          >
            <use xlinkHref="/sprites.svg#icon-logotype"></use>
          </svg>
        </div>
        <div className={`popup-form popup-form--questionnaire-${roleEn}`}>
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form
                  method="get"
                  onSubmit={handleSubmit}
                >
                  <div className={`questionnaire-${roleEn}`}>
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className={`questionnaire-${roleEn}__wrapper`}>
                      <QuestionnaireSpecializationBlock
                        onChange={manyCheckboxesChangeHandle}
                        trainingTypes={trainingTypes}
                      />
                      <QuestionnaireHowMuchTimeBlock
                        onChange={fieldChangeHandle}
                        trainingTimeValue={time}
                      />
                      <QuestionnaireLevelBlock
                        onChange={fieldChangeHandle}
                        trainingLevelValue={level}
                      />
                      <QuestionnaireCertificateCaloriesBlock
                        onChange={fieldChangeHandle}
                        experience={experience}
                        caloriesPerDay={caloriesPerDay}
                        caloriesToLoose={caloriesToLoose}
                        onCheckboxChange={fieldCheckboxChangeHandle}
                        isReadyToTrainPersonally={isReadyToTrainPersonally}
                        onFileChange={fileChangeHandle}

                      />
                      <button
                        className="btn questionnaire-coach__button"
                        type="submit"
                      >
                        Продолжить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default QuestionnaireScreen;
