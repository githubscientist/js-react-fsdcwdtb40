import { useState } from "react";

const App = () => {

  const [state, setState] = useState({
    count: 0
  });

  const handleIncrement = () => {
    setState({
      count: state.count + 1
    })
  }

  console.log(state);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App;