import React, { Component } from 'react';
import Dealer from "./components/Dealer";
import Player1 from "./components/Player1";
import {connect} from "react-redux";
import {shuffle} from "./ducks/reducer";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.props.shuffle()
  }

  render() {
    return (
      <div className="App">
        <Dealer/>
        <button onClick={this.handleClick}>New Game</button>
        <Player1/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    deck: state.deck
  }
}

export default connect(mapStateToProps, {shuffle})(App);
