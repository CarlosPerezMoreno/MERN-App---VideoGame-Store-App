import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="header">
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="font-weight-light">GameStore</h1>
              <p class="lead">
                Your webpage to buy videogames, consoles and components.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
