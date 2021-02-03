import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export default function Header(props) {
  const { user } = useContext(UserContext);

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
              <li>Welcome back, {user.name}</li>
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
