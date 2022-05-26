import React from "react";

function Login({ onLogin }) {
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
    if (!email || !password) {
      return;
    }
    onLogin({ email, password });
  }

  return (
    <div className="register">
      <h2 className="register__title">Вход</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="register__label">
          <input
            id="email"
            name="email"
            type="email"
            value={email || ""}
            placeholder="Email"
            className="register__field"
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password" className="register__label">
          <input
            id="password"
            name="password"
            type="password"
            value={password || ""}
            placeholder="Пароль"
            className="register__field"
            onChange={handleChangePass}
          />
        </label>
        <button type="submit" className="register__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
