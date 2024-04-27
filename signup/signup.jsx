import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import image from '../assets/mountain5.jpg'
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Sending data to server:", email, password);
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
  
      console.log("Response from server:", response.data);
  
      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='background_image'>
      <div className="container">
        <form onSubmit={handleSubmit} className='form1' action="POST">
          <label className='textsignup'>Signup</label>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter you email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter you password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='buttonsubmit'>Submit</button>
        </form>
      </div>
      <img src={image} alt="" className="background-image" />
    </div>
  );
};

export default Signup;