import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from "./store";
// import ByMember from './pages/monitoring/byMember';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />
      {/* <ByMember /> */}  
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);