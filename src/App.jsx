import { useState } from "react";

/*
  history = ['I', 'I', 'I', 'D', 'R', 'D', 'I']
*/

const App = () => {

  let [count, setCount] = useState(1);
  let [history, setHistory] = useState([]);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
      setHistory([...history, 'I']);
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      setHistory([...history, 'D']);
    }
  };

  const handleReset = () => {
    setCount(1);
    setHistory([...history, 'R']);
  };

  console.log(history);

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      &nbsp;&nbsp;<span><strong>{count}</strong></span>&nbsp;&nbsp;
      <button onClick={handleIncrease}>+</button>
      &nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App;