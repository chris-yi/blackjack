import React, {Component} from "react";
import {connect} from "react-redux";
import {dealCard} from "../ducks/reducer";
import swal from "sweetalert";


class Dealer extends Component {
    render() {
      let dealerCardDisplay = this.props.dealerHand.map(card => {
        return card.card;
      })
      return (
        <div className="Dealer">
          <h1>Dealer</h1>
          {dealerCardDisplay}
        </div>
      );
    }
  }

function mapStateToProps(state){
    return {
      deck: state.deck,
      dealerHand: state.dealerHand
    }
}

export default connect(mapStateToProps, {dealCard})(Dealer);
  
