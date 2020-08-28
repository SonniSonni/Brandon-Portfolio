import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div id="router">
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true}></Route>
        <Route path='/PortfolioPage' component={PortfolioPage} exact={true}></Route>
        <Route path='/AboutPage' component={AboutPage} exact={true}></Route>
        <Route path='/ContactPage' component={ContactPage} exact={true}></Route>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;