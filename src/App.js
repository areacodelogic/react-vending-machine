import React, { Component } from "react";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import Navbar from "./Navbar";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";

class App extends Component {
  constructor(props) {
    super(props);

    //would probably want a db when so many items but for now they're in state
    this.state = {
      chips: {
        fritos: {
          name: "Fritos",
          price: "$1.50",
          inStock: false,
          amtLeft: 10
        },
        cheetos: {
          name: "Cheetos",
          price: "$1.50",
          inStock: false,
          amtLeft: 10
        },
        lays: {
          name: "Lays",
          price: "$1.50",
          inStock: false,
          amtLeft: 10
        },
        ruffles: {
          name: "Ruffles",
          price: "$1.75",
          inStock: false,
          amtLeft: 10
        }
      },
      candy: {
        mnm: {
          name: "MnM's",
          price: "$ .89",
          inStock: true,
          amtLeft: 10
        },
        snickers: {
          name: "Snickers",
          price: "$1.15",
          inStock: true,
          amtLeft: 10
        },
        sweedishFish: {
          name: "Sweedish Fish",
          price: "$2.00",
          inStock: true,
          amtLeft: 10
        },
        rolos: {
          name: "Rolos",
          price: "$ .89",
          inStock: true,
          amtLeft: 10
        },
        starbursts: {
          name: "Starbursts",
          price: "$1.25",
          inStock: true,
          amtLeft: 10
        }
      },
      soda: {
        cocaCola: {
          name: "Coca Cola",
          price: "$1.00",
          inStock: false,
          amtLeft: 10
        },
        orangeCrush: {
          name: "Orange Crush",
          price: "$1.00",
          inStock: false,
          amtLeft: 10
        },
        rootBeer: {
          name: "Root Beer",
          price: "$1.00",
          inStock: true,
          amtLeft: 10
        }
      }
    }

    this.buy = this.buy.bind(this);
  }


  buy(evt){
    console.log(evt.target);
  }

  render() {
    let chips = this.state.chips;
    let candy = this.state.candy;
    let soda = this.state.soda;

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" render={() =>
            <VendingMachine
              chips={chips}
              candy={candy}
              soda={soda}
            />}
          />
          <Route exact path="/chips" render={() => <Chips chips={chips} buy={this.buy}/>} />
          <Route exact path="/candy" render={() => <Candy candy={candy} buy={this.buy}/>} />
          <Route exact path="/soda" render={() => <Soda soda={soda} buy={this.buy}/>} />
          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
