import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function LoginForm(props) {
  const { disabled, values, change, submit, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
  };

  return (
    <LoginStyle>
      <h1>Welcome Back!</h1>

      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={onChange}
                value={values.email}
              />
            </label>
            <p>{errors.email}</p>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />
            </label>
            <p>{errors.password}</p>
          </div>
          <div>
            <button type="submit" disabled={disabled}>
              Login
            </button>
          </div>
          <div>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </form>
      </div>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  width: 30rem;
  padding: 2rem;
  margin: auto;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  button {
    padding-right: 2rem;
    margin-right: 2rem;
  }
`;
