import React, { Component } from "react";
import SodaPic from "./soda.jpeg";
import { Link } from "react-router-dom";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={SodaPic} alt="Soda" />
        <p>
          Go to <Link to="/">Home</Link>
        </p>
      </div>
    );
  }
}

export default Soda;
