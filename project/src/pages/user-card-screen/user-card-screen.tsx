import { Fragment, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import TrainingCard from '../../components/training-card/training-card';
import { DEFAULT_END_COMPANY_INDEX, DEFAULT_START_COMPANY_INDEX, UserRole } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingsData } from '../../store/training-data/selector';
import { useParams } from 'react-router-dom';
import { getSelectedUserData, getSelectedUserErrorLoadingStatus, getUser } from '../../store/user-process/selector';
import { addFriendAction, fetchMyFriendsAction, fetchSelectedUserAction, removeFriendAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ModalMap from '../../components/modal-map/modal-map';
import ModalCertificates from '../../components/modal-certificates/modal-certificates';


type UserCardScreenProps = {
  userCardScreenTrainingsQty: number;
  role: string;
}

function UserCardScreen({ userCardScreenTrainingsQty, role }: UserCardScreenProps): JSX.Element {

  const { id } = useParams();
  const isSelectedUserErrorLoading = useAppSelector(getSelectedUserErrorLoadingStatus);
  const dispatch = useAppDispatch();
  const selectedUser = useAppSelector(getSelectedUserData);
  const user = useAppSelector(getUser);
  const userId = user?.id;
  const trainings = useAppSelector(getTrainingsData); // заменить на тренировки именно этого тренера

  const [startIndex, setStartIndex] = useState(DEFAULT_START_COMPANY_INDEX);
  const [endIndex, setEndIndex] = useState(DEFAULT_END_COMPANY_INDEX);

  const [isCertificatesModalOpened, setIsCertificatesModalOpened] = useState(false);
  const [isMapModalOpened, setIsMapModalOpened] = useState(false);

  useEffect(() => {
    if (!selectedUser) {
      dispatch(fetchSelectedUserAction(id as string));
    }
  }, [dispatch, id, selectedUser]);

  if (!selectedUser && !isSelectedUserErrorLoading) {
    return <LoadingScreen />;
  }

  if (!selectedUser && isSelectedUserErrorLoading) {
    return (
      <NotFoundScreen />
    );
  }


  const trainingItems = trainings.slice(startIndex, endIndex);

  const FriendAction = {
    Add: 'add',
    Remove: 'remove'
  };


  const handleFriendRelations = async (type: string) => {
    switch (type) {
      case FriendAction.Add:
        await dispatch(addFriendAction(id as string));
        break;
      case FriendAction.Remove:
        await dispatch(removeFriendAction(id as string));
        break;
    }
    await dispatch(fetchMyFriendsAction(userId as string));

  };

  const handleAddFriendButtonClick = () => {
    handleFriendRelations(FriendAction.Add);
  };

  // const handleRemoveFriendButtonClick = () => {
  //   handleFriendRelations(FriendAction.Remove);
  // };


  const handleBackArrowButtonClick = () => {
    setStartIndex((prevState) => startIndex - 1 > 0 ? startIndex - 1 : 0);
    setEndIndex((prevState) => startIndex - 1 >= 0 ? endIndex - 1 : endIndex);
  };

  const handleNextArrowButtonClick = () => {
    setStartIndex((prevState) => startIndex + 3 < trainings.length ? startIndex + 1 : startIndex);
    setEndIndex((prevState) => startIndex + 3 < trainings.length ? endIndex + 1 : endIndex);
  };

  const roleCoachText = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return 'роль тренер';
    }
    return '';
  };

  const toAddCrownIcon = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return null;
    }
    return (
      <div className="user-card__icon">
        <svg className="user-card__crown" width="12" height="12" aria-hidden="true">
          <use xlinkHref="/sprites.svg#icon-crown"></use>
        </svg>
      </div>
    );
  };


  const toShowStatus = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <div className="user-card-coach__status-container">
          <div className="user-card-coach__status user-card-coach__status--tag">
            <svg className="user-card-coach__icon-cup" width="12" height="13" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-cup"></use>
            </svg><span>{selectedUser?.role}</span>
          </div>
          {selectedUser?.isReadyToTrainPersonally ? <div className="user-card-coach__status user-card-coach__status--check"><span>Готов тренировать</span></div> : null}
        </div>
      );
    }
    return (
      <div className="user-card__status"><span>Готов к тренировке</span></div>
    );
  };

  const toShowCertificates = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <button className="btn-flat user-card-coach__sertificate" type="button">
          <svg width="12" height="13" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-teacher"></use>
          </svg><span>Посмотреть сертификаты</span>
        </button>);
    }
    return null;
  };

  const toShowTrainingsList = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <div className="user-card-coach__training">
          <div className="user-card-coach__training-head">
            <h2 className="user-card-coach__training-title">Тренировки</h2>
            <div className="user-card-coach__training-bts">
              <button
                className="btn-icon user-card-coach__training-btn"
                type="button"
                aria-label="back"
                onClick={handleBackArrowButtonClick}
              >
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg>
              </button>
              <button
                className="btn-icon user-card-coach__training-btn"
                type="button"
                aria-label="next"
                onClick={handleNextArrowButtonClick}
              >
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="user-card-coach__training-list">
            {trainingItems.map((item) => <TrainingCard key={item.id} item={item} />)}
          </ul>
          <form className="user-card-coach__training-form">
            <button className="btn user-card-coach__btn-training" type="button">Хочу персональную тренировку</button>
            <div className="user-card-coach__training-check">
              <div className="custom-toggle custom-toggle--checkbox">
                <label>
                  <input type="checkbox" value="user-agreement-1" name="user-agreement" checked />
                  <span className="custom-toggle__icon">
                    <svg width="9" height="6" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-check"></use>
                    </svg>
                  </span>
                  <span className="custom-toggle__label">Получать уведомление на почту о новой тренировке</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    }
    return null;
  };

  const isCrownIcon = toAddCrownIcon(role);

  const isRoleCoach = roleCoachText(role);
  const userStatus = toShowStatus(role);
  const isCertificateButton = toShowCertificates(role);
  const isTrainingsList = toShowTrainingsList(role);

  const isUser = (): JSX.Element => (
    <Fragment>
      <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__content`}>
        <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__head`}>
          <h2 className={`user-card${role === UserRole.Coach ? '-coach' : ''}__title`}>{selectedUser?.firstname}</h2>
          {isCrownIcon}
        </div>
        <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__label`}>
          <svg className={`user-card${role === UserRole.Coach ? '-coach' : ''}__icon-location" width="14" height="14" aria-hidden="true`}>
            <use xlinkHref="/sprites.svg#icon-location"></use>
          </svg><span>{selectedUser?.place}</span>
        </div>
        {userStatus}
        <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__text`}>
          <p>{selectedUser?.credits}</p>
        </div>
        {isCertificateButton}
        <ul className={`user-card${role === UserRole.Coach ? '-coach' : ''}__hashtag-list`}>
          <li className={`user-card${role === UserRole.Coach ? '-coach' : ''}ch__hashtag-item`}>
            <div className="hashtag"><span>#бокс</span></div>
          </li>
          <li className="user-card-coach__hashtag-item">
            <div className="hashtag"><span>#кроссфит</span></div>
          </li>
          <li className="user-card-coach__hashtag-item">
            <div className="hashtag"><span>#силовые</span></div>
          </li>
          <li className="user-card-coach__hashtag-item">
            <div className="hashtag"><span>#йога</span></div>
          </li>
        </ul>
        <button
          className="btn user-card-coach__btn"
          type="button"
          onClick={handleAddFriendButtonClick}
        >Добавить в друзья
        </button>
      </div>
      <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__gallary`}>
        <ul className={`user-card${role === UserRole.Coach ? '-coach' : ''}__gallary-list`}>
          <li className={`user-card${role === UserRole.Coach ? '-coach' : ''}__gallary-item`}><img src="/img/content/user-coach-photo1.jpg" srcSet="/img/content/user-coach-photo1@2x.jpg 2x" width="334" height="573" alt="photo1" />
          </li>
          <li className={`user-card${role === UserRole.Coach ? '-coach' : ''}_gallary-item`}><img src="/img/content/user-coach-photo2.jpg" srcSet="/img/content/user-coach-photo2@2x.jpg 2x" width="334" height="573" alt="photo2" />
          </li>
        </ul>
      </div>
    </Fragment>
  );


  const isDivForCoach = () => {
    if (role === UserRole.Coach) {
      return (
        <div className="user-card-coach__card">
          {isUser()}
        </div>
      );
    }
    return (<Fragment>{isUser()}</Fragment>);
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button
                className="btn-flat inner-page__back"
                type="button"
                onClick={() => window.history.back()}
              >
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="/sprites.svg#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className={`user-card${role === UserRole.Coach ? '-coach' : ''}`}>
                  <h1 className="visually-hidden">Карточка пользователя {isRoleCoach}</h1>
                  <div className={`user-card${role === UserRole.Coach ? '-coach' : ''}__wrapper`}>
                    {isDivForCoach()}


                    {isTrainingsList}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      {
        isCertificatesModalOpened
        && (
          <ModalCertificates
            certificates={selectedUser?.certificate}
            setModalOpened={setIsCertificatesModalOpened}
          />
        )
      }
      {
        isMapModalOpened
        && (
          <ModalMap
            location={selectedUser?.place}
            userName={selectedUser?.firstname}
            setModalOpened={setIsMapModalOpened}
          />
        )
      }
    </div>

  );
}

export default UserCardScreen;
