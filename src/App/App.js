import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import HomePage from '../Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
