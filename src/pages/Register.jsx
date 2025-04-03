import React from 'react'
import './../styles/Register.css';
import shoes from './../../public/7bc95f8094338be40808d86277912f15.jpg';
const Register = () => {
  return (
    <>
      <div className="reg">
        <div className="vbig">
          <div className="out-box">
            <img className="king1" src={shoes}></img>
          </div>
          <div className="iinner-box">
            <p className="regis">Sign up</p>
            <p className="con">Sign up to continue</p>

            <input className="name-box" type="text" placeholder="   FullName" />
            <input className="e-box" type="text" placeholder="   Email" />
            <input className="p-box" type="text" placeholder="   PassWord" />

            <button className="sign-u"> Sign up</button>
            <div className="empy">
              <div className="line-or">
                <div className="line"></div>
                <div className="or">Or</div>
                <div className="line"></div>
              </div>
              <div className="one">
                <button className="go">Google</button>
                <button className="face">Facebook</button>
              </div>
            </div>
            <div className="don">
              <p className="do">
                Already have an account?
                <a className="sign-link" href={"/login"}>
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register