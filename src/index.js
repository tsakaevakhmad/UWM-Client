import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import './StaticFiles/Options/Css/index.css';
import './StaticFiles/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './StaticFiles/bootstrap-5.0.2-dist/css/bootstrap.css';
import './StaticFiles/bootstrap-5.0.2-dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
