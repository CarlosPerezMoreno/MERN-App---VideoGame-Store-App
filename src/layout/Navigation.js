import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Videogames
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavItem className="nav-link">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </NavItem>
              <NavItem className="nav-link">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </NavItem>
              <NavItem className="nav-link">
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </NavItem>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
