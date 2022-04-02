import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import Button from '../components/Button';

import '../styles/Login.css';

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(RecipeContext);

  const handleChange = (target, stateFunction) => {
    stateFunction(target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    props.history.push('/comidas');
  };

  const MIN_CHARACTER = 6;
  const EMAIL_REGEX = /.+@.+\..+/;

  return (
    <form className="login">
      <div className="login-container">
        <label htmlFor="email-login">
          <h5>E-mail</h5>
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ ({ target }) => handleChange(target, setEmail) }
          />
        </label>
        <label htmlFor="email-login">
          <h5>Senha</h5>
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ ({ target }) => handleChange(target, setPassword) }
          />
        </label>
        <Button
          text="Entrar"
          dataTestId="login-submit-btn"
          disabled={ password.length <= MIN_CHARACTER || !EMAIL_REGEX.test(email) }
          onClick={ handleClick }
        />
      </div>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Login;
