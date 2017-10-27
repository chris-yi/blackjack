import React, { Component } from 'react';
import Dealer from "./components/Dealer";
import Player1 from "./components/Player1";
import {connect} from "react-redux";
import {shuffle, dealCard} from "./ducks/reducer";
import swal from "sweetalert";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.shuffle = this.shuffle.bind(this);
    this.deal = this.deal.bind(this);
  }


  shuffle() {
    this.props.shuffle()
  }

  deal() {
    this.props.dealCard('player1');
    this.props.dealCard('dealer');
    this.props.dealCard('player1');
    this.props.dealCard('dealer');
  }

  render() {
    console.log(this.props.deck)
    let cardsDisplay = this.props.deck.map(card => {
      return card.card;
    })
    return (
      <div className="App">
        <h1>YI-HA CASINO</h1>
        <button onClick={this.shuffle}>Shuffle</button>
        <button onClick={this.deal}>Deal</button>
        <Dealer/>
        <Player1/>
        <div>{cardsDisplay}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    deck: state.deck
  }
}

export default connect(mapStateToProps, {shuffle, dealCard})(App);
