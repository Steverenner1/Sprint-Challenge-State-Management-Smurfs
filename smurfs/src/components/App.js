import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';

import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { Smurfs } from './Smurfs';



class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    if(this.props.fetching){
      return <h3>Fetching Smurfs</h3>
    }
    return (
      <div className="App">
        <h1>SMURFS!!!</h1>
        <SmurfForm />
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.fetching,
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
