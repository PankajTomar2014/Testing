import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TestApp from './Src/Screens/App';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateNumber: 0,
    };
  }

  addTwoNumbers = (a, b,c) => {
    this.setState({stateNumber: a + b});
    return a+b;
    // return this.state.stateNumber;
  };

  render() {
    return <TestApp />;
  }
}
