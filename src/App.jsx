import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./redux/features/counter/counterSlice";

const App = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </>
  )
}

export default App;