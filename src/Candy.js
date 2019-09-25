import React, { Component } from "react";

class Candy extends Component {
  render() {
    let candies = Object.values(this.props.candy);
    
    return (
      < div className="card-group" >
        {candies.map(candy => {
          let button = <button className="button" id={candy.name} onClick={this.props.buy}>Buy</button>;
          let outOfStock = <span className="out-of-stock">Out of stock!</span>;
          let canBuy = candy.inStock ? button : outOfStock;
          
          return (
            <div className="card">
              <img src={candy.name.split(' ').join('')} className="card-img-top" alt={candy.name} />
              <div className="card-body">
                <h5 className="card-title">{candy.name}</h5>
                <p className="card-text">{candy.price}</p>
                {canBuy}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Candy;
