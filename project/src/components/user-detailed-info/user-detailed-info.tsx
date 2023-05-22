
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { GenderNames, LocationTitles, UserRole } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import SpecializationBlock from '../specialization-block/specialization-block';
import LocationOption from '../location-option/location-option';
import GenderOption from '../gender-option/gender-option';
import { TrainingLevel } from '../../types/training-level.enum';
import LevelOption from '../level-option/level-option';
import { updateUserAction } from '../../store/api-actions';
import { ExtendedUser } from '../../types/user.interface';


function UserDetailedInfo(): JSX.Element {

  const user = useAppSelector(getUser) as ExtendedUser;
  const role = user?.role;
  const dispatch = useAppDispatch();


  const [formData, setFormData] = useState({
    level: user?.trainingLevel,
    time: user?.trainingTime,
    credits: user?.credits,
    isReadyToTrainPersonally: user?.isReadyToTrainPersonally,
    trainingTypes: user?.trainingType,
    certificate: user?.certificate,
    gender: user?.gender,
    place: user?.place,
    firstname: user?.firstname,
  });

  const {
    level,
    place,
    // time,
    credits,
    isReadyToTrainPersonally,
    trainingTypes,
    // certificate,
    gender,
    firstname } = formData;


  const fieldChangeHandle = useCallback((event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = event;
    const { value, name } = target;
    setFormData({ ...formData, [name]: value });
  }, [formData]);

  const fieldCheckboxChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, isReadyToTrainPersonally: !isReadyToTrainPersonally });
  };


  const manyCheckboxesChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    if (trainingTypes?.includes(value)) {
      const indexOfTypeToRemove = trainingTypes.indexOf(value);
      if (indexOfTypeToRemove !== 0) {
        const indexToRemove = indexOfTypeToRemove - 1;
        const trainingTypesCopy = [...trainingTypes];
        const newTrainingTypes = trainingTypesCopy.splice(indexToRemove, 1);
        setFormData({ ...formData, trainingTypes: newTrainingTypes });
      }
      else {
        const trainingTypesCopy = [...trainingTypes];
        trainingTypesCopy.splice(indexOfTypeToRemove, 1);
        setFormData({ ...formData, trainingTypes: trainingTypesCopy });
      }
    }
    else {
      const trainingTypesCopy = trainingTypes?.slice();
      trainingTypesCopy?.push(value);
      setFormData({ ...formData, trainingTypes: trainingTypesCopy });
    }
  };


  const editOrSaveButton = (userRole: string) => {
    if (userRole === UserRole.User) {
      return (
        <button className="btn-flat btn-flat--underlined user-info__edit-button" type="button" aria-label="Редактировать">
          <svg width="12" height="12" aria-hidden="true">
            <use xlinkHref="#icon-edit"></use>
          </svg><span>Редактировать</span>
        </button>
      );
    }
    return (
      <button className="btn-flat btn-flat--underlined user-info-edit__save-button" type="submit" aria-label="Сохранить">
        <svg width="12" height="12" aria-hidden="true">
          <use xlinkHref="#icon-edit"></use>
        </svg><span>Сохранить</span>
      </button>
    );

  };

  const isEditButton = editOrSaveButton(role);

  const [isLocationOptionsListOpened, setIsLocationOptionsListOpened] = useState<boolean>(false);
  const [isGenderOptionsListOpened, setIsGenderOptionsListOpened] = useState<boolean>(false);
  const [isLevelOptionsListOpened, setIsLevelOptionsListOpened] = useState<boolean>(false);

  const handleLocationOptionClick = (option: string) => {
    setFormData({ ...formData, place: option });
    setIsLocationOptionsListOpened(!isLocationOptionsListOpened);
  };


  const handleGenderOptionClick = (option: string) => {
    setFormData({ ...formData, gender: option });
    setIsGenderOptionsListOpened(!isGenderOptionsListOpened);
  };

  const handleLevelOptionClick = (option: string) => {
    setFormData({ ...formData, level: option });
    setIsLevelOptionsListOpened(!isLevelOptionsListOpened);
  };


  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(updateUserAction({
      ...formData,
      id: user.id,
      trainingLevel: level,
      trainingType: trainingTypes,
      email: user?.email,
      avatar: user?.avatar,
      sentRequestForFriends: user?.sentRequestForFriends,
      role: user?.role

    }));
  };

  return (
    <form
      className={`user-info${role === UserRole.Coach ? '-edit' : ''}__form`}
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      {isEditButton}
      <div className={`user-info${role === UserRole.Coach ? '-edit' : ''}__section`}>
        <h2 className={`user-info${role === UserRole.Coach ? '-edit' : ''}__title`}>Обо мне</h2>
        <div className={`custom-input custom-input--readonly user-info${role === UserRole.Coach ? '-edit' : ''}__input`}>
          <label><span className="custom-input__label">Имя</span>
            <span className="custom-input__wrapper">
              <input
                type="text"
                name="firstname"
                value={firstname}
                disabled={role !== UserRole.Coach}
                onChange={fieldChangeHandle}
              />
            </span>
          </label>
        </div>
        <div className={`custom-textarea ${role === UserRole.Coach ? '' : 'custom-textarea--readonly'} user-info${role === UserRole.Coach ? '-edit' : ''}__textarea`}>
          <label><span className="custom-textarea__label">Описание</span>
            <textarea
              name="credits"
              placeholder=" "
              disabled={role !== UserRole.Coach}
              onChange={fieldChangeHandle}
              defaultValue={credits}
            >
            </textarea>
          </label>
        </div>
      </div>
      <div className={`user-info${role === UserRole.Coach ? '-edit' : ''}__section user-info${role === UserRole.Coach ? '-edit' : ''}__section--status`}>
        <h2 className={`user-info${role === UserRole.Coach ? '-edit' : ''}__title user-info${role === UserRole.Coach ? '-edit' : ''}__title--status`}>Статус</h2>
        <div className={`custom-toggle custom-toggle--switch user-info${role === UserRole.Coach ? '-edit' : ''}__toggle`}>
          <label>
            <input
              type="checkbox"
              name="ready-for-training"
              checked={isReadyToTrainPersonally}
              onChange={fieldCheckboxChangeHandle}
            />
            <span className="custom-toggle__icon">
              <svg width="9" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-check"></use>
              </svg>
            </span>
            <span className="custom-toggle__label">Готов тренировать</span>
          </label>
        </div>
      </div>
      <div className={`user-info${role === UserRole.Coach ? '-edit' : ''}__section`}>
        <h2 className={`user-info${role === UserRole.Coach ? '-edit' : ''}__title user-info__title--specialization`}>Специализация</h2>
        <div className={`specialization-checkbox user-info${role === UserRole.Coach ? '-edit' : ''}__specialization`}>
          <SpecializationBlock onChange={manyCheckboxesChangeHandle} trainingTypes={trainingTypes} />


        </div>
      </div>

      <div className={`custom-select${role === UserRole.Coach ? '' : '--readonly'} custom-select user-info${role === UserRole.Coach ? '-edit' : ''}__select  ${isLocationOptionsListOpened ? 'is-open' : ''}`}><span className="custom-select__label">Локация</span>
        <div className="custom-select__placeholder">{place}</div>
        <button
          className="custom-select__button"
          type="button"
          aria-label="Выберите одну из опций"
          disabled={role !== UserRole.Coach}
          onClick={() => setIsLocationOptionsListOpened(!isLocationOptionsListOpened)}
          aria-haspopup="listbox"
          aria-expanded={isLocationOptionsListOpened}
        >
          <span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">
          {Object.values(LocationTitles).map(
            (locationOption) => (
              <LocationOption
                locationOption={locationOption}
                key={locationOption}
                activeLocationOption={place}
                onLocationOptionClick={handleLocationOptionClick}

              />
            )
          )}
        </ul>
      </div>
      <div className={`custom-select${role === UserRole.Coach ? '' : '--readonly'} custom-select user-info${role === UserRole.Coach ? '-edit' : ''}__select ${isGenderOptionsListOpened ? 'is-open' : ''}`}><span className="custom-select__label">Пол</span>
        <div className="custom-select__placeholder">{gender}</div>
        <button
          className="custom-select__button"
          type="button"
          aria-label="Выберите одну из опций"
          disabled={role !== UserRole.Coach}
          onClick={() => setIsGenderOptionsListOpened(!isGenderOptionsListOpened)}
          aria-haspopup="listbox"
          aria-expanded={isGenderOptionsListOpened}
        >
          <span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">
          {Object.values(GenderNames).map(
            (genderOption) => (
              <GenderOption
                genderOption={genderOption}
                key={genderOption}
                activeGenderOption={gender}
                onGenderOptionClick={handleGenderOptionClick}
              />
            )
          )}

        </ul>
      </div>
      <div className={`custom-select${role === UserRole.Coach ? '' : '--readonly'}  custom-select user-info${role === UserRole.Coach ? '-edit' : ''}__select ${isLevelOptionsListOpened ? 'is-open' : ''}`}><span className="custom-select__label">{level}</span>
        <div className="custom-select__placeholder">{level}</div>
        <button
          className="custom-select__button"
          type="button"
          aria-label="Выберите одну из опций"
          disabled={role !== UserRole.Coach}
          onClick={() => setIsLevelOptionsListOpened(!isLevelOptionsListOpened)}
          aria-haspopup="listbox"
          aria-expanded={isLocationOptionsListOpened}
        >
          <span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">

          {Object.values(TrainingLevel).map(
            (levelOption) => (
              <LevelOption
                levelOption={levelOption}
                key={levelOption}
                activeLevelOption={level}
                onLevelOptionClick={handleLevelOptionClick}

              />
            )
          )}

        </ul>
      </div>
    </form>
  );

}

export default UserDetailedInfo;
