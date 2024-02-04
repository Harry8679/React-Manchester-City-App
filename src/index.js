import React from 'react';
import ReactDOM from 'react-dom/client';
import './Resources/css/app.css';
// import MyRoutes from './MyRoutes';
import MyRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);
