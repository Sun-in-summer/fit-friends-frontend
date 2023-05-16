import { ChangeEvent, Fragment } from 'react';
import { UserRole } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';

type QuestionnaireCertificateCaloriesBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onCheckboxChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onFileChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  experience: string;
  isReadyToTrainPersonally: boolean;
  caloriesToLoose: number;
  caloriesPerDay: number;
}


function QuestionnaireCertificateCaloriesBlock({ onChange, experience, onCheckboxChange, isReadyToTrainPersonally, caloriesToLoose, caloriesPerDay, onFileChange }: QuestionnaireCertificateCaloriesBlockProps): JSX.Element {
  const user = useAppSelector(getUser);
  const role = user?.role;


  if (role !== UserRole.Coach) {
    return (
      <Fragment>
        <div className="questionnaire-coach__block">
          <span className="questionnaire-coach__legend">
            Ваши дипломы и сертификаты
          </span>
          <div className="drag-and-drop questionnaire-coach__drag-and-drop">
            <label>
              <span className="drag-and-drop__label" tabIndex={0}>
                Загрузите сюда файлы формата PDF, JPG или PNG
                <img
                  width="20"
                  height="20"
                  aria-hidden="true"
                  srcSet="img/sprite/icon-import.svg"
                >
                </img>
              </span>
              <input
                type="file"
                name="import"
                tabIndex={-1}
                accept=".pdf, .jpg, .png"
                onChange={onFileChange}
              />
            </label>
          </div>
        </div>
        <div className="questionnaire-coach__block">
          <span className="questionnaire-coach__legend">
            Расскажите о своём опыте, который мы сможем проверить
          </span>
          <div className="custom-textarea questionnaire-coach__textarea">
            <label>
              <textarea
                name="experience"
                placeholder=" "
                onChange={onChange}
                value={experience}
              >
              </textarea>
            </label>
          </div>
          <div className="questionnaire-coach__checkbox">
            <label>
              <input
                type="checkbox"
                value="individual-training"
                name="individual-training"
                checked={isReadyToTrainPersonally}
                onChange={onCheckboxChange}
              />
              <span className="questionnaire-coach__checkbox-icon">
                <img
                  width="9"
                  height="6"
                  aria-hidden="true"
                  srcSet="img/sprite/arrow-check.svg"
                >
                </img>
              </span>
              <span className="questionnaire-coach__checkbox-label">
                Хочу дополнительно индивидуально тренировать
              </span>
            </label>
          </div>
        </div>
      </Fragment>
    );
  }

  return (

    <div className="questionnaire-user__block">
      <div className="questionnaire-user__calories-lose">
        <span className="questionnaire-user__legend">
          Сколько калорий хотите сбросить
        </span>
        <div className="custom-input custom-input--with-text-right questionnaire-user__input">
          <label>
            <span className="custom-input__wrapper">
              <input
                type="number"
                name="calories-lose"
                value={caloriesToLoose}
                onChange={onChange}
              />
              <span className="custom-input__text">ккал</span>
            </span>
          </label>
        </div>
      </div>
      <div className="questionnaire-user__calories-waste">
        <span className="questionnaire-user__legend">
          Сколько калорий тратить в день
        </span>
        <div className="custom-input custom-input--with-text-right questionnaire-user__input">
          <label>
            <span className="custom-input__wrapper">
              <input
                type="number"
                name="calories-waste"
                value={caloriesPerDay}
                onChange={onChange}
              />
              <span className="custom-input__text">ккал</span>
            </span>
          </label>
        </div>
      </div>
    </div>

  );
}

export default QuestionnaireCertificateCaloriesBlock;
