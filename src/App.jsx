import { useReducer, useState } from "react";

const reducer = (state, action) => {
  return {
    count: state.count + 1
  };
}

const App = () => {

  const [state, setState] = useReducer(reducer, {
    count: 0
  });

  const handleIncrement = () => {
    setState();
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App;