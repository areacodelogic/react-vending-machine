import React, { Component } from "react";

class Chips extends Component {
  render() {
    let chips = Object.values(this.props.chips);
    
    return (
      < div className="card-group" >
        {chips.map(chip => {
          let button = <button className="button" id={chip.name} onClick={this.props.buy}>Buy</button>;
          let outOfStock = <span className="out-of-stock">Out of stock!</span>;
          let canBuy = chip.inStock ? button : outOfStock;
          
          return (
            <div className="card">
              <img src={chip.name.split(' ').join('')} className="card-img-top" alt={chip.name} />
              <div className="card-body">
                <h5 className="card-title">{chip.name}</h5>
                <p className="card-text">{chip.price}</p>
                {canBuy}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Chips;
