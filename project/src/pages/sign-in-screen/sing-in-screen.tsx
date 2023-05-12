import { FormEvent, useRef } from 'react';
import {Helmet} from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';

function SignInScreen(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispacth = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispacth(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


  return (
    <div className="wrapper">
      <main>
        <Helmet>
          <title>FitFriends. Авторизуйтесь</title>
        </Helmet>
        <div className="background-logo">
          <svg className="background-logo__logo" width="750" height="284" aria-hidden="true">
            <use xlinkHref="/sprites.svg#logo-big"></use>
          </svg>
          <svg className="background-logo__icon" width="343" height="343" aria-hidden="true">
            <use xlinkHref="/sprites.svg#icon-logotype"></use>
          </svg>
        </div>
        <div className="popup-form popup-form--sign-in">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__title-wrapper">
                <h1 className="popup-form__title">Вход</h1>
              </div>
              <div className="popup-form__form">
                <form
                  method="get"
                  action = ''
                  onSubmit = {handleSubmit}
                >
                  <div className="sign-in">
                    <div className="custom-input sign-in__input">
                      <label><span className="custom-input__label">E-mail</span>
                        <span className="custom-input__wrapper">
                          <input
                            type="email"
                            name="email"
                            ref= {loginRef}
                            id="email"
                          />
                        </span>
                      </label>
                    </div>
                    <div className="custom-input sign-in__input">
                      <label><span className="custom-input__label">Пароль</span>
                        <span className="custom-input__wrapper">
                          <input
                            type="password"
                            name="password"
                            id= 'password'
                            ref= {passwordRef}
                          />
                        </span>
                      </label>
                    </div>
                    <button
                      className="btn sign-in__button"
                      type="submit"
                    >Продолжить
                    </button>
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

export default SignInScreen;
