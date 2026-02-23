import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./redux/features/counter/counterSlice";

const App = () => {

  // get the state
  const count = useSelector(selectCount);

  // get the dispatch
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App;