import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import  Modal  from 'react-modal';
import './styles.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      revealedDealtSuit: this.props.deck.dealt.suit,
      revealedDealtRank: this.props.deck.dealt.rank,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    const { dealt } = this.props;
    this.setState({ revealedDealtSuit:   this.props.deck.dealt.suit });
    this.setState({ revealedDealtRank:   this.props.deck.dealt.rank });
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

    render() {
        const { deck, deal, shuffle } = this.props;
        return (
          <div className="container">
            <div className="buttons">
              <div>
               <button className="btn btn-default" onClick={ shuffle  } >+shuffle+</button>
              </div>
              <div>
               <button className="btn btn-default" onClick={ deal  } >-deal-</button>
              </div>
              <div>
               <button className="btn btn-default" onClick={ this.openModal } >-reveal dealt card-</button>
              </div>
            </div>

           <Modal
           style={customStyles}
           isOpen={ this.state.modalIsOpen }
           onRequestClose={ this.closeModal }
           contentLabel="Example Modal"
           >
             <div> <p>{ this.state.revealedDealtSuit } </p> </div>
             <div> <p> { this.state.revealedDealtRank } </p></div>
             <button className="btn btn-default" onClick={this.closeModal}>close</button>
         </Modal>
      </div>
        );
    }
}

Deck.propTypes = {
  deal       : PropTypes.func.isRequired,
  shuffle    : PropTypes.func.isRequired,
  deck       : PropTypes.object.isRequired
};

export default Deck;
