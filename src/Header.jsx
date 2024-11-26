import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="item">
          <h2 className="md">Welcome to my Gallery</h2>
          <h2 className="md">Explore Images</h2>
        </nav>
      </header>
    );
  }
}

export default Header;
