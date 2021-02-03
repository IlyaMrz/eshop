import React from 'react';
import './App.css';
import HomePage from './Pages/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
