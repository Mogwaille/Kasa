// Import de divers composants
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';


// Application de App.js dans le root d'index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);