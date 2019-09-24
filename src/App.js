import React, { Component } from "react";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import Navbar from "./Navbar";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chipsInStock: {
        fritos: {
          inStock: true,
          amtLeft: 10
        },
        cheetos: {
          inStock: true,
          amtLeft: 10
        },
        lays: {
          inStock: true,
          amtLeft: 10
        },
        ruffles: {
          inStock: true,
          amtLeft: 10
        }
      },
      candyInStock: {
        mnm: {
          inStock: true,
          amtLeft: 10
        },
        snickers: {
          inStock: true,
          amtLeft: 10
        },
        sweedishFish: {
          inStock: true,
          amtLeft: 10
        },
        rolos: {
          inStock: true,
          amtLeft: 10
        },
        starbursts: {
          inStock: true,
          amtLeft: 10
        }
      },
      sodaInStock: {
        cocaCola: {
          inStock: false,
          amtLeft: 10
        },
        orangeCrush: {
          inStock: false,
          amtLeft: 10
        },
        rootBeer: {
          inStock: false,
          amtLeft: 10
        }
      }
    }
  }

  render() {
    let chips = this.state.chipsInStock;
    let candy = this.state.candyInStock;
    let soda = this.state.sodaInStock;

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
          <Route exact path="/chips" render={() => <Chips chips={chips} />} />
          <Route exact path="/candy" render={() => <Candy candy={candy} />} />
          <Route exact path="/soda" render={() => <Soda soda={soda} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
