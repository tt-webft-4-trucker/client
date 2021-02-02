import "./App.css";
import "./assets/css/main.css";

import { Switch, Route } from "react-router-dom";
import React from "react";

/**
 * CUSTOM IMPORTS
 */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Content from "./components/Content";
import FoodTruckView from "./FoodTruckView";
import Login from "./pages/Login/Components/Login/Login.js";
import Register from "./pages/Login/Components/Register/Register.js";
import Home from "./pages/Home";

function App() {
  return (
    <div className="page-wrapper">
      <Header />

      <main>
        <Switch>
          <Route exact path="/">
            <Banner />
            <Home />
          </Route>
          <Route path="/trucks/:id" component={FoodTruckView} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>

      <Content />
      <Footer />
    </div>
  );
}

export default App;
