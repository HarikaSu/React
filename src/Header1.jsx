import React, { Component } from "react";
import "./Header1.css";

class Header1 extends Component {
  render() {
    return (
      <header class="item">
        <div>
          <h2>Sunkara Harika</h2>
          <ul class="item1">
            <li>
              <a href="mailto:harika@gmail.com">harika@gmail.com</a>
            </li>
            <li>
              <a href="mailto:harika@gmail.com">Linkdin</a>
            </li>
            <li>
              <a href="mailto:harika@gmail.com">Github</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header1;
