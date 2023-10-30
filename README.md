
# [Jest](https://jestjs.io/docs/getting-started)
Jest is the most commonly used library for unit testing and component testing in React Native. It's the default choice in many React Native projects and works well for testing JavaScript logic, components, and reducers.

`yarn add --dev jest ( Installed as dev Dependency )`

`yarn jest --clearCache`
        or
`npx jest --clearCache`

  ###Clear the Jest Cache


    Testing Framework: Jest is primarily a testing framework developed by Facebook. It provides a complete solution for running tests, making assertions, and generating test reports.

    Features: Jest comes with a test runner, assertion library, mocking capabilities, and other utilities for testing JavaScript code, including React components. It's known for its simplicity and ease of use.

    Snapshot Testing: Jest supports snapshot testing, which allows you to capture and compare the rendered output of components. This is useful for detecting unexpected UI changes.

    Built-in Mocking: Jest provides built-in mocking features that make it easy to isolate components and functions for testing.

    Code Coverage: Jest can generate code coverage reports to help you assess the extent of your test coverage.


# [Enzyme](https://www.npmjs.com/package/enzyme)

Enzyme is a JavaScript testing utility for React that was developed by Airbnb. It is commonly used for testing React components and their behavior. Enzyme provides a set of tools and APIs that make it easier to render, manipulate, and assert the behavior of React components during testing. It is designed to work seamlessly with popular testing frameworks like Jest, Mocha, and Chai.

`npm i --save-dev enzyme enzyme-adapter-react-16`

    Testing Utility: Enzyme, on the other hand, is a testing utility for React that is often used in conjunction with Jest (or other testing frameworks). It is developed by Airbnb.

    Shallow Rendering: Enzyme allows you to perform shallow rendering of React components, which means you can test a component in isolation without rendering its child components. This can be useful for unit testing.

    DOM Manipulation: Enzyme provides a set of APIs for simulating DOM events, querying the rendered component's structure, and making assertions about the component's behavior.

    Component Testing: Enzyme is well-suited for testing the behavior and structure of React components and can interact with them in a way that resembles how a user would.


# [Mocha](https://mochajs.org/#installation)

Mocha is a widely used JavaScript testing framework that can be used for testing both Node.js applications and web applications. It provides a flexible and extensible testing environment, making it a popular choice for test-driven development (TDD) and behavior-driven development (BDD) in the JavaScript ecosystem.

`npm install --save-dev mocha`
    
    Key features and characteristics of Mocha include:

    Test Framework Agnostic: Mocha is test framework-agnostic, which means it can work with various assertion libraries and mocking frameworks. You can use your preferred tools to write assertions and mocks, making Mocha highly adaptable to your testing needs.

    Support for Both Synchronous and Asynchronous Testing: Mocha supports testing asynchronous code through the use of callbacks, Promises, or async/await, making it suitable for testing JavaScript code that includes network requests or other asynchronous operations.

    Test Suites and Test Cases: Mocha allows you to organize your tests into test suites and individual test cases. Test suites can be nested, providing a structured way to group related tests.

    Hooks: Mocha provides hooks such as before(), after(), beforeEach(), and afterEach(), which allow you to set up and tear down test environments, making it easy to prepare for tests and clean up afterward.

    Wide Range of Reporters: Mocha comes with various built-in reporters for generating test reports, including spec, dot, and TAP. Additionally, there are third-party reporters that you can use to customize the test output.

    Browser Testing: While Mocha is often associated with testing in Node.js, it can also be used in the browser environment with the help of tools like Mocha's browser-specific test runners or test runners like Karma.

    Extensibility: Mocha is highly extensible, and you can incorporate various plugins and libraries to enhance its functionality. For example, you can use libraries like Chai for assertions, Sinon for mocking, and Supertest for API testing.

    Community Support: Mocha has a large and active community, which means you can find a wealth of resources, plugins, and community-contributed extensions to help with your testing needs.


# Jest Configuration

In "jest.config.js" file

module.exports = {  
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};



# Testing Folder 
    Unit : This directory is for unit tests. Each component or module in your src folder should have a corresponding test file in this directory.

    Integration : This directory is for integration tests. Integration tests can test the interaction between different parts of your application, such as testing how screens and components work together.

    setupTests.js: This file is used to set up the testing environment. You can configure testing libraries and add global configurations here.

# "describe":
"describe" is used to create a test suite, which is a way to group related test cases together. Test suites are used to organize and structure your tests, making it easier to manage and understand the test suite's purpose.
It is typically used to define a block of related tests or to group tests that are testing a specific component, module, or feature.
The "describe" block can contain other "describe" blocks, creating a hierarchical structure for organizing your tests.

#### Example
```javascript
describe('Math Operations', () => {
  // This is a test suite for math operations.
  // It can contain multiple related test cases.
  // ...
});
```

# "test":
"test" is used to define an individual test case within a test suite. It specifies a specific behavior that you want to test and provides a function that contains the test code.
Each "test" represents one particular assertion or expectation you want to make about your code. If the assertion within a test case fails, it indicates a problem in your code.
"test" is typically used within a "describe" block to define multiple test cases within a suite.

#### Example
```javascript
describe('Math Operations', () => {
  test('Addition', () => {
    // This is a specific test case to check addition functionality.
    // ...
  });

  test('Subtraction', () => {
    // This is another test case to check subtraction functionality.
    // ...
  });
});
```

# Truthiness
    In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsy matches anything that an if statement treats as false

  ## For example:

```javascript
    test('null', () => {
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
    });

    test('zero', () => {
      const z = 0;
      expect(z).not.toBeNull();
      expect(z).toBeDefined();
      expect(z).not.toBeUndefined();
      expect(z).not.toBeTruthy();
      expect(z).toBeFalsy();
    });
```

# Order of Execution

 Jest executes all describe handlers in a test file before it executes any of the actual tests. This is another reason to do setup and teardown inside before* and after* handlers rather than inside the describe blocks. Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on.

 #### Consider the following illustrative test file and output:
```javascript
describe('describe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test 3', () => console.log('test 3'));
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3
```

