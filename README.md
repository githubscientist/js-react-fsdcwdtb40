# Passing data from child to parent

- Create a function in the parent component that will receive the data from the child component as an argument.
- Pass this function as a prop to the child component.
- In the child component, call the function passed as a prop and pass the data you want to send to the parent component as an argument.

# Props Drilling

- Props drilling is the process of passing data from a parent component to a child component through multiple levels of components.

App
├── ParentComponent
│ ├── ChildComponent1
│ | └── ChildComponent2
| | | └── ChildComponent3

App Component: parent who has the data and wants to pass it down to ChildComponent3.

### Checklist

1. Create a react app using vite with template as javascript or typescript.
2. Project Structure understanding.
3. Clean up the default files and create the first component.
4. Creating multiple components.
5. Moving the components to its own file.
6. Using data in a component.
7. Passing data from parent to child using props.
8. Passing data from child to parent using callback functions.
9. Props drilling - passing data through multiple levels of components.

### useState Hook

- React components can be created as a functional component or a class component.
- Class components are created using ES6 classes and functional components are created using JavaScript functions.
- Class components have a state and lifecycle methods (by default).
- Functional components do not have a state and lifecycle methods (by default).
- which component is better?
  - Functional components are generally preferred over class components:
    - They are simpler and easier to read.
    - They have less boilerplate code.
    - They are optimized for performance than class components.
  - Functional components does not have lifecycle methods or state, even though they are considered to give better performance compared to class components.
  - React introduced hooks in version 16.8 (year 2019) to allow functional components to have state and lifecycle methods, which made them more powerful and versatile.
  - With the introduction of hooks, functional components can now do everything that class components can do, and they are generally recommended for new React development.

- useState is a hook that allows you to add state to functional components.
- hook: a special function that allows you to "hook into" React features, such as state and lifecycle methods, from functional components.
- state: a way to store and manage data in a component that can change over time.

### Uncontrolled inputs vs Controlled inputs

- Uncontrolled inputs are the form elements where we do not use React state to manage the value of the input.

- Controlled inputs are the form elements where we use React state to manage the value of the input.

### useRef Hook

- We can use useRef in two ways:
  - To access a DOM element directly.
  - To store a mutable value that does not cause a re-render when updated.

### useState hook

- state management hook that allows you to add state to functional components.

### useReducer hook

- state management hook that allows you to manage complex state logic in functional components.

### useCallback and useMemo hooks

- useCallback: a hook which is used to memoize a function, so that it is only re-created when its dependencies change.

- useMemo: a hook which is used to memoize a value, so that it is only re-computed when its dependencies change.

- Without useMemo, the useCallback function is not really useful.

### React Router

- In React, we are so far only working with a single page, but in real world applications, we often need to have multiple pages and navigate between them. This is where React Router comes in.
- React Router is a library that allows you to handle routing in your React applications. It provides a way to navigate between different components and pages in your application.

Steps:

1. Install React Router: `npm install react-router@latest`

### Async Redux Thunk

- Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This function can be used to perform asynchronous operations, such as fetching data from an API, before dispatching an action to the store.

### Synchronous functions vs Asynchronous functions

Synchronous functions are functions that execute in a sequential manner, meaning that the next line of code will not execute until the current line of code has finished executing.

Asynchronous functions, on the other hand, allow for non-blocking execution, meaning that the next line of code can execute while the current line of code is still running. This is typically achieved using callbacks, promises, or async/await syntax in JavaScript.

### Prompt Engineering

Topics:

- Writing Effective Prompts
- Output Control Techniques
- Context Handling in Prompts
- Role-based Prompt Design

useRef hook:

- We can use the useRef for two purposes:
  - To access a DOM element directly.
  - To store a mutable value that does not cause a re-render when updated. But the value will persist across renders.

useMemo hook:

- useMemo is a hook that allows you to memoize a value, so that it is only re-computed when its dependencies change. This can help improve performance by avoiding unnecessary calculations on every render.

Higher Order Components (HOC):

- A higher-order component (HOC) is a function that takes a component and returns a new component. HOCs are used to reuse component logic and can be used to add additional functionality to a component without modifying the original component.
- This will not render the original component, but will return a new component that wraps the original component and adds additional functionality to it.

Higher Order Functions (HOF):

- A higher-order function (HOF) is a function that takes one or more functions as arguments and/or returns a function as its result.

Callback Functions:

- A callback function is a function that is passed as an argument to another function.
