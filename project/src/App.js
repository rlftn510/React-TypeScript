import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage'
import CategoryPage from './views/CategoryPage/CategoryPage'


function App() {
  return (
    <>
      <Switch>
         <Route exact path={'/'} component={ LandingPage } />
         <Route exact path='/login' component={ LoginPage } />
         <Route exact path='/category' component={ CategoryPage } />
      </Switch>
    </>
  );
}

export default App;
