import axios from "axios";
import { useEffect, useState } from "react";

/*
  useEffect
    - It's a react hook.
    - It allows us to perform side effects in our components.
    - examples: fetching data, setting up a subscription, and manually changing the DOM in React components.
*/

const App = () => {

  const [count, setCount] = useState(0);

  /*
    1. run a function after a component is rendered.
    2. run a function after a component is rendered and whenever a particular state changes.
    3. run a function after a component is rendered and whenever any state changes.
  */

  useEffect(() => {
    console.log('runs after first render and for every state changes');
  });

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default App;