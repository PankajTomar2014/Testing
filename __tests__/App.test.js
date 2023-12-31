import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { addTwoNumber } from '../Src/Constant/Functions';
import TitleText from '../Src/Components/propsTextUsingJest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { GET_API_URL,getAPI,POST_API_URL,postAPI} from './api';
import { render, fireEvent } from '@testing-library/react-native';
import {StackNavigation,BottomTabNavigation} from '../Src/Navigation/Naviagtor';
// import { TitleText } from '../Src/Components/Button';

// test command ------------------ npm test App.test.js
// test command ------------------ npm test (script added in package.json)
// update Snapshot command --------------   npm test App.test.js -- -u
// -----------------------------------------------------------------
// it('acceessing fun from class component', () => {
//   const myApp = renderer.create(<App/>).getInstance();
//   console.log("appClass---",myApp.addTwoNumbers(10,10));
//   expect(myApp.addTwoNumbers(10,10)).toEqual(20)
// });
// -----------------------------------------------------------------
// test('accessing state from class component', () => {
//   const myApp = renderer.create(<App/>).getInstance();
//   myApp.addTwoNumbers(2,2)
//   console.log("access state---",myApp.state);
//   expect(myApp.state.stateNumber).toEqual(4)
// });
// -----------------------------------------------------------------
// test('snapshot testing', () => {
//     const snapshot = renderer.create(<App />).toJSON();
//     console.log("snapshot----",snapshot);
//     expect(snapshot).toMatchSnapshot();
// });
// -----------------------------------------------------------------
// test('accessing gloabl fun testing', () => {
//   const result = addTwoNumber(2,2)
//   console.log("access fun---",result);
//   expect(result).toEqual(4)
// });
// -----------------------------------------------------------------
// test('testing props using jest', () => {
//   // props of class components can be test only with jest.
//   // if we want to test props of function components, we need to use enzyme
//   const childComponent = renderer.create(<TitleText msg={'pankaj'}/>).getInstance();
//   console.log("testing props---",childComponent.props.msg);
//   expect(childComponent.props.msg).toEqual('pankaj');
// });

// -----------------------------------------------------------------
// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   data['three'] = null;
//   expect(data).toEqual({one: 1, two: 2, three:null});
// });

// -----------------------------------------------------------------
// test('two plus two is four', () => {
//   // The simplest way to test a value is with exact equality.
//   expect(2 + 2).toBe(4);
// });

// -----------------------------------------------------------------
// test('adding positive numbers is not zero', () => {
//   // You can also test for the opposite of a matcher using "not":
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// -----------------------------------------------------------------
// In tests, you sometimes need to distinguish between undefined, null, and false, 
// but you sometimes do not want to treat these differently. 
// Jest contains helpers that let you be explicit about what you want.

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });
// -----------------------------------------------------------------
// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });
// -----------------------------------------------------------------
// test('two plus two', () => {
//   // Most ways of comparing numbers have matcher equivalents.
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);
// -----------------------------------------------------------------
//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });
// -----------------------------------------------------------------

// test('adding floating point numbers', () => {
//   // For floating point equality, use toBeCloseTo instead of toEqual, 
//   // because you don't want a test to depend on a tiny rounding error.
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);          // This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });

// -----------------------------------------------------------------

// Strings
// You can check strings against regular expressions with toMatch:
// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });
// -----------------------------------------------------------------
// Arrays and iterables
// You can check if an array or iterable contains a particular item using toContain:
// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('milk');
//   expect(new Set(shoppingList)).toContain('milk');
// });

// -----------------------------------------------------------------
// Exceptions
// If you want to test whether a particular function throws an error when it's called, use "toThrow".
// function compileAndroidCode() {
//   throw new Error('you are using the wrong JDK!');
// }

// test('compiling android goes as expected', () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);

//   // Or you can match an exact error message using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });
// NOTE: The function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.


// -----------------------------------------------------------------
// describe('describe outer', () => {
//   console.log('describe outer-a');

//   describe('describe inner 1', () => {
//     console.log('describe inner 1');

//     test('test 1', () => console.log('test 1'));
//   });

//   console.log('describe outer-b');

//   test('test 2', () => console.log('test 2'));

//   describe('describe inner 2', () => {
//     console.log('describe inner 2');

//     test('test 3', () => console.log('test 3'));
//   });

//   console.log('describe outer-c');
// });

// // describe outer-a
// // describe inner 1
// // describe outer-b
// // describe inner 2
// // describe outer-c
// // test 1
// // test 2
// // test 3
// --------------------------API testing---------------------------------------

// describe('API testing', () => {
//   let mock;

//   // This is a Jest hook function that runs before each test case within the test suite. 
//   // In this beforeEach block, you are creating a new axios-mock-adapter instance and assigning it to the mock variable. 
//   beforeEach(() => {
//     mock = new MockAdapter(axios);    
//   });

//   // This is another Jest hook function that runs after each test case within the test suite. 
//   // In this afterEach block, you are calling the restore method on the mock instance. 
//   // The restore method is provided by axios-mock-adapter and is used to clean up and reset the Axios mock adapter to its original state.

//   afterEach(() => {
//     mock.restore();
//   });

//   test('testing GET Api', async () => {
//     const responseData = [{
//         "id": 2,
//         "employee_name": "Pankaj Tomar",
//         "employee_salary": 2000,
//         "employee_age": 63,
//         "profile_image": ""
//     }];
//     mock.onGet(GET_API_URL).reply(200, responseData);
//     const data = await getAPI();
//     expect(data).toEqual(responseData);
//   });

//   test('testing POST Api', async () => {
//     const requestData = {
//               "title": "Pankaj Tomar",
//               "body": "Pankaj Tomar is the best Developer",
//           }
//     const responseData = { message: 'Data posted successfully' };
//     mock.onPost(POST_API_URL, requestData).reply(200, responseData);
//     const data = await postAPI(requestData);
//     expect(data).toEqual(responseData);
//   });

//   test('testing POST api error', async () => {     
//     const errorResponse = { message: 'Error occurred' };
//     mock.onPost(POST_API_URL).reply(500, errorResponse);
//     try {
//       await postAPI();
//     } catch (error) {
//       expect(error.message).toEqual('Request failed with status code 500');
//     }
//   });
// });


// -----------------Navigation Testing------------------------------------------------

describe('Stack Navigation', () => {
  it('should navigate to Details screen', () => {
    const { getByText } = render(<StackNavigation />);
    
    const detailsButton = getByText('Go to Details');
    fireEvent.press(detailsButton);

    const detailsScreenText = getByText('Details Screen');
    expect(detailsScreenText).toBeTruthy();
  });
});

describe('Bottom Tab Navigation', () => {
  it('should navigate to Settings tab', () => {
    const { getByText } = render(<BottomTabNavigation />);
    
    const settingsTab = getByText('Settings');
    fireEvent.press(settingsTab);

    const settingsScreenText = getByText('Settings Screen');
    expect(settingsScreenText).toBeTruthy();
  });
});
// -----------------------------------------------------------------
