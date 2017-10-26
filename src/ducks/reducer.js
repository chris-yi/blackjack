import _ from "underscore";

const singleDeck = [
  "AS",
  "AC",
  "AD",
  "AH",
  "2S",
  "2C",
  "2D",
  "2H",
  "3S",
  "3C",
  "3D",
  "3H",
  "4S",
  "4C",
  "4D",
  "4H",
  "5S",
  "5C",
  "5D",
  "5H",
  "6S",
  "6C",
  "6D",
  "6H",
  "7S",
  "7C",
  "7D",
  "7H",
  "8S",
  "8C",
  "8D",
  "8H",
  "9S",
  "9C",
  "9D",
  "9H",
  "10S",
  "10C",
  "10D",
  "10H",
  "JS",
  "JC",
  "JD",
  "JH",
  "QS",
  "QC",
  "QD",
  "QH",
  "KS",
  "KC",
  "KD",
  "KH"
];

const initialState = {
  deck: [...singleDeck],
  dealerHand: [],
  player1Hand: []
};

const SHUFFLE = "SHUFFLE";
const CARD_TO_DEALER = "CARD_TO_DEALER";
const CARD_TO_PLAYER_1 = "CARD_TO_PLAYER_1"

///// Underscore function to shuffle the deck /////
export function shuffle() {
  return {
    type: SHUFFLE,
    payload: singleDeck
  };
}

///// Function for initial deal /////
export function dealCard(player) {
    if(player === "player1") {
        return {
            type: CARD_TO_PLAYER_1,
            payload: singleDeck[0]
        }
    } else if (player === "dealer") {
        return {
            type: CARD_TO_DEALER,
            payload: singleDeck[0]
        }
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE:
      return Object.assign({}, state, { deck: _.shuffle(action.payload) });

    case CARD_TO_PLAYER_1:
        let player1Card = state.deck.shift();
        return Object.assign({}, state, { deck: state.deck}, {player1Hand: [...state.player1Hand, player1Card]})

    case CARD_TO_DEALER:
        let dealerCard = state.deck.shift();
        return Object.assign({}, state, { deck: state.deck}, {dealerHand: [...state.dealerHand, dealerCard]})

    default:
      return state;
  }
}
