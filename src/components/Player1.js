import React, {Component} from "react";
import {connect} from "react-redux";

class Player1 extends Component {
    render() {
      return (
        <div className="Player1">
            <h1>Player1</h1>
        </div>
      );
    }
  }

  function mapStateToProps(state){
      return {
        deck: state.deck
      }
  }
  
  export default connect(mapStateToProps, {})(Player1);