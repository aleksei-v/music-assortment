import React from 'react';
import ReactDOM from 'react-dom/client';
// import $ from 'jquery'
// import popper from 'popper';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);
