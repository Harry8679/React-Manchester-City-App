import React from 'react';
import ReactDOM from 'react-dom/client';
import './Resources/css/app.css';
// import MyRoutes from './MyRoutes';
import MyRoutes from './routes';
import { firebase } from './firebase';

const App = (props) => {
  return (
    <MyRoutes {...props} />
  );
}

firebase.auth().onAuthStateChanged((user) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App user={user}/>);
});
