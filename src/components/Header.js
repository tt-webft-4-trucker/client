import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const history = useHistory();

  function LogOut() {
    // console.log(localStorage);
    // console.log(user);
    // console.log(props);
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    setUser({});
    history.push('/');
  }

    return (
      <div id="header-wrapper">
        <header id="header" className="container">
          <div id="logo">
            <h1>
              <a href="/">Food Truck Tracker</a>
            </h1>
          </div>

          <nav id="nav">

            <ul>
              {user.name ? (
                <div>
                <li>Welcome back, {user.name}</li>
                <li>
                  <button onClick={LogOut} >Log Out</button>
                </li>
                </div>
              ) : (
                <>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                  <li className="current">
                    <a href="/login">Login</a>
                  </li>
                </>
              )}
            </ul>

          </nav>
        </header>
      </div>
    );
  
}
