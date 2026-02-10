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
