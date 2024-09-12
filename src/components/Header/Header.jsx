import './Header.scss';

import Logotype from '../Logotype/Logotype.jsx';


function Header() {

  return (
    <>
      <header className="header _container">
        <section className="header__wrapper">
          <section className="header__left">
            <Logotype />
            <nav className="header__nav nav">
              <ul className='nav__list'>
                <li className='nav__item'>Каталог</li>
                <li className='nav__item'>Топы</li>
                <li className='nav__item'>Форум</li>
                <li className='nav__item'>
                  <svg viewBox="0 0 50 50" width="11px" height="11px"><path d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z"/><line fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" x1="31.2" y1="31.2" x2="44.5" y2="44.5"/></svg>
                  Поиск
                </li>
              </ul>
            </nav>
          </section>
          <section className="header__right">
            <a className="header__marks" href="#">Закладки</a>
            <div className="header__themes themes">
              <div className="themes__indicator"></div>
              <div className="themes__icon-container">
                  <i className="themes__icon fa-solid fa-sun"></i>
              </div>
            </div>
            <div className='header__settings'>
              <svg className="SvgIcon_root__n_a0S" focusable="false" viewBox="0 0 24 24" aria-hidden="true" aria-label="Preferences"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>
            </div>
            <button className="header__blue-button">Войти</button>
          </section>
        </section>
      </header>
    </>
  )
}

export default Header