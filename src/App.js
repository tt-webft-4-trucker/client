import "./App.css";
import "./assets/css/main.css";

import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";

/**
 * CUSTOM IMPORTS
 */
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodTruckView from "./FoodTruckView";
import Login from "./pages/Login/Components/Login/Login.js";
import Register from "./pages/Login/Components/Register/Register.js";
import Home from "./pages/Home";
import { UserContext } from "./utils/UserContext";

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="page-wrapper">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/trucks/:id" component={FoodTruckView} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
