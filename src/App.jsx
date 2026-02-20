import { useReducer } from "react";
// create a reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      state = state + 1;
      break;
  }
  return state;
}

// useReducer hook for state management
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrease = () => {
    // dispatch on an button click event
    dispatch({
      type: 'INC'
    });
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

export default App;