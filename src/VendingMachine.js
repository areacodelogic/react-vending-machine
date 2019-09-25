import React, { Component } from "react";
import VendingPic from "./download.jpeg"

class VendingMachine extends Component {
  render() {
    let chipsOut;
    let candyOut;
    let sodaOut;

    let chipsInStock = Object.values(this.props.chips);
    let candyInStock = Object.values(this.props.candy);
    let sodaInStock = Object.values(this.props.soda);

    for(let chips in chipsInStock){
      if(Object.values(chipsInStock[chips])[0] === false){
        chipsOut = <p>Chips are out of stock</p>; 
      }
    }

    for(let candy in candyInStock){
      if(Object.values(candyInStock[candy])[0] === false){
        console.log(Object.values(candyInStock[candy])[0])
        candyOut = <p>Candy is out of stock</p>; 
      }
    }

    for(let soda in sodaInStock){
      if(Object.values(sodaInStock[soda])[0] === false){
        sodaOut = <p>Soda is out of stock</p>; 
      }
    }

    return (
      <div className="VendingMachine">
        <img src={VendingPic} alt="snack machine" />
        <p>Select a snack type to see selection and prices.</p>
        {chipsOut}
        {candyOut}
        {sodaOut}
      </div>
    );
  }
}

export default VendingMachine;
