import React from "react";
import { Route } from "react-router-dom";
import { Switch, Link } from "react-router-dom";
import logo from "../logo.svg";

function Header({ email, onExit }) {
  const [isNavBlockOpen, setIsNavBlockOpen] = React.useState(true);

  function handleNavClick() {
    if (isNavBlockOpen) {
      setIsNavBlockOpen(false);
    } else {
      setIsNavBlockOpen(true);
    }
  }

  return (
    <Switch>
      <Route exact path="/">
        <div
          className={`header__nav ${
            isNavBlockOpen ? "header__nav_visibility_hidden" : ""
          }`}
        >
          <p className="header__nav-email">{email}</p>
          <button className="header__nav-exit" type="button" onClick={onExit}>
            Выйти
          </button>
        </div>
        <div className="header">
          <button
            className={`header__nav-button ${
              !isNavBlockOpen ? "header__nav-button-close" : ""
            }`}
            type="button"
            onClick={handleNavClick}
          ></button>
          <img src={logo} className="header__logo" alt="Логотип Mesto" />
          <div className="header__info">
            <p className="header__email">{email}</p>
            <button className="header__button" type="button" onClick={onExit}>
              Выйти
            </button>
          </div>
        </div>
      </Route>
      <Route path="/sign-up">
        <div className="header">
          <img src={logo} className="header__logo" alt="Логотип Mesto" />
          <div className="header__info header__info-sign">
            <Link to="/sign-in">
              <button className="header__button" type="button">
                Войти
              </button>
            </Link>
          </div>
        </div>
      </Route>
      <Route path="/sign-in">
        <div className="header">
          <img src={logo} className="header__logo" alt="Логотип Mesto" />
          <div className="header__info header__info-sign">
            <Link to="/sign-up">
              {" "}
              <button className="header__button" type="button">
                Регистрация
              </button>
            </Link>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
export default Header;
