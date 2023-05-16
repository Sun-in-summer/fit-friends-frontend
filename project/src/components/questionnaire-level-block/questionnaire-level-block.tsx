import { ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import { TrainingLevel } from '../../types/training-level.enum';
import { translateRole, translateTrainignLevel } from '../../utils/utils';

type QuestionnaireLevelBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingLevelValue: string;
}


function QuestionnaireLevelBlock({ onChange, trainingLevelValue }: QuestionnaireLevelBlockProps): JSX.Element {

  const user = useAppSelector(getUser);
  const role: string = user?.role ?? '';
  const roleEn: string = translateRole(role);
  const levelsEn = Object.keys(TrainingLevel);


  return (
    <div className={`questionnaire-${roleEn}__block`}><span className={`questionnaire-${roleEn}__legend`}>Ваш уровень</span>
      <div className={`custom-toggle-radio custom-toggle-radio--big questionnaire-${roleEn}__radio`}>

        {levelsEn.map((level) => {
          const levelRu = translateTrainignLevel(level);
          const isChecked = trainingLevelValue === levelRu;
          return (
            <div
              className="custom-toggle-radio__block"
              key={level}
            >
              <label>
                <input
                  type="radio"
                  name="level"
                  id={level}
                  checked={isChecked}
                  onChange={onChange}
                  value={levelRu}
                />
                <span className="custom-toggle-radio__icon"></span>
                <span className="custom-toggle-radio__label">{levelRu}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionnaireLevelBlock;
