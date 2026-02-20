import { useState } from "react";

// useState hook for state management
const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

export default App;