import React, { Component, useEffect, useState } from "react";
import axios from "axios";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory, useNavigate } from "react-router-dom";
import LoginNav from "./LoginNav";
import LoadingScreen from "react-loading-screen";
export default function Login() {
  const navigate = useNavigate();
  const navigateTo = () => navigate("../home", { replace: true });
  const handleSubmit = async (e, props) => {
    setLoadingState(true);
    e.preventDefault();
    const user = await axios.post(
      "https://fliprslipr.onrender.com/api/users/login",
      {
        email: e.target[0].value,
        password: e.target[1].value,
      }
    );
    console.log("hiiii");
    if (user.length === 0) {
      console.log("Login failed!");
      return 0;
    } else {
      console.log("Login successful!");
      // const history =useHistory();
      setLoadingState(false);
      navigateTo();
    }
  };
  useEffect((e) => {
    // temp(e, "cipla");

    setLoadingState(false);
  }, []);

  let [loadingState, setLoadingState] = useState(false);
  return (
    <>
      <LoadingScreen
        loading={loadingState}
        bgColor="#f1f1f1"
        spinnerColor="#00d09c"
        textColor="#00d09c"
        // logoSrc="/logo.png"
        text="Logging You In"
      />
      <LoginNav />
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

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
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
