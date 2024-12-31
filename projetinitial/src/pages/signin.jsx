import React from "react";
import { Link } from "react-router-dom";

import "./others/styleLS.css";

const Signin = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="fname">
          First Name:
          <input type="text" placeholder="Enter your Name" required />
        </label>
        <label htmlFor="lname">
          Last Name:
          <input type="text" id="lname"  placeholder="Enter your Name" required/>
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" id="email"  placeholder="Enter your email" required />
        </label>
        <label htmlFor="password">
        Password:
          <input type="password" id="password" placeholder="New password" required />
        </label>
        <button>Sign Up</button>
        <br />
        <p>
          Already Registered? <Link to="/Login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
