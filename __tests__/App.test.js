import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { addTwoNumber } from '../Src/Constant/Functions';
import TitleText from '../Src/Components/propsTextUsingJest';
// import { TitleText } from '../Src/Components/Button';

// test command ------------------ npm test App.test.js
// update Snapshot command --------------   npm test App.test.js -- -u

// it('acceessing fun from class component', () => {
//   const myApp = renderer.create(<App/>).getInstance();
//   console.log("appClass---",myApp.addTwoNumbers(10,10));
//   expect(myApp.addTwoNumbers(10,10)).toEqual(20)
// });

// test('accessing state from class component', () => {
//   const myApp = renderer.create(<App/>).getInstance();
//   myApp.addTwoNumbers(2,2)
//   console.log("access state---",myApp.state);
//   expect(myApp.state.stateNumber).toEqual(4)
// });

// test('snapshot testing', () => {
//     const snapshot = renderer.create(<App />).toJSON();
//     console.log("snapshot----",snapshot);
//     expect(snapshot).toMatchSnapshot();
// });

// test('accessing gloabl fun testing', () => {
//   const result = addTwoNumber(2,2)
//   console.log("access fun---",result);
//   expect(result).toEqual(4)
// });

test('testing props using jest', () => {
  // props of class components can be test only with jest.
  // if we want to test props of function components, we need to use enzyme
  const childComponent = renderer.create(<TitleText msg={'pankaj'}/>).getInstance();
  console.log("testing props---",childComponent.props.msg);
  expect(childComponent.props.msg).toEqual('pankaj');
});


