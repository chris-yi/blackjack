import React, {Component} from "react";
import {connect} from "react-redux";
import {dealCard} from "../ducks/reducer";

class Player1 extends Component {
  constructor(props) {
    super(props)

    this.hit = this.hit.bind(this)
  }

  hit(){
    this.props.dealCard("player1")
  }

    render() {
      let playerCardDisplay = this.props.player1Hand.map(card => {
        return card.card;
      })
      return (
        <div className="Player1">
            <h1>Player1</h1>
            <button onClick={this.hit}>Hit</button>
            {playerCardDisplay}
        </div>
      );
    }
  }

  function mapStateToProps(state){
      return {
        deck: state.deck,
        player1Hand: state.player1Hand
      }
  }
  
  export default connect(mapStateToProps, {dealCard})(Player1);