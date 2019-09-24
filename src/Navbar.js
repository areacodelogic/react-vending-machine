import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink exact to="/">
          Vending Machine
        </NavLink>
        <NavLink exact to="/chips">
          Chips
        </NavLink>
        <NavLink exact to="/candy">
          Candy
        </NavLink>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
