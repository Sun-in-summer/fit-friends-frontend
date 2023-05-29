import { ChangeEvent, Fragment } from 'react';
import { TrainingTypeEn } from '../../types/training-type.enum';
import { translateEnToRu } from '../../utils/utils';

type UserCatalogueFilterSpecializationBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  trainingTypes: string[] | undefined;
  currentSpecilizationsQty: number;

}


function UserCatalogueFilterSpecializationBlock({ onChange, trainingTypes, currentSpecilizationsQty }: UserCatalogueFilterSpecializationBlockProps): JSX.Element {


  const typesEn = Object.keys(TrainingTypeEn);

  return (
    <Fragment>

      {

        typesEn.slice(0, currentSpecilizationsQty).map((type) => {
          const typeRu = translateEnToRu(type);
          const isChecked = trainingTypes?.includes(typeRu);
          return (


            <li className="user-catalog-form__check-list-item" key={type}>
              <div className="custom-toggle custom-toggle--checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="specialisation"
                    value={typeRu}
                    checked={isChecked}
                    onChange={onChange}
                  />
                  <span className="custom-toggle__icon">
                    <svg width="9" height="6" aria-hidden="true">
                      <use xlinkHref="#arrow-check"></use>
                    </svg>
                  </span><span className="custom-toggle__label">{typeRu}</span>
                </label>
              </div>
            </li>

          );
        })
      }

    </Fragment>

  );
}

export default UserCatalogueFilterSpecializationBlock;
