import { ChangeEvent } from 'react';
import { TrainingTypeEn } from '../../types/training-type.enum';
import { translateEnToRu } from '../../utils/utils';

type FilterSpecializationBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingTypes: string[];
}


function FilterSpecializationBlock({ onChange, trainingTypes }: FilterSpecializationBlockProps): JSX.Element {


  const typesEn = Object.keys(TrainingTypeEn);

  return (
    <div className="gym-catalog-form__block gym-catalog-form__block--type">
      <h4 className="gym-catalog-form__block-title">Тип</h4>
      <ul className="gym-catalog-form__check-list">
        {

          typesEn.map((type) => {
            const typeRu = translateEnToRu(type);
            const isChecked = trainingTypes.includes(typeRu);
            return (
              <li className="gym-catalog-form__check-list-item" key={type}>
                <div className="custom-toggle custom-toggle--checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="type"
                      value={typeRu}
                      checked={isChecked}
                      onChange={onChange}
                    />
                    <span className="custom-toggle__icon">
                      <svg width="9" height="6" aria-hidden="true">
                        <use xlinkHref="/sprites.svg#arrow-check"></use>
                      </svg>
                    </span>
                    <span className="custom-toggle__label">{typeRu}</span>
                  </label>
                </div>
              </li>

            );
          })
        }
      </ul>
    </div>

  );
}

export default FilterSpecializationBlock;
