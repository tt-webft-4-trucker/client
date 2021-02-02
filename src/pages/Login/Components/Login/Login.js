import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

import Schema from "../../Schema/LoginSchema.js";
import LoginForm from "./LoginForm.js";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

const initialUsers = [];
const buttonDisabled = true;

export default function Login() {
  const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);

  const createNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
        console.log(res.data)
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
      name: formValues.username,
      password: formValues.password,
    };
    createNewUser(newUser);
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
