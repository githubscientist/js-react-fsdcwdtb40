import { useState } from "react";

/*
  complex state:

  counts = {
    count: 6,
    history: ['I', 'I', 'D']
  }
*/

const App = () => {

  let [values, setValues] = useState({
    count: 1,
    history: []
  });

  const handleIncrease = () => {
    if (values.count < 10) {
      setValues({ count: values.count + 1, history: [...values.history, 'I'] });
    }
  }

  const handleDecrease = () => {
    if (values.count > 1) {
      setValues({
        count: values.count - 1,
        history: [
          ...values.history,
          'D'
        ]
      })
    }
  };

  const handleReset = () => {
    setValues({
      count: 1,
      history: [
        ...values.history,
        'R'
      ]
    });
  };

  console.log(values);

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      &nbsp;&nbsp;<span><strong>{values.count}</strong></span>&nbsp;&nbsp;
      <button onClick={handleIncrease}>+</button>
      &nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App;