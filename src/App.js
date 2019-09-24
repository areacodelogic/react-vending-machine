import React, {Component} from "react";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import Navbar from "./Navbar";

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";

class App extends Component {

  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/candy" render={() => <Candy />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
