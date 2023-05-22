import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import { NavItemIcons, NavItems } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selector';
import { getNavRoute } from '../../utils/utils';


function Header(): JSX.Element {

  const user = useAppSelector(getUser);
  const role = user?.role;
  const navItems = Object.keys(NavItems);
  const getIcon = (item: string): string => NavItemIcons[item];


  return (


    <header className="header">
      <div className="container">
        <Logo />
        <nav className="main-nav">
          <ul className="main-nav__list">

            {
              navItems.map((item) => {
                const route = getNavRoute(item, role);
                const icon = getIcon(item);
                return (
                  <li className="main-nav__item" key={item}>
                    <NavLink className={({ isActive }) => (isActive ? 'main-nav__link is-active' : 'main-nav__link')} to={route} end aria-label={NavItems[item]}>
                      <svg width="18" height="18" aria-hidden="true">
                        <use xlinkHref={`/sprites.svg#icon-${icon}`}></use>
                      </svg>
                    </NavLink >
                  </li>
                );
              })
            }


          </ul>
        </nav>
        <div className="search">
          <form action="#" method="get">
            <label><span className="search__label">Поиск</span>
              <input type="search" name="search" />
              <svg className="search__icon" width="20" height="20" aria-hidden="true">
                <use xlinkHref="/sprites.svg#icon-search"></use>
              </svg>
            </label>
            <ul className="search__list">
              <li className="search__item"><a className="search__link" href="#">Бокс</a></li>
              <li className="search__item"><a className="search__link is-active" href="#">Бег</a></li>
              <li className="search__item"><a className="search__link" href="#">Аэробика</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
              <li className="search__item"><a className="search__link" href="#">Text</a></li>
            </ul>
          </form>
        </div>
      </div>
    </header>


  );
}

export default Header;
