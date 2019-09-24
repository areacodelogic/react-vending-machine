import React, { Component } from "react";
import ChipsPic from "./chips.jpeg";
import { Link } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <img src={ChipsPic} alt="chips" />
        <p>
          Go to <Link to="/">Home</Link>
        </p>
      </div>
    );
  }
}

export default Chips;
