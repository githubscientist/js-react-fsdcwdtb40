import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type == 'INC') {
    return {
      count: state.count + 1
    }
  } else if (action.type == 'DEC') {
    return {
      count: state.count - 1
    }
  }
  return state;
}

const App = () => {

  const [state, setState] = useReducer(reducer, {
    count: 0
  });

  const handleIncrement = () => {
    setState({
      type: 'INC'
    });
  }

  const handleDecrement = () => {
    setState({
      type: 'DEC'
    });
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App;