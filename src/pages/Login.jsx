import React from 'react'
import './../styles/Login.css';
import { GoHorizontalRule } from "react-icons/go";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="logi">
        <div className="big">
          <div className="inner-box">
            <p className="log">Log In</p>
            <p className="well">Welcome back! Please enter your details</p>
            <p className="ema">Email</p>
            <input className="email-box" type="text" />
            <p className="pas">Password</p>
            <input className="pass-box" type="text" />
            <a className="forgot" href="">
              Forgot Password?
            </a>
            <button className="start-button" onClick={() => navigate("/model")}>
          Register
        </button>
            <div className="empty">
              <div className="line-or">
                <div className="line"></div>
                <div className="or">Or</div>
                <div className="line"></div>
              </div>

              <div className="two">
                <button className="goo">Google</button>
                <button className="face">Facebook</button>
              </div>
            </div>
            <div className="don">
              <p className="do">
                don't have account?
                <a className="a" href={"/register"}>
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <div className="out-box">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login