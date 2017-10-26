import React, {Component} from "react";
import {connect} from "react-redux";


class Dealer extends Component {
    render() {
      return (
        <div className="Dealer">
          <h1>Dealer</h1>
          <div>{this.props.deck}</div>
        </div>
      );
    }
  }

function mapStateToProps(state){
    return {
      deck: state.deck
    }
}

export default connect(mapStateToProps, {})(Dealer);
  
