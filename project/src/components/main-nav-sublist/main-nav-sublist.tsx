function MainNavSublist(): JSX.Element {
  return (
    <ul className="main-nav__sublist">
      <li className="main-nav__subitem">
        <a className="notification is-active" href="#">
          <p className="notification__text">Катерина пригласила вас на&nbsp;тренировку</p>
          <time className="notification__time" dateTime="2023-12-23 12:35">23 декабря, 12:35</time>
        </a>
      </li>
      <li className="main-nav__subitem">
        <a className="notification is-active" href="#">
          <p className="notification__text">Никита отклонил приглашение на&nbsp;совместную тренировку</p>
          <time className="notification__time" dateTime="2023-12-22 09:22">22 декабря, 09:22</time>
        </a>
      </li>
      <li className="main-nav__subitem">
        <a className="notification is-active" href="#">
          <p className="notification__text">Татьяна добавила вас в&nbsp;друзья</p>
          <time className="notification__time" dateTime="2023-12-18 18:50">18 декабря, 18:50</time>
        </a>
      </li>
      {/* <li className="main-nav__subitem"><a className="notification" href="#">
                        <p className="notification__text">Наталья приняла приглашение на&nbsp;совместную тренировку</p>
                        <time className="notification__time" dateTime="2023-12-14 08:15">14 декабря, 08:15</time></a>
                    </li> */}
    </ul>
  );
}

export default MainNavSublist;
