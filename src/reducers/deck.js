import * as Type from 'constants/action-types';
import _ from 'lodash';

const initialState ={
  deck : [],
  dealt: []
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
      console.log ('deck action');
      state.dealt.push(state.deck.pop());
      console.log ('deckset length after deal', state.deck.length);
      console.log ('dealt', state.dealt);
      console.log (' just dealth', _.last(state.dealt));
      return state;

    default:
      if (state.deck.length == 0){
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
        state.deck = setInit;
        console.log("set deck", state);
      }
       console.log('state: ',state);
      console.log('state.deck: ',state.deck);
      console.log('state.deck.length', state.deck.length);
    return state;
  }
}
