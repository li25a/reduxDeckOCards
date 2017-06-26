import React, { Component, PropTypes } from 'react';

class Deck extends Component {
    render() {
        const { increment, deal, deck } = this.props;
        return (
          <div className="container">
                <p>Clicked: <span className="badge">{" x "}</span> times</p>
                <div className="btn-group">
                    <button className="btn btn-default" onClick={increment}>+shuffle+</button>
                    <button className="btn btn-default" onClick={deal}>-deal-</button>
                </div>
              </div>
        );
    }
}

Deck.propTypes = {
  increment     : PropTypes.func.isRequired,
  //shuffle     : PropTypes.func.isRequired,
    deal     : PropTypes.func.isRequired,
    deck       : PropTypes.array.isRequired
};

export default Deck;
