import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={HomePage}></Route>
        <Route path='/' component={HomePage}></Route>
        <Route path='/' component={HomePage}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);