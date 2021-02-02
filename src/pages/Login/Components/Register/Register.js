import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

import Schema from "../../Schema/RegisterSchema.js";
import RegisterForm from "./RegisterForm.js"

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  role: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  role: "",
};

const initialUsers = [];
const buttonDisabled = true;

export default function Register() {
  const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [user, setUser] = useState(initialUsers);

  const createNewUser = (newUser) => {
    axios
      .post("https://truck-server.herokuapp.com/profiles/", newUser)
      .then((res) => {
        setUser(res.data.profile);
        setFormValues(initialFormValues);
        localStorage.setItem("token", res.data.token);
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
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
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
      <RegisterForm
          disabled={buttonDisable}
          values={formValues}
          change={changes}
          errors={errors}
          submit={submitForm}
        />
    </div>
  );
}
