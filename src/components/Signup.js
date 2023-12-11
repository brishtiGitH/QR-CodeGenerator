import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

function SignUp() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const postData = () => {
    axios.post(`https://6576dcb5197926adf62c9df8.mockapi.io/myData`, {
      username,
      email,
      phone,
    });
  };

  const errorStyle = {
    color: "red",
    fontSize: "small",
    fontWeight: "bold",
    fontFamily: "Arial",
    height: "8px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username.length < 7) {
      document.getElementsByClassName("errors")[0].innerHTML =
        "Username should be more than 6 characters long.";
      return;
    } else document.getElementsByClassName("errors")[0].innerHTML = "";

    if (!email.endsWith("@gmail.com")) {
      document.getElementsByClassName("errors")[1].innerHTML =
        "Email should end with @gmail.com";
      return;
    } else document.getElementsByClassName("errors")[1].innerHTML = "";

    if (!phone.match(/^[6789]\d{9}$/)) {
      document.getElementsByClassName("errors")[2].innerHTML =
        "Phone number should be 10 digits and start with 6, 7, 8, or 9.";
      return;
    } else document.getElementsByClassName("errors")[2].innerHTML = "";

    if (!passwordPattern.test(password)) {
      document.getElementsByClassName("errors")[3].innerHTML =
        "Password should be more than 6 characters long and contain at least one capital letter, one number, and one special character.";

      return;
    } else document.getElementsByClassName("errors")[3].innerHTML = "";

    if (password !== confirm) {
      document.getElementsByClassName("errors")[4].innerHTML =
        "Passwords do not match.";
      return;
    } else document.getElementsByClassName("errors")[4].innerHTML = "";

    alert("Sign Up Successful!");
  };

  return (
    <div className="App">
      <h1 className="App-header">Sign Up</h1>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="input">
          <label className="labels" htmlFor="username">
            Username:
          </label>
          <input
            className="input-fields"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={username}
          />
          <div className="errors" style={errorStyle}></div>
        </div>

        <div className="input">
          <label className="labels" htmlFor="email">
            Email Address:{" "}
          </label>
          <input
            className="input-fields"
            type="email" //implement email validation
            id="email"
            placeholder="Email ID"
            required
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <div className="errors" style={errorStyle}></div>
        </div>

        <div className="input">
          <label className="labels" htmlFor="phone">
            Phone:
          </label>
          <input
            className="input-fields"
            type="phone"
            id="phone"
            placeholder="Phone No."
            required
            autoComplete="off"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
          <div className="errors" style={errorStyle}></div>
        </div>

        <div className="input">
          <label className="labels" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="input-fields"
            type="password"
            id="password"
            name="password"
            placeholder="Create Password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className="errors" style={errorStyle}></div>
        </div>

        <div className="input">
          <label className="labels" htmlFor="confirm">
            {" "}
            Confirm Password:{" "}
          </label>
          <input
            className="input-fields"
            type="password"
            id="confirm"
            placeholder="Confirm Password"
            required
            autoComplete="off"
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
            value={confirm}
          />
          <div className="errors" style={errorStyle}></div>
        </div>

        <button type="submit" onClick={postData} className="btn">
          Sign Up
        </button>
      </form>

      <p className="para">
        Already have an account?{" "}
        <Link to="/login" className="App-link">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
