import { ChangeEvent, Fragment } from 'react';
import { LocationTitlesFullList, LocationTitlesFullListEn } from '../../types/location.enum';


type UserCatalogueFilterLocationBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  place: string[] | undefined;
  currentLocationsQty: number;
}


function UserCatalogueFilterLocationBlock({ onChange, place, currentLocationsQty }: UserCatalogueFilterLocationBlockProps): JSX.Element {


  const locationsEn = Object.keys(LocationTitlesFullListEn);

  return (
    <Fragment>

      {

        locationsEn.slice(0, currentLocationsQty).map((location) => {
          const isChecked = place?.includes(location);
          return (


            <li className="user-catalog-form__check-list-item" key={location}>
              <div className="custom-toggle custom-toggle--checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={location}
                    checked={isChecked}
                    onChange={onChange}
                  />
                  <span className="custom-toggle__icon">
                    <svg width="9" height="6" aria-hidden="true">
                      <use xlinkHref="/sprites.svg#arrow-check"></use>
                    </svg>
                  </span><span className="custom-toggle__label">{LocationTitlesFullList[location]}</span>
                </label>
              </div>
            </li>

          );
        })
      }

    </Fragment>

  );
}

export default UserCatalogueFilterLocationBlock;
