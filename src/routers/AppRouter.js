import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../components/HomePage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);