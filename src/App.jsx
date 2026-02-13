import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      state = state + 1;
      break;

    case 'DISLIKE':
      state = state - 1;
      break;

    default:
      return state;
  }

  return state;
}

const App = () => {

  let [likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch({
      type: 'LIKE'
    });
  }

  const handleDislike = () => {
    dispatch({
      type: 'DISLIKE'
    });
  }

  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button> &nbsp;
      <button onClick={handleDislike}>Dislike</button>
    </>
  )
}

export default App;