import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import  Modal  from 'react-modal';
//import { styles } from './styles.scss';
import './styles.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      revealedSuit: this.props.deck.dealt.suit,
      revealedRank: this.props.deck.dealt.value,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    const { dealt } = this.props;
    //console.log ("deal in openModal", dealt, "this.props", this.props, "state", this.state);
    this.setState({ revealedDealtSuit:   this.props.deck.dealt.suit });
    this.setState({ revealedDealtRank:   this.props.deck.dealt.value })
    console.log ("revealedDealt", this.state.revealedDealtSuit);
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

    render() {
      console.log("this.props", this.props);
        const { deck, deal, dealt, shuffle } = this.props;
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
                 onAfterOpen={ this.afterOpenModal }
                 onRequestClose={ this.closeModal }
                 contentLabel="Example Modal"
               >
                   <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                   <div> { this.state.revealedDealtSuit } </div>
                   <div> { this.state.revealedDealtValue } </div>
                   <button onClick={this.closeModal}>close</button>

               </Modal>
            </div>


        );
    }
}

Deck.propTypes = {
  deal    : PropTypes.func.isRequired,
  shuffle    : PropTypes.func.isRequired,
  deck       : PropTypes.object.isRequired
};

export default Deck;
