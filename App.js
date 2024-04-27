import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login/login';
import Home from './home/home';
import ContactUs from './contactUs/contact';
import Signup from './signup/signup';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    
  );
}

export default App;
