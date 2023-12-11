import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const details = () => {

  };
  return (
    <div className="App">
      <h1 className="App-header">Log In</h1>
      <form action="">
        <div className="input">
          <label className="labels" htmlFor="username">
            Username:{" "}
          </label>
          <input
            className="input-fields"
            type="text"
            id="username"
            minLength={6}
            placeholder="Enter your username"
            required
            autoComplete="off"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={username}
          />
        </div>

        <div className="input">
          <label className="labels" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="input-fields"
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="off"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <button className="btn" onClick={details}>
          Login
        </button>


      </form>
      <p className="para">
        New member?{" "}
        <Link to="/" className="App-link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
