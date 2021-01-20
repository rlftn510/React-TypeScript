import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import LoginPage from './views/LoginPage'


function App() {
  return (
    <>
      <Switch>
         <Route path={'/'} component={ LoginPage } />
      </Switch>
    </>
  );
}

export default App;
