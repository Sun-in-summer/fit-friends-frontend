import { ChangeEvent } from 'react';
import { UserRole } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import { TrainingTime } from '../../types/training-time.enum';
import { translateEnToRu } from '../../utils/utils';

type QuestionnaireHowMuchTimeBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingTimeValue: string;
}


function QuestionnaireHowMuchTimeBlock({ onChange, trainingTimeValue }: QuestionnaireHowMuchTimeBlockProps): JSX.Element | null {


  const user = useAppSelector(getUser);
  const role: string = user?.role ?? '';

  const timesEn = Object.keys(TrainingTime);


  if (role === UserRole.Coach) {
    return null;
  }
  return (
    <div className="questionnaire-user__block">
      <span className="questionnaire-user__legend">
        Сколько времени вы готовы уделять на тренировку в день
      </span>
      <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-user__radio">
        {
          timesEn.map((time) => {
            const timeRu = translateEnToRu(time);
            const isChecked = trainingTimeValue === timeRu;
            return (
              <div
                className="custom-toggle-radio__block"
                key={time}
              >
                <label>
                  <input
                    type="radio"
                    name="time"
                    id={time}
                    checked={isChecked}
                    onChange={onChange}
                    value={timeRu}
                  />
                  <span className="custom-toggle-radio__icon"></span>
                  <span className="custom-toggle-radio__label">{timeRu}</span>
                </label>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default QuestionnaireHowMuchTimeBlock;
