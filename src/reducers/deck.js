import * as Type from 'constants/action-types';
import _ from 'lodash';

const initialState ={
  deck : [],
  dealtCards: [],
  dealt:{}
} ;


export default function deck(state = initialState, action){
  switch (action.type){
    case Type.SHUFFLE:
      for (var i = state.deck.length-1; i >0 ; i--){
        var rand = Math.floor (Math.random() * (i+1));
        var temp = state.deck[i];
        state.deck[i] = state.deck[rand];
        state.deck[rand] = temp;
      }
      console.log ('shuffled', state.deck);
      return state;

    case Type.DEAL:
      if (state.deck.length > 0){
        state.dealtCards.push(state.deck.pop());
        console.log ('deck length after deal', state.deck.length);
        console.log ('dealt', state.dealtCards);
        state.dealt =  _.last(state.dealtCards);
        console.log (' just dealt', state.dealt);
      }
        console.log (' just dealt2', state.dealt);
        return state;

    default:
      if (state.deck.length == 0){
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
        console.log("state", state);
      }
    return state;
  }
}
