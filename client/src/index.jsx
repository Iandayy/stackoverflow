import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/client'; // eslint-disable-line no-unused-vars

import App from './App'; // eslint-disable-line no-unused-vars

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // eslint-disable-line no-unused-vars
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
