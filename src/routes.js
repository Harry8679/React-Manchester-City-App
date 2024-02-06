import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';

const MyRoutes = ({ user }) => {
  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default MyRoutes;
