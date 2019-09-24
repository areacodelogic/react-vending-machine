import React, { Component } from "react";
import VendingPic from "./download.jpeg"
import {Link} from "react-router-dom"


class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
      <img src={VendingPic} alt="snack machine"/>
      <p>Go to <Link to="/candy">M&Ms</Link> page</p>
      <p>Go to <Link to="/soda">Soda</Link> page</p>
      <p>Go to <Link to="/chips">Chips</Link> page</p>
      </div>
    );
  }
}

export default VendingMachine;
