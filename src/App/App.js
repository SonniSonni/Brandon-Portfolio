import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header/Header';
import HomePage from '../Components/HomePage/HomePage';
import PortfolioPage from '../Components/PortfolioPage/PortfolioPage';
import AboutPage from '../Components/AboutPage/AboutPage';
import ContactPage from '../Components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
