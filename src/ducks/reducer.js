import _ from "underscore";
import swal from "sweetalert";

const singleDeck = [
    {
        card: "AS",
        value: 11,
        img: ""
        
      },
      {
        card: "AC",
        value: 11,
        img: ""
        
      },
      {
        card: "AD",
        value: 11,
        img: "",
        
      },
      {
        card: "AH",
        value: 11,
        img: "",
        
      },
      {
        card: "2S",
        value: 2,
        img: "",
        
      },
      {
        card: "2C",
        value: 2,
        img: "",
        
      },
      {
        card: "2D",
        value: 2,
        img: "",
        
      },
      {
        card: "2H",
        value: 2,
        img: "",
        
      },
      {
        card: "3S",
        value: 3,
        img: "",
        
      },
      {
        card: "3C",
        value: 3,
        img: "",
        
      },
      {
        card: "3D",
        value: 3,
        img: "",
        
      },
      {
        card: "3H",
        value: 3,
        img: "",
        
      },
      {
        card: "4S",
        value: 4,
        img: "",
        
      },
      {
        card: "4C",
        value: 4,
        img: "",
        
      },
      {
        card: "4D",
        value: 4,
        img: "",
        
      },
      {
        card: "4H",
        value: 4,
        img: "",
        
      },
      {
        card: "5S",
        value: 5,
        img: "",
        
      },
      {
        card: "5C",
        value: 5,
        img: "",
        
      },
      {
        card: "5D",
        value: 5,
        img: "",
        
      },
      {
        card: "5H",
        value: 5,
        img: "",
        
      },
      {
        card: "6S",
        value: 6,
        img: "",
        
      },
      {
        card: "6C",
        value: 6,
        img: "",
        
      },
      {
        card: "6D",
        value: 6,
        img: "",
        
      },
      {
        card: "6H",
        value: 6,
        img: "",
        
      },
      {
        card: "7S",
        value: 7,
        img: "",
        
      },
      {
        card: "7C",
        value: 7,
        img: "",
        
      },
      {
        card: "7D",
        value: 7,
        img: "",
        
      },
      {
        card: "7H",
        value: 7,
        img: "",
        
      },
      {
        card: "8S",
        value: 8,
        img: "",
        
      },
      {
        card: "8C",
        value: 8,
        img: "",
        
      },
      {
        card: "8D",
        value: 8,
        img: "",
        
      },
      {
        card: "8H",
        value: 8,
        img: "",
        
      },
      {
        card: "9S",
        value: 9,
        img: "",
        
      },
      {
        card: "9C",
        value: 9,
        img: "",
        
      },
      {
        card: "9D",
        value: 9,
        img: "",
        
      },
      {
        card: "9H",
        value: 9,
        img: "",
        
      },
      {
        card: "10S",
        value: 10,
        img: "",
        
      },
      {
        card: "10C",
        value: 10,
        img: "",
        
      },
      {
        card: "10D",
        value: 10,
        img: "",
        
      },
      {
        card: "10H",
        value: 10,
        img: "",
        
      },
      {
        card: "JS",
        value: 10,
        img: "",
        
      },
      {
        card: "JC",
        value: 10,
        img: "",
        
      },
      {
        card: "JD",
        value: 10,
        img: "",
        
      },
      {
        card: "JH",
        value: 10,
        img: "",
        
      },
      {
        card: "QS",
        value: 10,
        img: "",
        
      },
      {
        card: "QC",
        value: 10,
        img: "",
        
      },
      {
        card: "QD",
        value: 10,
        img: "",
        
      },
      {
        card: "QH",
        value: 10,
        img: "",
        
      },
      {
        card: "KS",
        value: 10,
        img: "",
        
      },
      {
        card: "KC",
        value: 10,
        img: "",
        
      },
      {
        card: "KD",
        value: 10,
        img: "",
        
      },
      {
        card: "KH",
        value: 10,
        img: "",
        
      },
      
];

const initialState = {
  deck: [...singleDeck],
  dealerHand: [],
  dealerValue: 0,
  player1Hand: [],
  player1Value: 0
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
            payload: ''
        }
    } else if (player === "dealer") {
        return {
            type: CARD_TO_DEALER,
            payload: ''
        }
    }
}

function checkIfBust(currentValue, newCardValue){
    if(currentValue+newCardValue > 21){
        swal('BUST')
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE:
      return Object.assign({}, state, { deck: _.shuffle(action.payload) });

    case CARD_TO_PLAYER_1:
        let player1Card = state.deck.shift();
        checkIfBust(state.player1Value, player1Card.value)
        return Object.assign({}, state, { deck: state.deck}, {player1Hand: [...state.player1Hand, player1Card]}, {player1Value: state.player1Value+player1Card.value})

    case CARD_TO_DEALER:
        let dealerCard = state.deck.shift();
        return Object.assign({}, state, { deck: state.deck}, {dealerHand: [...state.dealerHand, dealerCard]})

    default:
      return state;
  }
}
