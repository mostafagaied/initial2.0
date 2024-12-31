import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./others/styleLS.css";
const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/accueill");
  };
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" placeholder="Enter your email" required/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" placeholder="Enter your password" required />
        </label>
        <button type="submit" onClick={handleClick}>
          Login
        </button>
        <br />
        <p>
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
