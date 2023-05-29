import { ChangeEvent, Fragment } from 'react';
import { TrainingLevel } from '../../types/training-level.enum';
import { translateTrainignLevel } from '../../utils/utils';

type LevelBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingLevelValue: string;
}


function LevelBlock({ onChange, trainingLevelValue }: LevelBlockProps): JSX.Element {


  const levelsEn = Object.keys(TrainingLevel);


  return (


    <Fragment>
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
    </Fragment>

  );
}

export default LevelBlock;
