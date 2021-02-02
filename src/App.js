import './App.css';
import './assets/css/main.css';

import { Switch, Route } from 'react-router-dom';
import React  from 'react';

/**
 * CUSTOM IMPORTS
 */
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Content from './components/Content';

import Home from './pages/Home';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Banner />
      
      <Switch>

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
