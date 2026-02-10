import { useState } from "react";

/*
  count = ''

  State changes causes component's re-rendering.
*/

const App = () => {

  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  )
}

export default App;