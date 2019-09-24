import React, { Component } from "react";
import VendingPic from "./download.jpeg"
import { Link } from "react-router-dom"

class VendingMachine extends Component {
  render() {
    let fritos = this.props.chips.fritos.inStock;
    let cheetos = this.props.chips.fritos.inStock;
    let lays = this.props.chips.fritos.inStock;
    let ruffles = this.props.chips.fritos.inStock;
    let chips = [fritos, cheetos, lays, ruffles];

    let mnm = this.props.candy.mnm.inStock;
    let snickers = this.props.candy.snickers.inStock;
    let sweedishFish = this.props.candy.sweedishFish.inStock;
    let rolos = this.props.candy.rolos.inStock;
    let starbursts = this.props.candy.starbursts.inStock;
    let candy = [mnm, snickers, sweedishFish, rolos, starbursts];

    let cocaCola = this.props.soda.cocaCola.inStock;
    let orangeCrush = this.props.soda.orangeCrush.inStock;
    let rootBeer = this.props.soda.rootBeer.inStock;
    let soda = [cocaCola, orangeCrush, rootBeer];

    let chipsOut;
    let candyOut;
    let sodaOut;
    
    if (chips.every(chip => chip === false)) {
      chipsOut = <p>Chips are out of stock</p>;
    }

    if (candy.every(candy => candy === false)) {
      candyOut = <p>Candy is out of stock</p>;
    }

    if (soda.every(soda => soda === false)) {
      sodaOut = <p>Soda is out of stock</p>;
    }

    return (
      <div className="VendingMachine">
        <img src={VendingPic} alt="snack machine" />
        <p>Go to <Link to="/chips">Chips</Link> page</p>
        {chipsOut}
        <p>Go to <Link to="/candy">Candy</Link> page</p>
        {candyOut}
        <p>Go to <Link to="/soda">Soda</Link> page</p>
        {sodaOut}
      </div>
    );
  }
}

export default VendingMachine;
