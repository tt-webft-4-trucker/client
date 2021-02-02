import { Route, Switch } from 'react-router-dom';
import './App.css';

import './assets/css/main.css';

import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

/**
 * CUSTOM IMPORTS
 */
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Content from './components/Content';
import FoodTruckView from './FoodTruckView';

import Home from './pages/Home';



function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Banner />
      
      <Switch>

        <Route path='/trucks/:id'>
          <FoodTruckView />
        </Route>
    
        <Route path='/'>
          <Home />
        </Route>

      </Switch>


      <Content />
      <Footer />
    </div>
  );
}

export default App;
