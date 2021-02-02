import React from "react";

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
        </form>
      </div>
    </div>
  );
}