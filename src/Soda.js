import React, { Component } from "react";
import CocaCola from "./CocaCola.jpeg";

class Soda extends Component {
  render() {
    let sodas = Object.values(this.props.soda);
    
    return (
      < div className="card-group" >
        {sodas.map(soda => {
          let button = <button className="button" id={soda.name} onClick={this.props.buy}>Buy</button>;
          let outOfStock = <span className="out-of-stock">Out of stock!</span>;
          let canBuy = soda.inStock ? button : outOfStock;
          
          return (
            <div className="card">
              <img src={soda.name.split(' ').join('')} className="card-img-top" alt={soda.name} />
              <div className="card-body">
                <h5 className="card-title">{soda.name}</h5>
                <p className="card-text">{soda.price}</p>
                {canBuy}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Soda;
