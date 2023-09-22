import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Store } from './Store/Store';
import { Provider } from 'react-redux';
import App from './App';
import { enableMapSet } from 'immer';
enableMapSet();
console.log(1)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {enableMapSet()}
    <Provider store={Store}>
       <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
