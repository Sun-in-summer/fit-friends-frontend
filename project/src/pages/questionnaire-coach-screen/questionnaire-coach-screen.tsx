import { Helmet } from 'react-helmet-async';
import QuestionnaireLevelBlock from '../../components/questionnaire-level-block/questionnaire-level-block';
import QuestionnaireSpecializationBlock from '../../components/questionnaire-specialization-block/questionaire-specialization-block';

function QuestionnaireCoachScreen(): JSX.Element {
  return (

    <div className="wrapper">
      <main>
        <Helmet>
          <title>FitFriends. Добро пожаловать!</title>
        </Helmet>
        <div className="background-logo">
          <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
            <use xlinkHref="/sprites.svg#logo-big"></use>
          </svg>
          <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-logotype"></use>
          </svg>
        </div>
        <div className="popup-form popup-form--questionnaire-coach">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form method="get">
                  <div className="questionnaire-coach">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-coach__wrapper">
                      <QuestionnaireSpecializationBlock role ='coach'/>
                      <QuestionnaireLevelBlock role ='coach'/>
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваши дипломы и сертификаты</span>
                        <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                          <label>
                            <span className="drag-and-drop__label" tabIndex={0}>Загрузите сюда файлы формата PDF, JPG или PNG
                              <img width="20" height="20" aria-hidden="true" srcSet= 'img/sprite/icon-import.svg'></img>
                            </span>
                            <input type="file" name="import" tabIndex={-1} accept=".pdf, .jpg, .png"/>
                          </label>
                        </div>
                      </div>
                      <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Расскажите о своём опыте, который мы сможем проверить</span>
                        <div className="custom-textarea questionnaire-coach__textarea">
                          <label>
                            <textarea name="description" placeholder=" "></textarea>
                          </label>
                        </div>
                        <div className="questionnaire-coach__checkbox">
                          <label>
                            <input type="checkbox" value="individual-training" name="individual-training" checked/>
                            <span className="questionnaire-coach__checkbox-icon">
                              <img width="9" height="6" aria-hidden="true" srcSet= 'img/sprite/arrow-check.svg'></img>
                            </span>
                            <span className="questionnaire-coach__checkbox-label">Хочу дополнительно индивидуально тренировать</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn questionnaire-coach__button" type="submit">Продолжить</button>
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

export default QuestionnaireCoachScreen;
