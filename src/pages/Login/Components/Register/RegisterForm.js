import React from "react";
import styled from 'styled-components';


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
    <div>
      <H1style>We're excited for you join us at Food Truck Tracker!</H1style>
      <RegisterStyle>
        <h3>Tell us a bit about yourself:</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              Role
              <select onChange={onChange} value={values.role} name="role">
                <option value="">- Select an option -</option>
                <option value="diner">Diner</option>
                <option value="operator">Operator</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Pick a username
              <input
                type="text"
                name="username"
                onChange={onChange}
                value={values.username}
              />
            </label>
            <p>{errors.username}</p>
          </div>
          <div>
            <label>
              Enter your email
              <input
                type="email"
                name="email"
                onChange={onChange}
                value={values.email}
              />
            </label>
            <p>{errors.email}</p>
          </div>
          <div>
            <label>
              Set your password
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
              Create Account
            </button>
          </div>
        </form>
       </RegisterStyle> 
    </div>
  );
}

const H1style = styled.div`
  width: 28rem;
  margin: auto;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  color: black;
`

const RegisterStyle = styled.div`
background-color: white;
border: 1px solid #CDCDCD;
border-radius: 8px;
width: 34rem;
padding: 2rem;
margin: auto;
margin-bottom: 2rem;


h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  opacity: 88%;
}

label{
  opacity: 88%;
}
`