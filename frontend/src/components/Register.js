import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePass(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
  }

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="register__label">
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            className="register__field"
            onChange={handleChangeEmail}
            minLength="6"
            maxLength="20"
          />
        </label>
        <label htmlFor="password" className="register__label">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Пароль"
            className="register__field"
            onChange={handleChangePass}
            minLength="6"
            maxLength="20"
          />{" "}
        </label>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in">
        <button type="button" className="register__open-button">
          Уже зарегистрированы? Войти
        </button>
      </Link>
    </div>
  );
}
export default Register;
