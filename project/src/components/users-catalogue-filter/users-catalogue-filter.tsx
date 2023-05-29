

import { useAppDispatch } from '../../hooks';
import { DEFAULT_LOCATIONS_QTY_PER_PAGE, DEFAULT_MAX_LOCATIONS_QTY, FILTER_QUERY_DELAY, UserRole, UserRoles } from '../../const';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import UserCatalogueFilterSpecializationBlock from '../user-catalogue-filter-specialization-block/user-ctalogue-filter-specialization-block';
import LevelBlock from '../level-block/level-block';
import { TrainingLevel } from '../../types/training-level.enum';

import { fetchFilteredUsersAction } from '../../store/api-actions';
import UserCatalogueFilterLocationBlock from '../user-catalogue-filter-location-block/user-ctalogue-filter-location-block';
import UserRoleBlock from '../user-role-block/user-role-block';
import { debounce } from '../../utils/utils';
import { setActiveSortOption } from '../../store/select-sort-option-process/select-sort-option-process';


function UsersCatalogueFilter(): JSX.Element {

  const dispatch = useAppDispatch();

  const [currentLocationsQty, setCurentLocationsQty] = useState(DEFAULT_LOCATIONS_QTY_PER_PAGE);
  const [currentSpecilizationsQty, setCurentSpecilizationsQty] = useState(DEFAULT_LOCATIONS_QTY_PER_PAGE);


  const [formData, setFormData] = useState({
    level: TrainingLevel.Amateur as string,
    place: [] as string[],
    role: UserRole.Coach as string,
    trainingTypes: [] as string[]
  });

  const {
    level,
    place,
    trainingTypes,
    role
  } = formData;

  useEffect(() => {
    dispatch(fetchFilteredUsersAction({
      level,
      place,
      trainingType: trainingTypes
    }));
  }, [dispatch, level, place, role, trainingTypes]);


  type Filter = {
    level: string;
    place: string[];
    role: string;
    trainingTypes: string[];
  }


  const setFormDataDebounced = debounce<(prevState: Filter) => Filter>((arg) => setFormData(arg), FILTER_QUERY_DELAY);


  const manyCheckboxesChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    if (trainingTypes.includes(value)) {
      const indexOfTypeToRemove = trainingTypes.indexOf(value);
      if (indexOfTypeToRemove !== 0) {
        const indexToRemove = indexOfTypeToRemove - 1;
        const newTrainingTypes = trainingTypes.splice(indexToRemove, 1);
        setFormData({ ...formData, trainingTypes: [...newTrainingTypes] });
        setFormDataDebounced((prevState) => prevState);
      }
      else {
        trainingTypes.splice(indexOfTypeToRemove, 1);
        setFormData({ ...formData, trainingTypes: [...trainingTypes] });
        setFormDataDebounced((prevState) => prevState);
      }
    }
    else {
      trainingTypes.push(value);
      setFormData({ ...formData, trainingTypes: [...trainingTypes] });
      setFormDataDebounced((prevState) => prevState);
    }
  };

  const fieldChangeHandle = useCallback((event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = event;
    const { value, name } = target;

    setFormData({ ...formData, [name]: value });
  }, [formData]);


  const handleSortOptionChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>): void => {
      const { target } = evt;
      const { value } = target;
      let roleAsOption;
      if (value === UserRoles.Coach) {
        roleAsOption = UserRole.Coach;
      }
      else {
        roleAsOption = UserRole.User;
      }
      dispatch(setActiveSortOption(roleAsOption));
      setFormData({ ...formData, role: value });
      setFormDataDebounced((prevState) => prevState);
    }, [dispatch, formData, setFormDataDebounced]);


  const isLocationsButtonMoreOrLess = () => {
    if (currentLocationsQty === DEFAULT_LOCATIONS_QTY_PER_PAGE) {
      return (
        <button
          className="btn-show-more user-catalog-form__btn-show"
          type="button"
          onClick={() => setCurentLocationsQty(DEFAULT_MAX_LOCATIONS_QTY)}
        ><span>Посмотреть все</span>
          <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
            <use xlinkHref="/sprites.svg#arrow-down"></use>
          </svg>
        </button>
      );
    }
    else {
      return (
        <button
          className="btn-show-more user-catalog-form__btn-show"
          type="button"
          onClick={() => setCurentLocationsQty(DEFAULT_LOCATIONS_QTY_PER_PAGE)}
        ><span>Показать короткий список</span>
          <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
            <use xlinkHref="/sprites.svg#arrow-up"></use>
          </svg>
        </button>);
    }
  };

  const isSpecializationsButtonMoreOrLess = () => {
    if (currentSpecilizationsQty === DEFAULT_LOCATIONS_QTY_PER_PAGE) {
      return (
        <button
          className="btn-show-more user-catalog-form__btn-show"
          type="button"
          onClick={() => setCurentSpecilizationsQty(DEFAULT_MAX_LOCATIONS_QTY)}
        ><span>Посмотреть все</span>
          <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
            <use xlinkHref="/sprites.svg#arrow-down"></use>
          </svg>
        </button>
      );
    }
    else {
      return (
        <button
          className="btn-show-more user-catalog-form__btn-show"
          type="button"
          onClick={() => setCurentSpecilizationsQty(DEFAULT_LOCATIONS_QTY_PER_PAGE)}
        ><span>Показать короткий список</span>
          <svg className="btn-show-more__icon" width="10" height="4" aria-hidden="true">
            <use xlinkHref="/sprites.svg#arrow-up"></use>
          </svg>
        </button>);
    }
  };


  return (
    <form className="user-catalog-form__form">
      <div className="user-catalog-form__block user-catalog-form__block--location">
        <h4 className="user-catalog-form__block-title">Локация, станция метро</h4>
        <ul className="user-catalog-form__check-list">
          <UserCatalogueFilterLocationBlock onChange={manyCheckboxesChangeHandle} place={place} currentLocationsQty={currentLocationsQty} />
        </ul>
        {isLocationsButtonMoreOrLess()}
      </div>
      <div className="user-catalog-form__block user-catalog-form__block--spezialization">
        <h4 className="user-catalog-form__block-title">Специализация</h4>
        <ul className="user-catalog-form__check-list">
          <UserCatalogueFilterSpecializationBlock onChange={manyCheckboxesChangeHandle} trainingTypes={trainingTypes} currentSpecilizationsQty={currentSpecilizationsQty} />
        </ul>
        {isSpecializationsButtonMoreOrLess()}
      </div>
      <div className="user-catalog-form__block user-catalog-form__block--level">
        <h4 className="user-catalog-form__block-title">Ваш уровень</h4>
        <div className="custom-toggle-radio">
          <LevelBlock
            onChange={fieldChangeHandle}
            trainingLevelValue={level}
          />
        </div>
      </div>
      <div className="user-catalog-form__block">
        <h3 className="user-catalog-form__title user-catalog-form__title--sort">Сортировка</h3>
        < UserRoleBlock onSortOptionChange={handleSortOptionChange} roleValue={role} />
      </div>
    </form>

  );
}

export default UsersCatalogueFilter;
