import React, { Component, PropTypes } from 'react';

class Deck extends Component {
    render() {
        const { increment, decrement, deck } = this.props;
        return (
          <div className="container">
                <p>Clicked: <span className="badge">{deck}</span> times</p>
                <div className="btn-group">
                    <button className="btn btn-default" onClick={increment}>+shuffle+</button>
                    <button className="btn btn-default" onClick={decrement}>-deal-</button>
                </div>
              </div>
        );
    }
}

Deck.propTypes = {
    increment     : PropTypes.func.isRequired,
    decrement     : PropTypes.func.isRequired,
    deck       : PropTypes.number.isRequired
};

export default Deck;
