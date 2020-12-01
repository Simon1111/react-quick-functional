import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style/Index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store.js'


ReactDOM.render(
  <React.StrictMode>
    {/* DOTO add Store tomorov */}
    {/* <Provider store={store()}> */}
      <Router>
        <App />
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
