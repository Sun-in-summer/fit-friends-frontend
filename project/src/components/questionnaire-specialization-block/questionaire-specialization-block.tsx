import { ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import { TrainingTypeEn } from '../../types/training-type.enum';
import { translateEnToRu, translateRole } from '../../utils/utils';

type QuestionnaireSpecializationBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingTypes: string[];
}


function QuestionnaireSpecializationBlock({ onChange, trainingTypes }: QuestionnaireSpecializationBlockProps): JSX.Element {

  const user = useAppSelector(getUser);
  const role: string = user?.role ?? '';
  const roleEn: string = translateRole(role);
  const typesEn = Object.keys(TrainingTypeEn);

  return (
    <div className={`questionnaire-${roleEn}__block`}><span className={`questionnaire-${roleEn}__legend`}>Ваша специализация (тип) тренировок</span>
      <div className={`specialization-checkbox questionnaire-${roleEn}__specializations`}>
        {

          typesEn.map((type) => {
            const typeRu = translateEnToRu(type);
            const isChecked = trainingTypes.includes(typeRu);
            return (
              <div
                className="btn-checkbox"
                key={type}
              >
                <label>
                  <input
                    className="visually-hidden"
                    type="checkbox"
                    name="specialisation"
                    value={typeRu}
                    checked={isChecked}
                    onChange={onChange}
                  />
                  <span className="btn-checkbox__btn">{typeRu}</span>
                </label>
              </div>

            );
          })
        }
      </div>
    </div>
  );
}

export default QuestionnaireSpecializationBlock;
