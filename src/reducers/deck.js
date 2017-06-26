import * as Type from 'constants/action-types';
import _ from 'lodash';

const initialState ={
  deckSet : []
} ;

//export function setInitialState=()=>(
// var deckSet = [];
//   const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
//   const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
//
//   _.each(suits, function(suit){
//     _.each (ranks, function(rank){
//       deckSet.push({
//         suit: suit,
//         value: rank
//       })
//     });
//   });
//   console.log('deckSet: ', deckSet);
//return deckSet =1;
//state= deckSet;

//)

export default function deck(state = initialState, action){
  // let deckSet = [];
console.log('state beginning: ',state);
  switch (action.type){
    case Type.SHUFFLE:
    console.log ('shuffle action');
    return state + 1;
    case Type.DEAL:
    console.log ('shuffle action');
    return state - 1;
    default:
      if (state.deckSet.length == 0){
        console.log ("enter if");
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let setInit = [];
        _.each(suits, function(suit){
          _.each (ranks, function(rank){
            setInit.push({
              suit: suit,
              value: rank
            });
          });
        });
        state.deckSet = setInit;
        //return deckSet =1;
        console.log("set deck", state);
      }
      //   _.each(suits, function(suit){
      //     _.each (ranks, function(rank){
      //       deckSet.push({
      //         suit: suit,
      //         value: rank
      //       })
      //     });
      //   });
       console.log('state: ',state);
       console.log('state length: ',state.length);
      console.log('state.deckSet: ',state.deckSet);
      console.log('state.deckSet.length', state.deckSet.length);
      // //  console.log('deckSet length: ', deckSet.length);
      //     state= deckSet;
      return state;
  }
}
