import { useReducer } from "react";

const reducer = (state, action) => {

  if (action.type == 'LIKE') {
    state = state + 1;
  } else if (action.type == 'DISLIKE') {
    state = state - 1;
  } else {
    return state;
  }

  return state;
}

const App = () => {

  let [likes, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={() => dispatch({ type: 'LIKE' })}>Like</button> &nbsp;
      <button onClick={() => dispatch({ type: 'DISLIKE' })}>Dislike</button>
    </>
  )
}

export default App;