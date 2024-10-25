import React from "react";
import "./Login.css";
import icon from "../../assets/CT Icon.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="LoginWrap">
      <img src={icon} />
      <p className="firstP">Login to continue</p>
      <div className="auth">
        <div className="authContents">
          <p>Choose a login method</p>

          <div to={"/"} className="routeToAuth">
            <h3>Admin Login</h3>
            <Link>
              <p className="Admin">
                Login as an administrator <HiArrowRight />
              </p>
            </Link>
          </div>
          <div to={"/"} className="routeToAuth">
            <h3>User Login</h3>
            <Link>
              <p className="Admin">
                Login as a user
                <HiArrowRight />
              </p>
            </Link>
          </div>
          <p>
            Don't have an account? &nbsp;{" "}
            <Link to={"/"} style={{ color: "#287bdd" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
