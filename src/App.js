import "./App.css";
import "./assets/css/main.css";

import { Switch, Route } from "react-router-dom";
import React from "react";


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

import OperatorDash from './components/OperatorDash';
import DinerDash from './components/DinerDash';
import NewMenu from "./pages/Menu/NewMenu";





// Utilities 
import { UserContext } from "./utils/UserContext";
import { useProfile } from './utils/useProfile'
import MenuEditForm from "./pages/Menu/MenuEditForm";

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
            <Route path="/trucks/:id" component={FoodTruckView} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />


            <PrivateRoute path='/operator/:id' component={OperatorDash}/>
            <PrivateRoute path='/edittruck/:id' component={EditTruck}/>

            <Route path="/newmenu" component={NewMenu}/>
    
            <PrivateRoute path='/operator/:id' component={OperatorDash}>
              <OperatorDash />
            </PrivateRoute>
            <PrivateRoute path='/dinerdash' component={DinerDash}>
              <DinerDash />
            </PrivateRoute>

          </Switch>
        </main>

        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
