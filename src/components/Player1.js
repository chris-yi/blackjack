import React, {Component} from "react";
import {connect} from "react-redux";
import {dealCard, dealerTurn} from "../ducks/reducer";
import swal from "sweetalert";

class Player1 extends Component {
  constructor(props) {
    super(props)

    this.hit = this.hit.bind(this)
    this.stay = this.stay.bind(this)
  }

  hit(){
    this.props.dealCard("player1")
  }

  stay(){
    if(this.props.dealerValue < 17) {
      this.props.dealerTurn(this.props.dealerValue)
    }
    console.log('passed the if on stay')
    if(this.props.dealerValue > 21) {
      swal("You Win!")
  }
  }

    render() {
      let playerCardDisplay = this.props.player1Hand.map(card => {
        return card.card;
      })
      return (
        <div className="Player1">
            <h1>Player1</h1>
            <button onClick={this.hit}>Hit</button>
            <button onClick={this.stay}>Stay</button>
            {playerCardDisplay}
        </div>
      );
    }
  }

  function mapStateToProps(state){
      return {
        deck: state.deck,
        player1Hand: state.player1Hand,
        dealerValue: state.dealerValue
      }
  }
  
  export default connect(mapStateToProps, {dealCard, dealerTurn})(Player1);