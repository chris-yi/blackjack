import _ from "underscore"

const singleDeck = ["AS", "AC", "AD", "AH","2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "10S", "10C", "10D", "10H", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH"];


const initialState = {
    deck: [...singleDeck]
}

const SHUFFLE = "SHUFFLE"


///// Underscore function to shuffle the deck /////

export function shuffle(){
    return {
    type: SHUFFLE,
    payload: singleDeck
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SHUFFLE:
            return Object.assign({}, state, {deck: _.shuffle(action.payload)})
        default:
        return state;
    }
}