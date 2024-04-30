import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login"); // Định nghĩa biến currState và hàm setCurrState

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"} </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span className="click" onClick={() => setCurrState("Sign Up")}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            ALready have an account?{" "}
            <span className="click" onClick={() => setCurrState("Login")}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
