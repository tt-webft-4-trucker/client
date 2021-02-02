import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

import Schema from "../../Schema/LoginSchema.js";
import LoginForm from "./LoginForm.js";

const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};

const initialUsers = [];
const buttonDisabled = true;

export default function Login() {
  const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);

  const loginUser = (user) => {
    axios
      .post("https://truck-server.herokuapp.com/login", user)
      .then((res) => {
        setUsers([res.data, ...users]);
        localStorage.setItem("token", res.data.token);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const changes = (name, value) => {
    Yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newUser = {
      email: formValues.email,
      password: formValues.password,
    };
    loginUser(newUser);
  };

  useEffect(() => {
    Schema.isValid(formValues).then((valid) => {
      setButtonDisable(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <div>
        <LoginForm
          disabled={buttonDisable}
          values={formValues}
          change={changes}
          errors={errors}
          submit={submitForm}
        />
      </div>

      <div>
        <button type="link-to-reg">
          <a class="link-to-reg" href="/register">New to Food Truck Tracker? Click Here</a>
        </button>
      </div>
    </div>
  );
}
