import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import axios from "axios";

import Schema from "../../Schema/LoginSchema.js";
import LoginForm from "./LoginForm.js";
import { UserContext } from "../../../../utils/UserContext";

import styled from 'styled-components';


const initialFormValues = {
  email: "",
  password: "",
};

const initialFormErrors = {
  email: "",
  password: "",
};

const buttonDisabled = true;

export default function Login() {
  const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const { setUser } = useContext(UserContext);

  const loginUser = (user) => {
    axios
      .post("https://truck-server.herokuapp.com/login", user)
      .then((res) => {
        setUser(res.data.profile);
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

      <ButtonStyle>
        <button type="link-to-reg">
          <a className="link-to-reg" href="/register">
            New to Food Truck Tracker? Click Here
          </a>
        </button>
      </ButtonStyle>
    </div>
  );
}


const ButtonStyle = styled.div`

    /* width: 30rem; */
    /* margin: auto; */
    /* background-color: pink; */
    display: flex;
    justify-content: center;

    .link-to-reg {
      text-decoration: none;
      font-size: 1.2rem;
      margin: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
`