import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginNav from './LoginNav';
/**import ' node_modules/bootstrap/dist/css/bootstrap.min.css'*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post('https://fliprslipr.onrender.com/api/users/signup', {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    });
    if(user.length === 0){
      console.log('Signup failed!');
    }
    else{
      console.log('Signup successful!');
    }
  }
    
    return (
      <>
      <LoginNav/>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <Link to={"/signin"}>sign in</Link>
        </p>
      </form>
      </>
    )
  
}
