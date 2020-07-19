import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));