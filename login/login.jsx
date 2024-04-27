import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const LoginPage = () => {
  const history=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e){
    e.preventDefault();
    try{

      await axios.post("http://localhost:8000/",{
          email,password
      })
      .then(res=>{
          if(res.data==="exist"){
              history("/home")
          }
          else if(res.data==="notexist"){
              alert("User does not exist!")
          }
      })
      .catch(e=>{
          alert("wrong details")
          console.log(e);
      })

  }
  catch(e){
      console.log(e);

  }
    // navigate('/home');
  };
 
  return (
    <div className='outer_login_container'>
      <video className="video-background" src="/rainvideo2.mp4" loop autoPlay muted />
    <div className="login-container">
      <video className="video-background" src="/rainvideo2.mp4" loop autoPlay muted />
      <div className="login-card">
        <h2 className="login-title">Welcome to SummitSeeker Adventures</h2>
        <form className="login-form" onSubmit={submit} action="POST" id='login_form' >
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="username"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-actions">
            {/* <button className="submit-button" type="submit">
              Login
            </button> */}
            <input type="submit" className="submit-button" onClick={submit} />
            <br/>
           
            <br />
            <Link to="/signup" className='signuplink'>Signup</Link>
            {/* <a className="forgot-password" href="#">
              Forgot password?
            </a> */}
          </div>
        </form>
      </div>
    </div></div>
  );
};

export default LoginPage;
