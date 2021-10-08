import React, { useState } from "react";
import axios from "axios";
import "../styles/sweet.css";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blog-backend-iot.herokuapp.com/api/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response.data);
        if (response.data) {
          //redirect to login page
          localStorage.setItem("userData", JSON.stringify(response.data));
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="Login-container">
      <div className="Login-subContainer">
        <form className="Login-form">
          <div className="Login-title">Blog Login</div>
          <div className="line">
            <label className="Login-label" htmlFor="username">
              Email
            </label>
            <input
              className="Login-input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              v-model="form.email"
              type="email"
              required
              autoFocus
              placeholder="Email"
            />
          </div>
          <div className="line1">
            <label className="Login-label" htmlFor="password">
              Password
            </label>
            <input
              className="Login-input"
              v-model="form.password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              required
              autoComplete="current-password"
            />
          </div>
          <div className="Button-container">
            <button
              className="Login-button"
              type="submit"
              onClick={HandleSubmit}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
