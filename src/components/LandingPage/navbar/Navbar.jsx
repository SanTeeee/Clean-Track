import "./Navbar.css";
import Icon from "../../../assets/CT Icon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={Icon} alt="" />
        <header>CLEANTRACK</header>
      </div>

      <div className="navLinks">
        <NavLink to="/">How it works</NavLink>
        <NavLink to="">About</NavLink>
        <NavLink to="">Services</NavLink>
        <NavLink to="">Login</NavLink>
      </div>
      <div className="login">
        <NavLink to="/Login">Login</NavLink>
        <a href="#">
          <button>Register</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
