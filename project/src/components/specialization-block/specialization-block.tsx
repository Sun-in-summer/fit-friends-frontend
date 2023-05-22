import { ChangeEvent, Fragment } from 'react';
import { TrainingTypeEn } from '../../types/training-type.enum';
import { translateEnToRu } from '../../utils/utils';

type SpecializationBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingTypes: string[] | undefined;

}


function SpecializationBlock({ onChange, trainingTypes }: SpecializationBlockProps): JSX.Element {


  const typesEn = Object.keys(TrainingTypeEn);

  return (
    <Fragment>

      {

        typesEn.map((type) => {
          const typeRu = translateEnToRu(type);
          const isChecked = trainingTypes?.includes(typeRu);
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

    </Fragment>

  );
}

export default SpecializationBlock;
