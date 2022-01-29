import { React, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
 const handleFinish = () => {
     setPassword(passwordRef.current.value);
    };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
            className="logo"
          ></img>
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email and start your free trial.</p>
        {!email ? (
          <div className="input">
            <input
              className="email"
              placeholder="Email Address"
              ref={emailRef}
            ></input>
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              className="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
            <button className="registerButton" onClick={handleFinish}>
              Ready to Watch
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
