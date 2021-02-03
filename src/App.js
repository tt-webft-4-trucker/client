import "./App.css";
import "./assets/css/main.css";

import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";


/**
 * CUSTOM IMPORTS
 */

// Components 
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodTruckView from "./FoodTruckView";
import Login from "./pages/Login/Components/Login/Login.js";
import Register from "./pages/Login/Components/Register/Register.js";
import Home from "./pages/Home";
import AddTruck from "./pages/AddTruck";
import EditTruck from './pages/EditTruck';
import PrivateRoute from './utils/PrivateRoute';
import OperatorDashboard from './components/OperatorDash';
import NewMenu from "./pages/Menu/NewMenu";


// Utilities 
import { UserContext } from "./utils/UserContext";
import { useProfile } from './utils/useProfile'

function App() {
  const [user, setUser] = useProfile();
  return (

    <div className="page-wrapper">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/newtruck" component={AddTruck} />
            <PrivateRoute path="/edittruck" component={EditTruck} />
            <Route path="/trucks/:id" component={FoodTruckView} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/newmenu" component={NewMenu}/>
            <PrivateRoute path='/operator/:id'>
              <OperatorDashboard />
            </PrivateRoute>
          </Switch>
        </main>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
