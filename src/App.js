import { Route, Switch } from 'react-router-dom';
import './App.css';
import FoodTruckView from './FoodTruckView';



function App() {
  return (
    <div className="App">
        <h1>Some App</h1>
        <Switch>
          <Route path='/trucks/:id'>
            <FoodTruckView />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
