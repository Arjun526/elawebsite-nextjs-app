import React from "react";
import "./navbar.scss";
import navLogo from "@/app/assets/navlogo/navlogo.svg";
import Image from "next/image";
// import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div id="navbar-main-sec">
      <div className="nav-innersec">
        <div className="navbar-left">
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <Image src={navLogo} alt="Logo" className="logo" />
          {/* </Link> */}
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="navbar-right">
          <button className="btn white-btn">
            {/* <Link to="https://app.elalearn.com/login" className="btn-login"> */}
            LOGIN
            {/* </Link> */}
          </button>
          <button className="btn blue-btn">
            {" "}
            {/* <Link to="https://app.elalearn.com/signup" className="btn-singup"> */}
            SIGNUP
            {/* </Link> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
