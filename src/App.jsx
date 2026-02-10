import { useState } from "react";

/*
  count = ''

  State changes causes component's re-rendering.
*/

const App = () => {

  let [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };



  return (
    <>
      <button onClick={handleDecrease}>-</button>
      &nbsp;&nbsp;<span><strong>{count}</strong></span>&nbsp;&nbsp;
      <button onClick={handleIncrease}>+</button>
      &nbsp;&nbsp;
      <button onClick={() => setCount(1)}>Reset</button>
    </>
  )
}

export default App;