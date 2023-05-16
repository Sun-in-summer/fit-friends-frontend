import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AppRoute, GenderNames, UserRole } from '../../const';
import SignUpGenderBlock from '../../components/sign-up-gender-block/sign-up-gender-block';
import LocationOptionsList from '../../components/location-options-list/location-options-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Avatar from '../../components/avatar/avatar';
import {registerUserAction} from '../../store/api-actions';
import { getActiveLocationOption } from '../../store/select-location-option-process/selector';
import { getUser } from '../../store/user-process/selector';


// type DetailsProps = {
//     name: string;
//     email: string;
//     sex: string;
//     birthday: string;
//     password: string;
//     location: string;
//     role: string;

// }

// function Details({name, email, sex, birthday, password, location, role}: DetailsProps) { //удалить


//   const convertDate = () => {
//     if (birthday !== '') {
//       return dayjs(birthday).toISOString();
//     }
//     return birthday;
//   };

//   const date = convertDate();
//   return (
//     <>
//       <h2>Проверка введённых данных:</h2>
//       <p>
//         <b>Имя: </b>{name}<br />
//         <b>Email: </b>{email}<br />
//         <b>Пол: </b>{sex}<br />
//         <b>ДР: </b>{date}<br />
//         <b>pass: </b>{password}<br />
//         <b>place: </b>{location}<br />
//         <b>role: </b>{role}<br />


//       </p>
//     </>
//   );
// }


function SignUpScreen(): JSX.Element {


  const [downloadedFile, setDownloadedFile ] = useState< string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    password: '',
    sex: GenderNames.Female,
    role: UserRole.Coach,
    avatar: undefined as unknown
  });

  const [isUserAgreementAccepted, setIsUserAgreementAccepted ] = useState<boolean>(true);

  const user = useAppSelector(getUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if (user !== null ){
      if (user && user.role === UserRole.Coach ) {
        navigate(AppRoute.CoachQuestionnaire);
      }
      if (user && user.role === UserRole.User) {
        navigate(AppRoute.UserQuestionnaire);
      }
    }
  },[navigate, user]);


  const activeLocationOption = useAppSelector(getActiveLocationOption);

  const onSubmit = (evt : FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    dispatch(registerUserAction({
      ...formData,
      place: activeLocationOption,
      gender: formData.sex,
      firstname: formData.name,
      dateBirth: formData.birthday,
      trainingLevel: 'новичок',
      trainingType: ['кроссфит'],
      sentRequestForFriends: [],
      avatar: downloadedFile
    }));
  };

  const fieldChangeHandle = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) : void => {
    const {target} = event;
    const {value, name} = target;
    setFormData({...formData, [name]: value});
  };

  const acceptUserAgreementHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setIsUserAgreementAccepted((currentState) => !currentState);
  };

  const handleAddAvatar = (file: File) => {
    setFormData({ ...formData, avatar: file });
  };


  const onFileChange = (e: ChangeEvent<HTMLInputElement> ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      handleAddAvatar(file);
      const downloadedFileUrl = URL.createObjectURL(file);
      setDownloadedFile(downloadedFileUrl);
    }
  };


  return (
    <div className="wrapper">
      <main>
        <Helmet>
          <title>FitFriends. Добро пожаловать!</title>
        </Helmet>
        <div className="background-logo">
          <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
            <use xlinkHref="/sprites.svg#logo-big"></use>
          </svg>
          <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-logotype"></use>
          </svg>
        </div>
        <div className="popup-form popup-form--sign-up">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Регистрация</h1>
              </div>
              <div className="popup-form__form">
                <form
                  method="get"
                  onSubmit = {onSubmit}
                >
                  <div className="sign-up">
                    <div className="sign-up__load-photo">
                      <div className="input-load-avatar">
                        <label>
                          <input
                            className="visually-hidden"
                            name = 'avatar'
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange = {onFileChange}

                          />
                          <span className="input-load-avatar__btn">
                            { downloadedFile ?
                              <Avatar avatar = {downloadedFile}></Avatar> :
                              <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="/sprites.svg#icon-import"></use>
                              </svg>}
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__description">
                        <h2 className="sign-up__legend">Загрузите фото профиля</h2><span className="sign-up__text">JPG, PNG, оптимальный размер 100&times;100&nbsp;px</span>
                      </div>
                    </div>
                    <div className="sign-up__data">
                      <div className="custom-input">
                        <label><span className="custom-input__label">Имя</span>
                          <span className="custom-input__wrapper">
                            <input
                              type="text"
                              name="name"
                              onChange ={fieldChangeHandle}
                              value = {formData.name}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label><span className="custom-input__label">E-mail</span>
                          <span className="custom-input__wrapper">
                            <input
                              type="email"
                              name="email"
                              onChange ={fieldChangeHandle}
                              value={formData.email}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="custom-input">
                        <label><span className="custom-input__label">Дата рождения</span>
                          <span className="custom-input__wrapper">
                            <input
                              type="date"
                              name="birthday"
                              max="2099-12-31"
                              onChange ={fieldChangeHandle}
                              value = {formData.birthday}
                            />
                          </span>
                        </label>
                      </div>
                      <LocationOptionsList />
                      <div className="custom-input">
                        <label><span className="custom-input__label">Пароль</span>
                          <span className="custom-input__wrapper">
                            <input
                              type="password"
                              name="password"
                              autoComplete="off"
                              onChange ={fieldChangeHandle}
                              value={formData.password}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="sign-up__radio"><span className="sign-up__label">Пол</span>
                        <div className="custom-toggle-radio custom-toggle-radio--big">
                          <SignUpGenderBlock
                            onChange ={fieldChangeHandle}
                            genderValue = {formData.sex}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sign-up__role">
                      <h2 className="sign-up__legend">Выберите роль</h2>
                      <div className="role-selector sign-up__role-selector">
                        {
                          [ UserRole.Coach, UserRole.User ].map((item) => (
                            <div className="role-btn" key={ item }>
                              <label>
                                <input
                                  className="visually-hidden"
                                  type="radio"
                                  name="role"
                                  value={ item }
                                  defaultChecked={ item === formData.role }
                                  onChange={ fieldChangeHandle }
                                />
                                <span className="role-btn__icon">
                                  <svg width="12" height="13" aria-hidden="true">
                                    { item === UserRole.Coach ?
                                      <use xlinkHref="/sprites.svg#icon-cup"></use> :
                                      <use xlinkHref="/sprites.svg#icon-weight"></use>}

                                  </svg>
                                </span>
                                <span className="role-btn__btn">
                                  { item === UserRole.Coach ?
                                    'Я хочу тренировать' :
                                    'Я хочу тренироваться'}
                                </span>
                              </label>
                            </div>
                          ))
                        }
                      </div>
                    </div>


                    <div className="sign-up__checkbox">
                      <label>
                        <input
                          type="checkbox"
                          value="user-agreement"
                          name="user-agreement"
                          checked={isUserAgreementAccepted}
                          onChange ={acceptUserAgreementHandle}
                        />
                        <span className="sign-up__checkbox-icon">
                          <svg width="9" height="6" aria-hidden="true">
                            <use xlinkHref="/sprites.svg#arrow-check"></use>
                          </svg>
                        </span>
                        <span className="sign-up__checkbox-label">Я соглашаюсь с <span>политикой конфиденциальности</span> компании</span>
                      </label>
                    </div>
                    <button className="btn sign-up__button" type="submit">Продолжить</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </main>

    </div>
  );
}

export default SignUpScreen;
