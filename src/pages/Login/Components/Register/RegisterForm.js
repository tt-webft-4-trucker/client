import React from "react";

export default function LoginForm(props) {
  const { disabled, values, change, submit, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
    console.log(values);
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
  };

  return (
    <div>
      <h1>We're excited for you join us at Food Truck Tracker!</h1>
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
              type="text"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </label>
          <p>{errors.password}</p>
        </div>
        <div>
          <label>
            Confirm your password
            <input
              type="text"
              name="passwordConfirm"
              onChange={onChange}
              value={values.passwordConfirm}
            />
          </label>
          <p>{errors.passwordConfirm}</p>
        </div>
        <div>
          <button type="submit" disabled={disabled}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
