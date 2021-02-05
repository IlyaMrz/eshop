import React from 'react';
import './App.css';
import HomePage from './Pages/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop';
import Header from './Components/header/header';
import SignInUp from './Pages/SignInUp';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
