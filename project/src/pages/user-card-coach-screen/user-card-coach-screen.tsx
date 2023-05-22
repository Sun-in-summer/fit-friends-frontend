import Header from '../../components/header/header';
import TrainingCard from '../../components/training-card/training-card';
import { useAppSelector } from '../../hooks';
import { getTrainingsData } from '../../store/training-data/selector';


type UserCardCoachScreenProps = {
  userCardScreenTrainingsQty: number;
  role: string;
}

function UserCardCoachScreen({ userCardScreenTrainingsQty, role }: UserCardCoachScreenProps): JSX.Element {

  const trainings = useAppSelector(getTrainingsData); // заменить на тренировки именно этого тренера

  const roleCoachText = (userRole: string) => {
    if (userRole === 'coach') {
      return 'роль тренер';
    }
    return '';
  };

  const toAddCrownIcon = (userRole: string) => {
    if (userRole === 'coach') {
      return null;
    }
    return (
      <div className="user-card__icon">
        <svg className="user-card__crown" width="12" height="12" aria-hidden="true">
          <use xlinkHref="#icon-crown"></use>
        </svg>
      </div>
    );
  };

  const toShowStatus = (userRole: string) => {
    if (userRole === 'coach') {
      return (
        <div className="user-card-coach__status-container">
          <div className="user-card-coach__status user-card-coach__status--tag">
            <svg className="user-card-coach__icon-cup" width="12" height="13" aria-hidden="true">
              <use xlinkHref="#icon-cup"></use>
            </svg><span>Тренер</span>
          </div>
          <div className="user-card-coach__status user-card-coach__status--check"><span>Готов тренировать</span></div>
        </div>
      );
    }
    return (
      <div className="user-card__status"><span>Готов к тренировке</span></div>
    );
  };

  const toShowCertificates = (userRole: string) => {
    if (userRole === 'coach') {
      return (
        <button className="btn-flat user-card-coach__sertificate" type="button">
          <svg width="12" height="13" aria-hidden="true">
            <use xlinkHref="#icon-teacher"></use>
          </svg><span>Посмотреть сертификаты</span>
        </button>);
    }
    return null;
  };

  const toShowTrainingsList = (userRole: string) => {
    if (userRole === 'coach') {
      return (
        <div className="user-card-coach__training">
          <div className="user-card-coach__training-head">
            <h2 className="user-card-coach__training-title">Тренировки</h2>
            <div className="user-card-coach__training-bts">
              <button className="btn-icon user-card-coach__training-btn" type="button" aria-label="back">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
              </button>
              <button className="btn-icon user-card-coach__training-btn" type="button" aria-label="next">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className="user-card-coach__training-list">
            {trainings.map((item) => <TrainingCard key={item.id} item={item} />)}
          </ul>
          <form className="user-card-coach__training-form">
            <button className="btn user-card-coach__btn-training" type="button">Хочу персональную тренировку</button>
            <div className="user-card-coach__training-check">
              <div className="custom-toggle custom-toggle--checkbox">
                <label>
                  <input type="checkbox" value="user-agreement-1" name="user-agreement" checked />
                  <span className="custom-toggle__icon">
                    <svg width="9" height="6" aria-hidden="true">
                      <use xlinkHref="#arrow-check"></use>
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

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button className="btn-flat inner-page__back" type="button">
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg><span>Назад</span>
              </button>
              <div className="inner-page__content">
                <section className="user-card-coach">
                  <h1 className="visually-hidden">Карточка пользователя {isRoleCoach}</h1>
                  <div className="user-card-coach__wrapper">
                    <div className={`user-card${role === 'coach' ? '-coach' : ''}__card`}>
                      <div className={`user-card${role === 'coach' ? '-coach' : ''}__content`}>
                        <div className={`user-card${role === 'coach' ? '-coach' : ''}__head`}>
                          <h2 className={`user-card${role === 'coach' ? '-coach' : ''}__title`}>Валерия</h2>
                          {isCrownIcon}
                        </div>
                        <div className={`user-card${role === 'coach' ? '-coach' : ''}__label`}>
                          <svg className={`user-card${role === 'coach' ? '-coach' : ''}__icon-location" width="12" height="14" aria-hidden="true`}>
                            <use xlinkHref="#icon-location"></use>
                          </svg><span>Адмиралтейская</span>
                        </div>
                        {userStatus}
                        <div className={`user-card${role === 'coach' ? '-coach' : ''}__text`}>
                          <p>Привет! Меня зовут Иванова Валерия, мне 34 года. Я&nbsp;профессиональный тренер по&nbsp;боксу. Не&nbsp;боюсь пробовать новое, также увлекаюсь кроссфитом, йогой и&nbsp;силовыми тренировками.</p>
                          <p>Провожу как индивидуальные тренировки, так и&nbsp;групповые занятия. Помогу вам достигнуть своей цели и&nbsp;сделать это с&nbsp;удовольствием!</p>
                        </div>
                        {isCertificateButton}
                        <ul className={`user-card${role === 'coach' ? '-coach' : ''}__hashtag-list`}>
                          <li className={`user-card${role === 'coach' ? '-coach' : ''}ch__hashtag-item`}>
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
                        <button className="btn user-card-coach__btn" type="button">Добавить в друзья</button>
                      </div>
                      <div className={`user-card${role === 'coach' ? '-coach' : ''}__gallary`}>
                        <ul className={`user-card${role === 'coach' ? '-coach' : ''}__gallary-list`}>
                          <li className={`user-card${role === 'coach' ? '-coach' : ''}__gallary-item`}><img src="img/content/user-coach-photo1.jpg" srcSet="img/content/user-coach-photo1@2x.jpg 2x" width="334" height="573" alt="photo1" />
                          </li>
                          <li className={`user-card${role === 'coach' ? '-coach' : ''}_gallary-item`}><img src="img/content/user-coach-photo2.jpg" srcSet="img/content/user-coach-photo2@2x.jpg 2x" width="334" height="573" alt="photo2" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {isTrainingsList}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default UserCardCoachScreen;
