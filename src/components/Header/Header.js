import React from "react";
import logo from "../../logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="jetstyle" />
      </Link>
    </div>
  </header>
);
