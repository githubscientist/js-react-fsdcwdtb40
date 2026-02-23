import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return {
        count: state.count + 1
      }
    case 'DEC':
      return {
        count: state.count - 1
      }
  }

  return state;
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  const handleIncrement = () => {
    dispatch({
      type: 'INC'
    });
  }

  const handleDecrement = () => {
    dispatch({
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