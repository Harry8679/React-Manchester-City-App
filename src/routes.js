import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SignIn from './components/signIn/SignIn';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MyRoutes;
