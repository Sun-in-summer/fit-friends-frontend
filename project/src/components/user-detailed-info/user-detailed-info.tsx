type UserDetailedInfoProps ={
  role: string;
}


function UserDetailedInfo({role}: UserDetailedInfoProps):JSX.Element {


  const editOrSaveButton = (userRole: string) => {
    if (userRole === 'coach') {
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

  return (
    <form className={`user-info${role === 'coach' ? '-edit' : ''}__form`} action="#" method="post">
      {isEditButton}
      <div className={`user-info${role === 'coach' ? '-edit' : ''}__section`}>
        <h2 className={`user-info${role === 'coach' ? '-edit' : ''}__title`}>Обо мне</h2>
        <div className={`custom-input custom-input--readonly user-info${role === 'coach' ? '-edit' : ''}__input`}>
          <label><span className="custom-input__label">Имя</span>
            <span className="custom-input__wrapper">
              <input type="text" name="name" value="Валерия" disabled/>
            </span>
          </label>
        </div>
        <div className={`custom-textarea ${role === 'coach' ? '' : 'custom-textarea--readonly'} user-info${role === 'coach' ? '-edit' : ''}__textarea`}>
          <label><span className="custom-textarea__label">Описание</span>
            <textarea name="description" placeholder=" " disabled ={ role !== 'coach'} >Персональный тренер и инструктор групповых программ с опытом  более 4х лет. Специализация: коррекция фигуры и осанки, снижение веса, восстановление после травм, пилатес.</textarea>
          </label>
        </div>
      </div>
      <div className={`user-info${role === 'coach' ? '-edit' : ''}__section user-info${role === 'coach' ? '-edit' : ''}__section--status`}>
        <h2 className={`user-info${role === 'coach' ? '-edit' : ''}__title user-info${role === 'coach' ? '-edit' : ''}__title--status`}>Статус</h2>
        <div className={`custom-toggle custom-toggle--switch user-info${role === 'coach' ? '-edit' : ''}__toggle`}>
          <label>
            <input type="checkbox" name="ready-for-training" checked/>
            <span className="custom-toggle__icon">
              <svg width="9" height="6" aria-hidden="true">
                <use xlinkHref="#arrow-check"></use>
              </svg>
            </span><span className="custom-toggle__label">Готов тренировать</span>
          </label>
        </div>
      </div>
      <div className={`user-info${role === 'coach' ? '-edit' : ''}__section`}>
        <h2 className={`user-info${role === 'coach' ? '-edit' : ''}__title user-info__title--specialization`}>Специализация</h2>
        <div className={`specialization-checkbox user-info${role === 'coach' ? '-edit' : ''}__specialization`}>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="yoga" checked/>
              <span className="btn-checkbox__btn">Йога</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="running"/>
              <span className="btn-checkbox__btn">Бег</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="aerobics" checked/>
              <span className="btn-checkbox__btn">Аэробика</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="boxing"/>
              <span className="btn-checkbox__btn">Бокс</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="power"/>
              <span className="btn-checkbox__btn">Силовые</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="pilates" checked/>
              <span className="btn-checkbox__btn">Пилатес</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="stretching" checked/>
              <span className="btn-checkbox__btn">Стрейчинг</span>
            </label>
          </div>
          <div className="btn-checkbox">
            <label>
              <input className="visually-hidden" type="checkbox" name="specialization" value="crossfit"/>
              <span className="btn-checkbox__btn">Кроссфит</span>
            </label>
          </div>
        </div>
      </div>
      <div className={`custom-select${ role === 'coach' ? '' : '--readonly'} custom-select user-info${role === 'coach' ? '-edit' : ''}__select`}><span className="custom-select__label">Локация</span>
        <div className="custom-select__placeholder">ст. м. Адмиралтейская</div>
        <button className="custom-select__button" type="button" aria-label="Выберите одну из опций" disabled><span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">
        </ul>
      </div>
      <div className={`custom-select${role === 'coach' ? '' : '--readonly'} custom-select user-info${role === 'coach' ? '-edit' : ''}__select`}><span className="custom-select__label">Пол</span>
        <div className="custom-select__placeholder">Женский</div>
        <button className="custom-select__button" type="button" aria-label="Выберите одну из опций" disabled={role !== 'coach'}><span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">
        </ul>
      </div>
      <div className={`custom-select${role === 'coach' ? '' : '--readonly'}  custom-select user-info${role === 'coach' ? '-edit' : ''}__select`}><span className="custom-select__label">Уровень</span>
        <div className="custom-select__placeholder">Профессионал</div>
        <button className="custom-select__button" type="button" aria-label="Выберите одну из опций" disabled><span className="custom-select__text"></span>
          <span className="custom-select__icon">
            <svg width="15" height="6" aria-hidden="true">
              <use xlinkHref="#arrow-down"></use>
            </svg>
          </span>
        </button>
        <ul className="custom-select__list" role="listbox">
        </ul>
      </div>
    </form>
  );

}

export default UserDetailedInfo;
