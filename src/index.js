import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
unregister();
