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
import AddTruck from "./pages/AddTruck";
import NewMenu from "./pages/Menu/NewMenu";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="page-wrapper">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newtruck" component={AddTruck} />
            <Route path="/trucks/:id" component={FoodTruckView} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newmenu" component={NewMenu}/>
          </Switch>
        </main>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
