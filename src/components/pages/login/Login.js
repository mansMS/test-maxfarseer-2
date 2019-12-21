import React, { useState } from 'react';
import Spinner from '../../spinner';
import './Login.css';

const Login = ({ loading, error, onFormSubmit }) => {

  const [email, setEmail] = useState('max@test.com');
  const [password, setPassword] = useState('12345');

  const handleSubmit = (e) => {
    onFormSubmit(e, email, password, setPassword);
  }

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          data-field-name="email"
          type="text"
          placeholder="Имя"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          data-field-name="password"
          type="text"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        {
          loading
            ? < Spinner />
            : <button type="submit">Войти</button>
        }
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;