
# Jest
Jest is the most commonly used library for unit testing and component testing in React Native. It's the default choice in many React Native projects and works well for testing JavaScript logic, components, and reducers.

yarn add --dev jest ( Installed as dev Dependency )

    Testing Framework: Jest is primarily a testing framework developed by Facebook. It provides a complete solution for running tests, making assertions, and generating test reports.

    Features: Jest comes with a test runner, assertion library, mocking capabilities, and other utilities for testing JavaScript code, including React components. It's known for its simplicity and ease of use.

    Snapshot Testing: Jest supports snapshot testing, which allows you to capture and compare the rendered output of components. This is useful for detecting unexpected UI changes.

    Built-in Mocking: Jest provides built-in mocking features that make it easy to isolate components and functions for testing.

    Code Coverage: Jest can generate code coverage reports to help you assess the extent of your test coverage.


# Enzyme:

Enzyme is a JavaScript testing utility for React that was developed by Airbnb. It is commonly used for testing React components and their behavior. Enzyme provides a set of tools and APIs that make it easier to render, manipulate, and assert the behavior of React components during testing. It is designed to work seamlessly with popular testing frameworks like Jest, Mocha, and Chai.

npm i --save-dev enzyme enzyme-adapter-react-16

    Testing Utility: Enzyme, on the other hand, is a testing utility for React that is often used in conjunction with Jest (or other testing frameworks). It is developed by Airbnb.

    Shallow Rendering: Enzyme allows you to perform shallow rendering of React components, which means you can test a component in isolation without rendering its child components. This can be useful for unit testing.

    DOM Manipulation: Enzyme provides a set of APIs for simulating DOM events, querying the rendered component's structure, and making assertions about the component's behavior.

    Component Testing: Enzyme is well-suited for testing the behavior and structure of React components and can interact with them in a way that resembles how a user would.


# Mocha:

Mocha is a widely used JavaScript testing framework that can be used for testing both Node.js applications and web applications. It provides a flexible and extensible testing environment, making it a popular choice for test-driven development (TDD) and behavior-driven development (BDD) in the JavaScript ecosystem.

    Key features and characteristics of Mocha include:

    Test Framework Agnostic: Mocha is test framework-agnostic, which means it can work with various assertion libraries and mocking frameworks. You can use your preferred tools to write assertions and mocks, making Mocha highly adaptable to your testing needs.

    Support for Both Synchronous and Asynchronous Testing: Mocha supports testing asynchronous code through the use of callbacks, Promises, or async/await, making it suitable for testing JavaScript code that includes network requests or other asynchronous operations.

    Test Suites and Test Cases: Mocha allows you to organize your tests into test suites and individual test cases. Test suites can be nested, providing a structured way to group related tests.

    Hooks: Mocha provides hooks such as before(), after(), beforeEach(), and afterEach(), which allow you to set up and tear down test environments, making it easy to prepare for tests and clean up afterward.

    Wide Range of Reporters: Mocha comes with various built-in reporters for generating test reports, including spec, dot, and TAP. Additionally, there are third-party reporters that you can use to customize the test output.

    Browser Testing: While Mocha is often associated with testing in Node.js, it can also be used in the browser environment with the help of tools like Mocha's browser-specific test runners or test runners like Karma.

    Extensibility: Mocha is highly extensible, and you can incorporate various plugins and libraries to enhance its functionality. For example, you can use libraries like Chai for assertions, Sinon for mocking, and Supertest for API testing.

    Community Support: Mocha has a large and active community, which means you can find a wealth of resources, plugins, and community-contributed extensions to help with your testing needs.

# Testing Folder 
    Unit : This directory is for unit tests. Each component or module in your src folder should have a corresponding test file in this directory.

    Integration : This directory is for integration tests. Integration tests can test the interaction between different parts of your application, such as testing how screens and components work together.

    setupTests.js: This file is used to set up the testing environment. You can configure testing libraries and add global configurations here.

