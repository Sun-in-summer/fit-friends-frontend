import { Fragment, useEffect, useRef, useState } from 'react';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import { UserRole } from '../../const';
import { useParams } from 'react-router-dom';
import { getSelectedTrainingData, getTrainingsErrorStatus } from '../../store/training-data/selector';
import { fetchReviewsAction, fetchSelectedTrainingAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ModalBuyTraining from '../../components/modal-buy-training/modal-buy-training';
import ModalReview from '../../components/modal-review/modal-review';

type TrainingCardScreenProps = {
  trainingsScreenReviewsQty: number;
}

function TrainingCardScreen({ trainingsScreenReviewsQty }: TrainingCardScreenProps): JSX.Element {

  const { id } = useParams();
  const isSelectedTrainingErrorLoading = useAppSelector(getTrainingsErrorStatus);
  const dispatch = useAppDispatch();
  const selectedTraining = useAppSelector(getSelectedTrainingData);
  const user = useAppSelector(getUser);
  const role = user?.role as string;


  const [isBuyTrainingModalOpened, setIsBuyTrainingModalOpened] = useState(false);
  const [isReviewModalOpened, setIsReviewModalOpened] = useState(false);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const playButtonRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    if (!selectedTraining) {
      dispatch(fetchSelectedTrainingAction(id as string));
      dispatch(fetchReviewsAction(id as string));
    }
  }, [dispatch, id, selectedTraining]);

  if (!selectedTraining && !isSelectedTrainingErrorLoading) {
    return <LoadingScreen />;
  }

  if (!selectedTraining && isSelectedTrainingErrorLoading) {
    return (
      <NotFoundScreen />
    );
  }

  const handleBuyButtonClick = () => {
    setIsBuyTrainingModalOpened(true);
  };

  const handleLeaveFeedbackButtonClick = () => {
    setIsReviewModalOpened(true);
  };

  const handlePlayButtonClick = () => {
    if (videoElementRef.current) {
      videoElementRef.current.play();
      videoElementRef.current.controls = true;
    }
    if (playButtonRef.current) {
      playButtonRef.current.style.display = 'none';
    }
  };


  const discountOrBuyButton = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <button className="btn-flat btn-flat--light btn-flat--underlined training-info__discount" type="button">
          <svg width="14" height="14" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-discount"></use>
          </svg><span>Сделать скидку 10%</span>
        </button>
      );
    }
    return (
      <button
        className="btn training-info__buy"
        type="button"
        onClick={handleBuyButtonClick}
      >Купить
      </button>
    );
  };

  const isDicountOrBuyButton = discountOrBuyButton(role);


  const toDropVideo = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <div className="training-video__drop-files">
          <form action="#" method="post">
            <div className="training-video__form-wrapper">
              <div className="drag-and-drop">
                <label>
                  <span className="drag-and-drop__label" tabIndex={0}>Загрузите сюда файлы формата MOV, AVI или MP4
                    <svg width="20" height="20" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#icon-import-video"></use>
                    </svg>
                  </span>
                  <input type="file" name="import" tabIndex={-1} accept=".mov, .avi, .mp4" />
                </label>
              </div>
            </div>
          </form>
        </div>
      );
    }
    return null;
  };

  const isDropFileSection = toDropVideo(role);


  const toSaveDeleteButton = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <div className="training-video__edit-buttons">
          <button className="btn" type="button">Сохранить</button>
          <button className="btn btn--outlined" type="button">Удалить</button>
        </div>
      );
    }

    return null;
  };

  const isSaveDeleteButtonForCoach = toSaveDeleteButton(role);

  const toStartStopTrainingButton = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return null;
    }
    return (
      <Fragment>
        <button className="btn training-video__button training-video__button--start" type="button" disabled>Приступить</button>
        <button className="btn training-video__button training-video__button--stop" type="button">Закончить</button>
      </Fragment>
    );
  };

  const isStartStopTrainingButton = toStartStopTrainingButton(role);

  const toEditAndSaveButton = (userRole: string) => {
    if (userRole === UserRole.Coach) {
      return (
        <Fragment>
          <button className="btn-flat btn-flat--light training-info__edit training-info__edit--edit" type="button">
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-edit"></use>
            </svg><span>Редактировать</span>
          </button>
          <button className="btn-flat btn-flat--light btn-flat--underlined training-info__edit training-info__edit--save" type="button">
            <svg width="12" height="12" aria-hidden="true">
              <use xlinkHref="/sprites.svg#icon-edit"></use>
            </svg><span>Сохранить</span>
          </button>
        </Fragment>

      );
    }
    return null;
  };

  const isEditAndSaveButton = toEditAndSaveButton(role);


  return (

    <div className="wrapper">
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Карточка тренировки</h1>
              <aside className="reviews-side-bar">
                <button className="btn-flat btn-flat--underlined reviews-side-bar__back" type="button">
                  <svg width="14" height="10" aria-hidden="true">
                    <use xlinkHref="/sprites.svg#arrow-left"></use>
                  </svg><span>Назад</span>
                </button>
                <h2 className="reviews-side-bar__title">Отзывы</h2>
                <ul className="reviews-side-bar__list">
                  <ReviewsList id={id} />
                </ul>
                <button
                  className="btn btn--medium reviews-side-bar__button"
                  type="button"
                  disabled={role === UserRole.Coach}
                  onClick={handleLeaveFeedbackButtonClick}

                >Оставить отзыв
                </button>
              </aside>
              <div className="training-card training-card--edit">
                <div className="training-info">
                  <h2 className="visually-hidden">Информация о тренировке</h2>
                  <div className="training-info__header">
                    <div className="training-info__coach">
                      <div className="training-info__photo">
                        <picture>
                          <source type="image/webp" srcSet="../img/content/avatars/coaches/photo-1.webp, ../img/content/avatars/coaches/photo-1@2x.webp 2x" /><img src="../img/content/avatars/coaches/photo-1.png" srcSet="../img/content/avatars/coaches/photo-1@2x.png 2x" width="64" height="64" alt="Изображение тренера" />
                        </picture>
                      </div>
                      <div className="training-info__coach-info"><span className="training-info__label">Тренер</span><span className="training-info__name">{selectedTraining?.coachId}</span></div>
                    </div>
                    {isEditAndSaveButton}
                  </div>
                  <div className="training-info__main-content">
                    <form action="#" method="get">
                      <div className="training-info__form-wrapper">
                        <div className="training-info__info-wrapper">
                          <div className="training-info__input training-info__input--training">
                            <label><span className="training-info__label">Название тренировки</span>
                              <input type="text" name="training" value="energy" />
                            </label>
                            <div className="training-info__error">Обязательное поле</div>
                          </div>
                          <div className="training-info__textarea">
                            <label><span className="training-info__label">Описание тренировки</span>
                              <textarea name="description">{selectedTraining?.description}</textarea>
                            </label>
                          </div>
                        </div>
                        <div className="training-info__rating-wrapper">
                          <div className="training-info__input training-info__input--rating">
                            <label><span className="training-info__label">Рейтинг</span>
                              <span className="training-info__rating-icon">
                                <svg width="18" height="18" aria-hidden="true">
                                  <use xlinkHref="/sprites.svg#icon-star"></use>
                                </svg>
                              </span>
                              <input type="number" name="rating" value="4" />
                            </label>
                          </div>
                          <ul className="training-info__list">
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{selectedTraining?.trainingType}</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{selectedTraining?.trainingForGender}</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{selectedTraining?.calories}</span></div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white"><span>#{selectedTraining?.trainingTime}</span></div>
                            </li>
                          </ul>
                        </div>
                        <div className="training-info__price-wrapper">
                          <div className="training-info__input training-info__input--price">
                            <label><span className="training-info__label">Стоимость</span>
                              <input type="text" name="price" defaultValue={selectedTraining ? selectedTraining.price.toString() : ''} disabled={role === UserRole.User} />
                            </label>
                            <div className="training-info__error">Введите число</div>
                          </div>
                          {isDicountOrBuyButton}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="training-video">
                  <h2 className="training-video__title">Видео</h2>
                  <div className="training-video__video">
                    <div className="training-video__thumbnail">
                      <picture>
                        <source type="image/webp" srcSet="../img/content/training-video/video-thumbnail.webp, ../img/content/training-video/video-thumbnail@2x.webp 2x" /><img src="../img/content/training-video/video-thumbnail.png" srcSet="../img/content/training-video/video-thumbnail@2x.png 2x" width="922" height="566" alt="Обложка видео" />
                      </picture>
                    </div>
                    <button
                      className="training-video__play-button btn-reset"
                      ref={playButtonRef}
                      onClick={handlePlayButtonClick}
                    >
                      <svg width="18" height="30" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#icon-arrow"></use>
                      </svg>
                    </button>
                  </div>
                  {isDropFileSection}
                  <div className="training-video__buttons-wrapper">
                    {isStartStopTrainingButton}
                    {isSaveDeleteButtonForCoach}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {
        (isBuyTrainingModalOpened && selectedTraining)
        && (
          <ModalBuyTraining
            training={selectedTraining}
            onModalOpen={setIsBuyTrainingModalOpened}
          />
        )
      }
      {
        (isReviewModalOpened && selectedTraining)
        && (
          <ModalReview
            trainingId={selectedTraining.id?.toString()}
            setPopupOpened={setIsReviewModalOpened}
          />
        )
      }
    </div>
  );
}

export default TrainingCardScreen;
