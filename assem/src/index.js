import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import ByMember from './pages/monitoring/byMember';

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <ByMember /> */}
  </BrowserRouter>,
  document.getElementById('root')
);