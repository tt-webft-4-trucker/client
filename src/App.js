import './App.css';
import './assets/css/main.css';

import { Switch, Route } from 'react-router-dom';
import React  from 'react';

/**
 * CUSTOM IMPORTS
 */
import Header from './components/Header';
import Footer from './components/Footer';



import Home from './pages/Home';
import AddTruck from './pages/AddTruck';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Switch>

        <Route path="/newtruck">
          <AddTruck />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
