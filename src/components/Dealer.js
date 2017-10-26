import React, {Component} from "react";
import {connect} from "react-redux";
import {dealCard} from "../ducks/reducer";


class Dealer extends Component {

    render() {
      return (
        <div className="Dealer">
          <h1>Dealer</h1>
          {this.props.dealerHand}
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
  
