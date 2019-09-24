import React, { Component } from "react";
import CandyPic from "./Candy.jpeg";
import { Link } from "react-router-dom"

class Candy extends Component {
  render() {
    return (
      <div className="Candy">
        <img src={CandyPic} alt="candy" />
        <p>Go to <Link to="/">Home</Link></p>
      </div>
    );
  }
}

export default Candy;
