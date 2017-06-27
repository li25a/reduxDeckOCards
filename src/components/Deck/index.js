import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import  Modal  from 'react-modal';

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
        revealedDealt: {
          suit: " ",
          value: " "
        }
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        const { dealt } = this.props;
          console.log ("deal in openModal", dealt, "this.props", this.props, "state", this.state);
      this.setState({ revealedDealt: dealt })
      console.log ("revealedDealt", this.state.revealedDealt);
      this.setState({modalIsOpen: true});
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
                 <p>Clicked: <span className="badge">{" x "}</span> times</p>
                 <div className="btn-group">
                     <button className="btn btn-default" onClick={ shuffle }>+shuffle+</button>
                     <button className="btn btn-default" onClick={ deal  }>-deal-</button>
                     <button className="btn btn-default" onClick={ this.openModal }>-reveal dealt cardl-</button>
                 </div>

                 <Modal
                 isOpen={this.state.modalIsOpen}
                 onAfterOpen={this.afterOpenModal}
                 onRequestClose={this.closeModal}
                  style={customStyles}
                 contentLabel="Example Modal"
               >
                   <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                   <button onClick={this.closeModal}>close</button>

                   <div>{ dealt }</div>
               </Modal>
            </div>


        );
    }
}

Deck.propTypes = {
  deal       : PropTypes.func.isRequired,
  //dealt      : PropTypes.object.isRequired,
  shuffle    : PropTypes.func.isRequired,
  deck       : PropTypes.array.isRequired
};

export default Deck;

// import React, { Component, PropTypes } from 'react';
//
// class Deck extends Component {
//     render() {
//         const { shuffle, deal, deck } = this.props;
//         return (
//           <div className="container">
//                 <p>Clicked: <span className="badge">{" x "}</span> times</p>
//                 <div className="btn-group">
//                     <button className="btn btn-default" onClick={shuffle}>+shuffle+</button>
//                     <button className="btn btn-default" onClick={deal}>-deal-</button>
//                 </div>
//               </div>
//         );
//     }
// }
//
// Deck.propTypes = {
//   increment     : PropTypes.func.isRequired,
//   //shuffle     : PropTypes.func.isRequired,
//     deal     : PropTypes.func.isRequired,
//     deck       : PropTypes.array.isRequired
// };
//
// export default Deck;
