import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This will be the parent container for where we wish to share the states among the children
import { RecoilRoot } from "recoil"

ReactDOM.render(
  <React.StrictMode>
{/* Wrapping the children components with Recoil  */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
