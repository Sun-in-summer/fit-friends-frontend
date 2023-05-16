import { useState } from 'react';
import LocationOption from '../location-option/location-option';
import { LocationTitles } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveLocationOption } from '../../store/action';
import { getActiveLocationOption } from '../../store/select-location-option-process/selector';


function LocationOptionsList(): JSX.Element {

  const dispatch = useAppDispatch();

  const activeLocationOption = useAppSelector(getActiveLocationOption);
  const [isLocationOptionsListOpened, setIsLocationOptionsListOpened] = useState<boolean>(false);

  // const activeLocationOption = LocationTitles.Petrogradskaya;
  const handleLocationOptionClick = (option:string) => {
    dispatch(setActiveLocationOption(option));
    setIsLocationOptionsListOpened(!isLocationOptionsListOpened);
  };


  return (
    <div className={`custom-select ${isLocationOptionsListOpened ? 'is-open' : ''} ${activeLocationOption === '' ? 'custom-select--not-selected' : '' }  `}>
      <span className="custom-select__label">Ваша локация</span>
      <button
        className="custom-select__button"
        type="button"
        aria-label="Выберите одну из опций"
        onClick ={()=> setIsLocationOptionsListOpened(!isLocationOptionsListOpened)}
        aria-haspopup="listbox"
        aria-expanded= {isLocationOptionsListOpened}
      >
        <span className="custom-select__text">{activeLocationOption}</span>
        <span className="custom-select__icon">
          <svg width="15" height="6" aria-hidden="true">
            <use xlinkHref="sprites.svg#arrow-down"></use>
          </svg>
        </span>
      </button>
      <ul
        className="custom-select__list"
        role="listbox"
        id="locations"
        aria-activedescendant= {activeLocationOption}
        tabIndex={-1}
      >
        { Object.values(LocationTitles).map(
          (locationOption)=>
            (
              <LocationOption
                locationOption ={locationOption}
                key={locationOption}
                activeLocationOption = {activeLocationOption}
                onLocationOptionClick ={ handleLocationOptionClick}

              />
            )
        )}
      </ul>
    </div>
  );
}

export default LocationOptionsList;
