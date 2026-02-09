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
